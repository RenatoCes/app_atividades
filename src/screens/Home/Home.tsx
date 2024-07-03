import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/Types'; // Importando os tipos
import Homestyles from './style';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={Homestyles.container}>
      <Text style={Homestyles.text}>Tela Home</Text>
      <TouchableOpacity
        style={Homestyles.buttonContainer}
        onPress={() => navigation.navigate('Tarefa')}
      >
        <Text style={Homestyles.buttonText}>adcionar Tarefa </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;