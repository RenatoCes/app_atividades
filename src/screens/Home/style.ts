// HomeStyle.ts
import { StyleSheet } from 'react-native';

const Homestyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, // Ajuste para espaçamento abaixo do texto
  },
  buttonContainer: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginTop: 20, // Adicione margem acima do botão
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Homestyles;
