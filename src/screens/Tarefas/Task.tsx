// screens/DetailsScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert } from 'react-native';
import TaskStyles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Task {
  name: string;
  date: string;
}

const DetailsScreen: React.FC = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

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

    if (taskDate.trim() === '') {
      Alert.alert('Erro', 'Por favor, insira a data da tarefa.');
      return;
    }

    const currentDate = new Date();
    const taskDateObj = parseDate(taskDate);

    if (taskDateObj.getTime() < currentDate.getTime()) {
      Alert.alert('Atenção', 'A tarefa está expirada!');
    } else if (taskDateObj.toDateString() === currentDate.toDateString()) {
      Alert.alert('Atenção', 'A tarefa deve ser feita hoje!');
    } else {
      const newTask: Task = { name: taskName, date: taskDate };
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      saveTasks(updatedTasks);
      setTaskName('');
      setTaskDate('');
    }
  };

  const parseDate = (dateString: string): Date => {
    const [day, month, year] = dateString.split('/').map(Number);
    return new Date(year, month - 1, day); // Month in JavaScript Date is 0-indexed
  };

  const handleDeleteTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    saveTasks(newTasks);
  };

  const handleDateChange = (text: string) => {
    // Remove todos os caracteres que não são números
    const cleaned = text.replace(/[^\d]/g, '');

    // Adiciona os caracteres de formatação conforme necessário
    let formatted = '';
    if (cleaned.length >= 1) {
      formatted += cleaned.substring(0, 1).padStart(2);
    }
    if (cleaned.length >= 2) {
      formatted = cleaned.substring(0, 2);
    }
    if (cleaned.length > 2) {
      formatted += '/' + cleaned.substring(2, 3).padStart(2);
    }
    if (cleaned.length >= 4) {
      formatted = cleaned.substring(0, 2) + '/' + cleaned.substring(2, 4);
    }
    if (cleaned.length > 4) {
      formatted += '/' + cleaned.substring(4, 8);
    }

    setTaskDate(formatted);
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
        <TextInput
          style={TaskStyles.input}
          placeholder="Digite a data (ex: 1/7/2024)"
          value={taskDate}
          onChangeText={handleDateChange}
          keyboardType="numeric"
          maxLength={10}
        />
        <Button title="Adicionar" onPress={handleAddTask} />
      </View>

      {/* Lista de tarefas */}
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={TaskStyles.taskItem}>
            <Text>{item.name}</Text>
            <Text>{item.date}</Text>
            <Button title="Excluir" onPress={() => handleDeleteTask(index)} />
          </View>
        )}
      />
    </View>
  );
};

export default DetailsScreen;
