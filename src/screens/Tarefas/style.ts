// style.js ou style.ts
import { StyleSheet } from 'react-native';

const TaskStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  dateText: {
    marginBottom: 10,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  taskItemText: {
    fontSize: 18,
  },
  emptyListText: { // Adicione este estilo
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: '#999',
  },
});

export default TaskStyles;
