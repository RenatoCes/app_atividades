// screens/DetailsScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert } from 'react-native';
import TaskStyles from './style';

interface Task {
  name: string;
  date: string;
}

const TaskScreen: React.FC = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

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
    } else if (taskDateObj.getTime() === currentDate.getTime()) {
      Alert.alert('Atenção', 'A tarefa deve ser feita hoje!');
    } else {
      const newTask: Task = { name: taskName, date: taskDate };
      setTasks([...tasks, newTask]);
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
          placeholder="Digite a data (ex: 01/07/2024)"
          value={taskDate}
          onChangeText={(text) => setTaskDate(text)}
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

export default TaskScreen;
