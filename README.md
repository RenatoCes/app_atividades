# Nome do Projeto

## Introdução
O app REMINDER tem o intuito de auxiliar responsáveis a cuidar de indivíduos com TEA na interação social dos indivíduos. Ele oferece uma plataforma intuitiva e acessível, onde os usuários podem registrar e gerenciar atividades diárias, bem como configurar lembretes para eventos importantes. O app garante que as notificações sejam enviadas em tempo real, ajudando a manter a rotina organizada e promovendo a independência dos indivíduos com TEA. Além disso, o REMINDER permite que os responsáveis acompanhem o progresso e ajustes das atividades conforme necessário, contribuindo para uma melhor qualidade de vida e inclusão social.

## Funcionalidades Principais
O aplicativo foi desenvolvido utilizando a arquitetura MVVM (Model-View-ViewModel), que facilita a separação de responsabilidades, melhora a testabilidade e mantém a interface do usuário desacoplada da lógica de negócios. A estrutura do projeto foi organizada da seguinte forma:

Model: Gerencia a lógica dos dados e armazenamento, utilizando estados do React e AsyncStorage.
View: Representa a interface do usuário com componentes JSX e estilos.
ViewModel: Contém os hooks e handlers de eventos que transformam e expõem dados para a View.
Descrição das principais funcionalidades implementadas
Tela Home:

Exibe uma lista de tarefas.
Permite adicionar novas tarefas com um nome e uma data.
Valida a entrada do usuário e verifica se a tarefa está expirada ou deve ser feita no dia atual.
Permite excluir tarefas.
Navegação:

Utiliza o React Navigation para permitir a navegação entre a tela Home e outras telas, como a tela de detalhes das tarefas.
Persistência de dados:

Utiliza AsyncStorage para salvar e carregar tarefas, garantindo que os dados sejam persistidos mesmo após o fechamento do aplicativo.
Discussão sobre desafios enfrentados durante a implementação e como foram superados
Gestão de dependências e conflitos:


## Testes:

Para util

A validação da data das tarefas e a gestão de estados múltiplos foram desafios técnicos resolvidos com a implementação de lógica específica nos handlers de eventos e utilizando hooks do React.
Considerações Técnicas e Desempenho

'
## Descrição das tecnologias
React Native: Framework principal para desenvolvimento do aplicativo móvel.
Expo: Utilizado para facilitar a construção, a execução e a compilação do aplicativo.
Linguagens de programação
JavaScript/TypeScript: Utilizado para desenvolvimento dos componentes React e lógica do aplicativo.
Frameworks
React Native: Para criação da interface do usuário.
Expo: Para simplificar o desenvolvimento e o gerenciamento do projeto.
React Navigation: Para gerenciamento de navegação entre telas.
Bibliotecas utilizadas
AsyncStorage: Para persistência de dados local.
DateTimePicker: Para seleção de datas.
React Navigation: Para navegação entre telas.
React Native Vector Icons: Para ícones customizáveis.
Testing Library: Para testes de unidade e integração (embora temporariamente removido).

- ...

## Como Usar


## Contribuição

## Contribuição

## Contribuição


## Licença
[Informações sobre a licença do projeto.]

## Contato
[Como os usuários podem entrar em contato com você ou a equipe.]

