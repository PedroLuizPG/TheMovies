# **Site de Filmes com React**

---

## **Objetivo**

Criar um site que permita aos usuários explorar uma lista de filmes obtida a partir de uma API externa. O site possibilitará filtrar filmes por gênero ou pesquisar pelo nome, visualizar detalhes de filmes específicos e salvar filmes favoritos no armazenamento local (Local Storage).

---

## **Público-Alvo**

Amantes de cinema que desejam uma interface simples e funcional para explorar filmes e criar uma lista personalizada de favoritos.

---

## **Funcionalidades Principais**

### **Páginas e Rotas**

1. **Home:**
   - Exibe uma lista de filmes obtidos pela API.
   - Permite filtrar filmes por gênero.
   - Inclui barra de pesquisa para buscar filmes pelo nome.
2. **Filme:**
   - Exibe todos os detalhes de um filme selecionado, incluindo:
     - Título.
     - Descrição.
     - Nota.
     - Data de lançamento.
   - Botão para adicionar o filme à lista de favoritos.
3. **Favoritos:**
   - Lista todos os filmes salvos pelo usuário no Local Storage.
   - Permite excluir filmes da lista de favoritos.
   - Links para acessar os detalhes de cada filme favorito.
4. **Erro:**
   - Página exibida para rotas não encontradas com uma mensagem amigável e opção de retorno à home.

---

### **Funcionalidades Específicas**

1. **Filtragem e Pesquisa:**
   - Na página Home:
     - Dropdown ou botões para selecionar gêneros.
     - Barra de pesquisa que atualiza a lista com base no nome do filme.
2. **Favoritos:**
   - Salvar filmes no Local Storage ao clicar em um botão.
   - Recuperar e exibir os filmes salvos na página de Favoritos.
   - Remover filmes da lista de favoritos.
3. **Detalhes dos Filmes:**
   - Exibição completa de informações obtidas pela API para um filme específico.

---

## **Estrutura do Projeto**

### **Componentes**

- **Header:**
  - Barra de navegação com links para Home e Favoritos.
- **Rotas:**
  - Definidas usando `react-router-dom`.
  - Rotas principais: `/`, `/filme/:id`, `/favoritos`, `/*` (página de erro).
- **Páginas:**
  - Home.
  - Filme.
  - Favoritos.
  - Erro.

### **Funcionalidades com Axios**

- Requisições para uma API de filmes usando `axios`.
- Obtenção de:
  - Lista de filmes.
  - Detalhes de um filme pelo `id`.

### **Local Storage**

- **Salvar Favoritos:**
  - Filmes são armazenados no Local Storage com uma chave única.
- **Exibir Favoritos:**
  - Recuperar e renderizar os dados salvos na página de Favoritos.
- **Excluir Favoritos:**
  - Remover filmes da lista e atualizar o Local Storage.

---

## **Tecnologias Utilizadas**

### **Frontend:**

- React.js.
- React Router DOM.
- Axios.
- CSS para estilização (ou frameworks como Tailwind CSS/Bootstrap).
- react-toastify.
- react-loading-indicators.

### **API Externa:**

- Integração com uma API de filmes (ex.: [The Movie Database API - TMDB](https://www.themoviedb.org/)).

### **Armazenamento Local:**

- Local Storage para salvar filmes favoritos.

---

## **Como Executar o Projeto**

1. Clone este repositório:
   ```bash
   git clone git@github.com:PedroLuizPG/TheMovies.git

2. Instale as dependências:
    yarn add

3. Configure a API:
    -Crie uma conta no TMDB e obtenha sua chave de API.
    -Substitua a chave de API no arquivo de configuração do projeto.
    
4. Inicie o servidor de desenvolvimento:
    yarn start
