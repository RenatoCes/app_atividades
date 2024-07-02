// screens/DetailsScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import DetailStyles from './style';
import DateTimeDisplay from '../../calendario/DateTimeDisplay';

interface Task {
  name: string;
  date: string;
}

const TaskScreen: React.FC = () => {
  const [taskName, setTaskName] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = () => {
    if (taskName.trim() !== '') {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = currentDate.toLocaleString('default', { month: 'long' });
      const day = currentDate.getDate();
      const date = `${day} de ${month} de ${year}`;
      setTasks([...tasks, { name: taskName, date }]);
      setTaskName('');
    }
  };

  const handleDeleteTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <View style={DetailStyles.container}>
      <Text style={DetailStyles.title}>Tarefas</Text>

      {/* Input para adicionar nova tarefa */}
      <View style={DetailStyles.inputContainer}>
        <TextInput
          style={DetailStyles.input}
          placeholder="Digite o nome da tarefa"
          value={taskName}
          onChangeText={(text) => setTaskName(text)}
        />
        <Button title="Adicionar" onPress={handleAddTask} />
      </View>

      {/* Lista de tarefas */}
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={DetailStyles.taskItem}>
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
