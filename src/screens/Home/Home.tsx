// HomeScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Homestyles from './style'; 
import DetailsScreen from '../details/Details';


const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={Homestyles.container}>
      <Text style={Homestyles.text}> tela Home</Text>
      <TouchableOpacity
        style={Homestyles.buttonContainer}
        onPress={() => navigation.navigate('DetailsScreen')}
      >
        <Text style={Homestyles.buttonText}>Pressione Aqui</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
