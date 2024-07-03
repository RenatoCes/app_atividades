import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert, Platform } from 'react-native';
import TaskStyles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';

interface Task {
  name: string;
  date: string;
}

const TaskScreen: React.FC = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDate, setTaskDate] = useState(new Date());
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    loadTasks();
  }, []);

  const saveTasks = async (tasks: Task[]) => {
    try {
      const jsonValue = JSON.stringify(tasks);
      await AsyncStorage.setItem('@tasks', jsonValue);
    } catch (e) {
      console.error('Erro ao salvar tarefas:', e);
    }
  };

  const loadTasks = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@tasks');
      if (jsonValue != null) {
        setTasks(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.error('Erro ao carregar tarefas:', e);
    }
  };

  const handleAddTask = () => {
    if (taskName.trim() === '') {
      Alert.alert('Erro', 'Por favor, insira o nome da tarefa.');
      return;
    }

    const currentDate = new Date();

    if (taskDate.getTime() < currentDate.getTime()) {
      Alert.alert('Atenção', 'A tarefa está expirada!');
    } else if (taskDate.toDateString() === currentDate.toDateString()) {
      Alert.alert('Atenção', 'A tarefa deve ser feita hoje!');
    } else {
      const newTask: Task = { name: taskName, date: taskDate.toLocaleDateString() };
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      saveTasks(updatedTasks);
      setTaskName('');
      setTaskDate(new Date());
      Alert.alert('Sucesso', 'Tarefa adicionada com sucesso!');
    }
  };

  const handleDeleteTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    saveTasks(newTasks);
  };

  const onChangeDate = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setTaskDate(selectedDate);
    }
  };

  return (
    <View style={TaskStyles.container}>
      <Text style={TaskStyles.title}>Tarefas</Text>

      {/* Input para adicionar nova tarefa */}
      <View style={TaskStyles.inputContainer}>
        <TextInput
          style={TaskStyles.input}
          placeholder="Digite o nome da tarefa"
          value={taskName}
          onChangeText={(text) => setTaskName(text)}
        />
        <View>
          <Button title="Escolher Data" onPress={() => setShowDatePicker(true)} />
          {showDatePicker && (
            <DateTimePicker
              value={taskDate}
              mode="date"
              display="default"
              onChange={onChangeDate}
            />
          )}
          <Text style={TaskStyles.dateText}>Data Selecionada: {taskDate.toLocaleDateString()}</Text>
        </View>
        <Button title="Adicionar Tarefa" onPress={handleAddTask} />
      </View>

      {/* Lista de tarefas */}
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={TaskStyles.taskItem}>
            <View>
              <Text style={TaskStyles.taskItemText}>{item.name}</Text>
              <Text style={TaskStyles.taskItemText}>{item.date}</Text>
            </View>
            <Button title="Excluir" onPress={() => handleDeleteTask(index)} />
          </View>
        )}
      />
    </View>
  );
};

export default TaskScreen;
