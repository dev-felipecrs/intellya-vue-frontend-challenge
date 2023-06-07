![Intellya Logo](./intellya.png)

# Desafio para vaga de Front-End Pleno na Intellya

Olá! Estamos muito felizes por você ter chegado até esta etapa do processo seletivo. Desejamos muito sucesso e esperamos que você tenha uma experiência agradável enquanto trabalha neste desafio. 

Este é um projeto desafio para a vaga de Front-End Pleno na Intellya. O objetivo é desenvolver um aplicativo Vue.js utilizando Vue 3 + Typescript + Axios + Vue Router. O uso do Vite é opcional.

Em vez de requisitar uma API já existente, você deve clonar este repositório, instalar as dependências necessárias e rodar a API que será utilizada para o desafio. 

## Como Rodar a API

Para configurar e executar a API, siga os passos abaixo:

1. Clone este repositório: `git clone https://github.com/seu-usuario/nome-do-repositorio.git`
2. Instale as dependências: `npm install`
3. Inicie a API: `npm run start`

A API irá rodar localmente e poderá ser acessada através do `http://localhost:3000`.

Lembre-se de que o token para ser usado no header `x-api-key` é `70335667-2408-4011-a994-ea3e7042d96f`.

## Telas

As duas telas necessárias para o projeto podem ser encontradas na pasta `telas` deste repositório.

### Tela de Listagem de Usuários

![Tela de Listagem de Usuários](/telas/tela-listagem-usuarios.png)

A primeira tela consiste em uma listagem de usuários. Os dados devem ser consumidos da API que você acabou de rodar. Para acessar a rota autenticada `/users`, é necessário enviar um token no cabeçalho da requisição com a chave `x-api-key: <token>`.

Cada linha da tabela deve conter um elemento `<router-link>` que leva para a segunda tela, passando o parâmetro `id` que corresponde ao ID do usuário daquela linha.

### Tela de Detalhes do Usuário

![Tela de Detalhes do Usuário](/telas/tela-detalhes-usuario.png)

A segunda tela exibe os detalhes de um usuário específico. A rota para esta tela é `/user/:id`, onde `:id` representa o ID do usuário. O ID do usuário pode ser obtido através do Vue Router.

Os dados do usuário devem ser requisitados da rota `/user/:id` e preenchidos na tela conforme mostrado na imagem.

## Considerações Finais

As cores utilizadas nas telas são `#E4CA85` e `#b09e71`, sendo a segunda utilizada para o link "Visualizar" da tabela. A logo utilizada pode ser encontrada neste repositório em `/assets/logo.png`.

Certifique-se de ter as versões mais recentes do Node.js e npm instaladas em sua máquina.

Se você optar por usar o Vite, lembre-se de atualizar os comandos de instalação e execução de acordo.

Se surgirem dúvidas ou problemas durante a configuração ou desenvolvimento, fique à vontade para entrar em contato através do e-mail `recrutamento@intellya.com`

Boa sorte e nos vemos na próxima etapa!
