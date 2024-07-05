import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert } from 'react-native';
import TaskStyles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Notifications from 'expo-notifications';

interface Task {
  id: string;
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
    setupNotifications();
  }, []);

  useEffect(() => {
    checkTasksDaily();
  }, [tasks]);

  const setupNotifications = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Erro', 'Permissão para enviar notificações não concedida');
      return;
    }
    
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });
  };

  const checkTasksDaily = async () => {
    const now = new Date();
    const today = now.toLocaleDateString();
    const todayTasks = tasks.filter(task => task.date === today);
    const futureTasks = tasks.filter(task => new Date(task.date) > now);

    if (todayTasks.length > 0) {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Tarefas para hoje",
          body: `Você tem ${todayTasks.length} tarefas para hoje: ${todayTasks.map(task => task.name).join(', ')}`,
        },
        trigger: null, // Dispara imediatamente
      });
    } else if (futureTasks.length > 0) {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Tarefas futuras",
          body: `Você tem ${futureTasks.length} tarefas futuras: ${futureTasks.map(task => task.name).join(', ')}`,
        },
        trigger: null, // Dispara imediatamente
      });
    }
  };

  const saveTasks = async (tasks: Task[]) => {
    try {
      const jsonValue = JSON.stringify(tasks);
      await AsyncStorage.setItem('@tasks', jsonValue);
    } catch (e) {
      Alert.alert('Erro', 'Não foi possível salvar as tarefas. Tente novamente.');
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
      Alert.alert('Erro', 'Não foi possível carregar as tarefas. Tente novamente.');
      console.error('Erro ao carregar tarefas:', e);
    }
  };

  const handleAddTask = useCallback(() => {
    if (taskName.trim() === '') {
      Alert.alert('Erro', 'Por favor, insira o nome da tarefa.');
      return;
    }

    const currentDate = new Date();
    if (taskDate.getTime() < currentDate.setHours(-1, 0, 0, 0)) {
      Alert.alert('Atenção', 'A data selecionada já passou!');
    } else if (taskDate.toDateString() === currentDate.toDateString()) {
      Alert.alert('Atenção', 'A tarefa deve ser feita hoje!');
    } else {
      const newTask: Task = { id: Date.now().toString(), name: taskName, date: taskDate.toLocaleDateString() };
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      saveTasks(updatedTasks);
      setTaskName('');
      setTaskDate(new Date());
      Alert.alert('Sucesso', 'Tarefa adicionada com sucesso!');
    }
  }, [taskName, taskDate, tasks]);

  const handleDeleteTask = useCallback((taskId: string) => {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
    saveTasks(newTasks);
  }, [tasks]);

  const onChangeDate = useCallback((event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setTaskDate(selectedDate);
    }
  }, []);

  return (
    <View style={TaskStyles.container}>
      <Text style={TaskStyles.title}>Tarefas</Text>

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
              minimumDate={new Date()}
              onChange={onChangeDate}
            />
          )}
          <Text style={TaskStyles.dateText}>Data Selecionada: {taskDate.toLocaleDateString()}</Text>
        </View>
        <Button title="Adicionar Tarefa" onPress={handleAddTask} />
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={TaskStyles.taskItem}>
            <View>
              <Text style={TaskStyles.taskItemText}>{item.name}</Text>
              <Text style={TaskStyles.taskItemText}>{item.date}</Text>
            </View>
            <Button title="Excluir" onPress={() => handleDeleteTask(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

export default TaskScreen;
