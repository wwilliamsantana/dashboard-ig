# Dashboard IG

Aplicação web para controle financeiro, com visualização de receitas, despesas e saldo total. O projeto permite consultar transações, pesquisar registros e adicionar novas movimentações.

## Funcionalidades

- Resumo financeiro de entradas, saídas e total.
- Listagem de transações com descrição, valor, categoria e data.
- Busca de transações por texto.
- Cadastro de novas transações.
- Integração com uma API local para consulta e armazenamento dos registros de exemplo.

## Tecnologias

- React
- TypeScript
- Vite
- Styled Components
- Axios
- React Hook Form
- Zod
- JSON Server

## Como executar

### Pré-requisitos

- Node.js e npm instalados.

### Instalação

Clone o repositório e acesse a pasta do projeto:

```bash
git clone https://github.com/wwilliamsantana/dashboard-ig.git
cd dashboard-ig
```

Instale as dependências:

```bash
npm install
```

### Iniciar a aplicação

Em um terminal, inicie a API local:

```bash
npm run dev:server
```

Em outro terminal, inicie a aplicação:

```bash
npm run dev
```

Acesse o endereço exibido pelo Vite no terminal, geralmente `http://localhost:5173`.


## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o ambiente de desenvolvimento. |
| `npm run dev:server` | Inicia a API local com JSON Server. |
| `npm run build` | Verifica os tipos TypeScript e gera a versão de produção. |
| `npm run preview` | Disponibiliza uma prévia da versão de produção. |
| `npm run lint` | Executa a análise estática do código. |

## Objetivo

Projeto desenvolvido para praticar a construção de interfaces com React e TypeScript, gerenciamento de estado, formulários e integração com uma API.

---
