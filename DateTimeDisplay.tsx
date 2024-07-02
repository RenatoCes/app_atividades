import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DateTimeDisplay: React.FC = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const day = currentDate.getDate();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`Data: ${day} de ${month} de ${year}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default DateTimeDisplay;
