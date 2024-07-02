import React from 'react';
import { StyleSheet, View } from 'react-native';
import DateTimeDisplay from './DateTimeDisplay';

export default function Data() {
  return (
    <View style={styles.container}>
      <DateTimeDisplay />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
