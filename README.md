# 🚀 API REST com Express e TypeScript

API RESTful desenvolvida com Express.js e TypeScript, implementando operações CRUD para gerenciamento de produtos e pedidos com semântica REST e boas práticas.

## 🎯 Sobre o Projeto

Este projeto é uma API REST desenvolvida como atividade prática para demonstrar o uso de Express.js com TypeScript, aplicando os conceitos fundamentais de roteamento, middlewares, tipagem estática e boas práticas REST.

**Objetivos alcançados:**
- ✅ Configuração de endpoints RESTful
- ✅ Implementação de CRUD completo
- ✅ Validação de dados e tratamento de erros
- ✅ Middlewares personalizados (logger)
- ✅ Tipagem completa com TypeScript
- ✅ Organização de código com Express Router

## ✨ Funcionalidades

### Produtos
- 📋 Listagem geral de produtos
- 🔍 Filtro por categoria via Query String
- 📄 Busca de produto específico por ID
- ✅ Validação de ID negativo (retorna 400)

### Pedidos
- 📝 Criação de novos pedidos (POST)
- 🔄 Atualização de status (PATCH)
- ❌ Cancelamento de pedidos (DELETE)
- 🛡️ Validação de corpo da requisição

### Extras
- 📊 Middleware de logging (registra todas as requisições)
- 🎯 Tratamento de erros com status codes apropriados
- 🚦 Separação de rotas com Express.Router()

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Express.js** - Framework web para Node.js
- **TypeScript** - Superset tipado do JavaScript
- **ts-node-dev** - Desenvolvimento com hot reload
- **REST Client** - Para testes (recomendado)

## 📦 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)
- [Git](https://git-scm.com/) (opcional, para clonar o repositório)

## 🔧 Instalação

### 1. Clone o repositório
git clone [https://github.com/rubensparente/fullstack-pu12_atividade6.git]

### 2. Instale as dependências
npm install

### 3. Configure o TypeScript
npx tsc --init

### 4. Execute o servidor
- Modo desenvolvimento (com hot reload)
  - npm run dev

- Modo produção:
  - npm run build
  - npm start
- O servidor estará rodando em http://localhost:3000
