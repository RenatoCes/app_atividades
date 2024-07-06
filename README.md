# REMINDER ![alt text](assets/favicon.png)

## 🚀 **Pré-requisitos**
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
- **React Native Vector Icons**: Para ícones customizáveis.
- **Testing Library**: Para testes de unidade e integração (embora temporariamente removido).

## 🤝 **COLABORADORES**
Agradecimentos especiais aos colaboradores que contribuíram para o desenvolvimento deste projeto:


![Gustavo Felix do Rego](assets/colaborador1.jpg)  



![Renato César dos Santos Júnior](assets/colaborador2.jpg)  



![Tiago José Cardoso Leite](assets/colaborador3.jpg)  


## 📝 **Licença**
Esse projeto está sob licença MIT.
