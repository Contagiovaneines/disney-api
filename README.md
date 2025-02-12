# **Character Search App**

Este projeto consiste em uma aplicação Angular que permite pesquisar e visualizar informações sobre personagens, incluindo detalhes como filmes, programas de TV, video games, inimigos, aliados e uma imagem do personagem. A aplicação também oferece funcionalidades de navegação de páginas e filtro de dados por nome.

## **Funcionalidades**

- **Exibição de Dados**: Exibe informações sobre personagens, como nome, filmes, programas de TV, video games, inimigos, aliados e imagem.
- **Pesquisa**: Permite ao usuário pesquisar personagens por nome.
- **Navegação de Páginas**: A navegação entre páginas é implementada para carregar dados de forma paginada.
- **Exibição de Erros**: Exibe uma mensagem de erro caso ocorra algum problema ao carregar os dados.
- **Responsividade**: A interface é responsiva e se ajusta para diferentes tamanhos de tela.

## **Tecnologias Usadas**

- **Angular 17**: Framework front-end para construção da interface de usuário.
- **Bootstrap**: Utilizado para estilização responsiva e componentes prontos como botões e navegação.
- **RxJS**: Para gerenciamento assíncrono, especialmente para lidar com requisições HTTP.
- **HttpClient**: Para fazer requisições à API externa e carregar dados de personagens.
- **Font Awesome**: Para ícones e estilização de botões.

## **Como Rodar o Projeto**

### **Pré-requisitos**

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### **Passos para Rodar**

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Contagiovaneines/character-search-app.git
   cd character-search-app
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Inicie a aplicação:**

   ```bash
   ng serve
   ```

   A aplicação estará disponível em `http://localhost:4200`.

## **Estrutura do Projeto**

A estrutura do projeto segue um padrão organizado e modular. Aqui está um resumo dos principais arquivos e diretórios:

```
src/
├── app/
│   ├── components/
│   │   ├── character/
│   │   │   ├── character.component.html      # Template do componente de personagem
│   │   │   ├── character.component.css       # Estilos do componente de personagem
│   │   │   ├── character.component.ts        # Lógica do componente de personagem
│   │   │   └── character.component.spec.ts   # Testes do componente de personagem
│   │   └── services/
│   │       └── servico-character.service.ts  # Serviço para obter dados da API
│   ├── app-routing.module.ts                 # Configuração de rotas
│   ├── app.module.ts                         # Módulo principal da aplicação
│   └── app.component.ts                      # Componente principal da aplicação
├── assets/                                   # Imagens e outros arquivos estáticos
└── environments/
    ├── environment.ts                        # Configurações de ambiente para desenvolvimento
    └── environment.prod.ts                   # Configurações de ambiente para produção
```

## **Componentes**

### **CharacterComponent**

Responsável pela exibição dos dados dos personagens e funcionalidades de pesquisa e navegação de páginas.

- **Atributos**:
  - `dados`: Armazena todos os dados de personagens.
  - `dadosFiltrados`: Armazena os dados filtrados com base na pesquisa.
  - `erro`: Armazena mensagens de erro em caso de falhas na requisição.
  - `paginaAtual`: Controla a página atual na navegação.
  - `totalPaginas`: Controla o número total de páginas de dados.
  - `pesquisa`: Contém o termo de pesquisa digitado pelo usuário.

- **Métodos**:
  - `ngOnInit`: Inicializa os dados ao carregar o componente.
  - `carregarDados`: Faz a requisição dos dados e os armazena nas variáveis `dados` e `dadosFiltrados`.
  - `filtrarDados`: Filtra os dados com base na pesquisa.
  - `proximaPagina` / `paginaAnterior`: Controlam a navegação entre as páginas.
  - `getDadosPaginaAtual`: Retorna os dados da página atual.

### **ServicoCharacterService**

Serviço responsável por fazer requisições à API externa para obter os dados dos personagens.

- **Métodos**:
  - `getDados`: Realiza uma requisição GET à API para obter os dados dos personagens com base na página e no tamanho da página.

## **API Externa**

A aplicação utiliza a API [Disney API](https://api.disneyapi.dev) para buscar dados de personagens, filmes, programas de TV, etc. Os dados são recuperados via o serviço `ServicoCharacterService`.

## **Estilos e Responsividade**

A aplicação é responsiva e utiliza Bootstrap para garantir que os cards dos personagens e a navegação de páginas se ajustem corretamente a diferentes tamanhos de tela. As imagens dos personagens são ajustadas para ter o mesmo tamanho, utilizando a propriedade `object-fit: cover`.

### **Destaques de Estilo**:

- **Cards de Personagem**: São estilizados com bordas arredondadas e um efeito de hover.
- **Barra de Pesquisa**: Personalizada com bordas arredondadas e um efeito de foco.
- **Navegação de Páginas**: Utiliza um layout responsivo com botões de navegação animados.

## **Melhorias Futuras**

- **Cache de Dados**: Implementar o cache dos dados para evitar recarregar tudo da API a cada nova pesquisa ou navegação de página.
- **Filtros Avançados**: Adicionar mais filtros de pesquisa, como por filmes ou programas de TV.
- **Scroll Infinito**: Em vez de navegação de páginas, considerar implementar um scroll infinito para carregar os dados automaticamente conforme o usuário rola a página.
- **Desempenho**: Otimizar a filtragem de dados com debounce para melhorar a performance durante a digitação na barra de pesquisa.

## **Licença**

Este projeto está licenciado sob a [MIT License](LICENSE).
