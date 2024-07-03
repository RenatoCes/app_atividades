import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TaskScreen from '../src/screens/Tarefas/Task';

describe('TaskScreen', () => {
  it('adds a task', () => {
    const { getByPlaceholderText, getByText, queryByText } = render(<TaskScreen />);

    const taskNameInput = getByPlaceholderText('Digite o nome da tarefa');
    const taskDateInput = getByPlaceholderText('Digite a data');

    fireEvent.changeText(taskNameInput, ' tarefa aleatoria');
    fireEvent.changeText(taskDateInput, '12/12/2024');
    fireEvent.press(getByText('Adicionar'));

    expect(queryByText('tarefa aleatoria')).toBeTruthy();
    expect(queryByText('12/12/2024')).toBeTruthy();
  });
});
