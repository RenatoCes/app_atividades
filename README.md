# REMINDER ![alt text](assets/favicon.png)

## 🚀 **Pré-requisitos**

 Antes de começar, verifique se você atendeu aos seguintes requisitos:
- Você tem uma máquina `Windows`, `android`.
 - Você tem o `nodejs` instalado na maquina
 - no seu dispositivo android instale o app expo go para utilizar o app
 - expo

    ```bash
    npm install -g expo-cli
    ````

1. Instale as seguintes dependências:

    ```bash
    npm install @react-native-community/datetimepicker
    npm install @react-native-async-storage/async-storage
    npm install @react-navigation/native
    npm install react-native-screens react-native-safe-area-context
    npm install @react-navigation/native-stack
    npm install @react-navigation/native
    ```

2. Para iniciar o servidor de desenvolvimento do projeto Expo React Native:

    ```bash
    npm expo start
    ```

3. Finalizar o servidor:

    ```bash
    Ctrl + c
    ```

## 🧪 **TESTES**
Para realizar testes no REMINDER foi utilizado o Jest, um framework de teste de código aberto para JavaScript.

**Passo a passo para realizar os testes:**

1. Instale as dependências no terminal:

    ```bash
    npm install --save-dev jest @testing-library/react-native @testing-library/jest-native --legacy-peer-deps
    ```

2. Execute o seguinte comando no terminal:

    ```bash
    npm test
    ```

> **⚠️ IMPORTANTE**
> 
> É importante executar o comando:
> 
> ```bash
> npm uninstall jest @testing-library/react-native @testing-library/jest-native @types/jest react-test-renderer
> ```
> 
> após a execução de testes para poder iniciar o servidor novamente.

## 💻 **Bibliotecas Utilizadas**
- **AsyncStorage**: Para persistência de dados local.
- **DateTimePicker**: Para seleção de datas.
- **React Navigation**: Para navegação entre telas.
- **Testing Library for React Native**:Biblioteca de testes que facilita a escrita e execução de testes para aplicativos React Native.
- **Jest**:Framework de teste de JavaScript
- **TypeScript**:Linguagem de programação que adiciona tipagem estática opcional ao JavaScript
- **React Native Screens**:Framework de teste de JavaScript.
- **Expo SDK**:Conjunto de APIs e serviços fornecidos pela Expo para desenvolvimento de aplicativos móveis.


## 🤝 **COLABORADORES**
<table>
  <tr>
    <td align="center">
      <a href="#" title="defina o titulo do link">
        <img src="" width="100px;" alt="Gustavo"/><br>
        <sub>
          <b>Gustavo Felix do Rego</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#" title="defina o titulo do link">
        <img src="" width="100px;" alt="Renato"/><br>
        <sub>
          <b>Renato César dos Santos Júnior</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#" title="defina o titulo do link">
        <img src="" width="100px;" alt="Tiago"/><br>
        <sub>
          <b>Tiago Jose Cardoso Leite</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## 📝 **Licença**
Esse projeto está sob licença MIT.
