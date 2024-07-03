import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../src/screens/Home/Home';

describe('HomeScreen', () => {
  it('navigates to Details screen on button press', () => {
    const { getByText } = render(
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    );

    fireEvent.press(getByText('Pressione Aqui'));
    // Verifique se a navegação foi chamada
    expect(getByText('TaskScreen')).toBeTruthy();
  });
});
