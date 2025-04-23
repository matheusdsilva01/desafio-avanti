# Avanti Store
##### Este é um projeto desenvolvido para o desafio técnico Frontend, foi desenvolvido um layout, seguindo o design fornecido, usando HTML, CSS e JavaScript.

## Projeto desenvolvido utilizando as seguintes tecnologias
  - `HTML`
  - `CSS` Escrito em CSS puro, utilizando a metodologia BEM (Block Element Modifier) e Utility First para organização e clareza na estruturação dos estilos.
  - `Javascript`

## Estrutura do Projeto
#### A estrutura do projeto é organizada da seguinte forma:

```
desafio-avanti
├── assets
│   ├── Contém sub-pastas com imagens e ícones utilizados no projeto
├── index.html
│   ├── Estrutura HTML da página
├── reset.css
│   ├── Reset CSS para garantir consistência entre navegadores
├── index.css
│   ├── Estilos CSS principais
├── variables.css
│   ├── Variáveis CSS para cores e fontes
├── index.js
│   ├── Lógica JavaScript para interatividade
├── README.md
│   ├── Documentação do projeto
```

## Como funciona
O projeto consiste em uma página de loja com um layout responsivo. O HTML é utilizado para estruturar o conteúdo, o CSS para estilizar a página e o JavaScript para adicionar interatividade.

### Funcionalidades
Você também pode encontrar comentários no arquivo [index.js](https://github.com/matheusdsilva01/desafio-avanti/blob/c2e8b83a655e0516cbca0a1d89ce749cb95c8d13/index.js) que visam ajudar o entendimento do funcionamento do código.

- Funcionalidade de busca.\
  Quando o usuário pesquisa por algo na barra de pesquisa, a aplicação exibe um alerta no parte inferior na tela com a mensagem "Você pesquisou por: 'termo pesquisado'". O alerta desaparece após 3 segundos.

- Header navegável.\
  O header contém a logotipo, barra de pesquisa e um ícone de carrinho de compras, abaixo uma linha de navegação que lista os departamentos e uma opção de "Todas as categorias", em que ao passar o mouse sobre esse elemento é exibido um dropdown mostrando todos os departamentos disponíveis em coluna e algo clicar sobre um deles, é exibido ao lado uma seção com as categorias do departamento selecionado, esse comportamento é feito com JavaScript e se adapta ao tamanho da tela sendo responsivo.

- Carousel de produtos.\
  Carousel que exibe produtos com imagem, título, preço e outras informações adicionais. É possível navegar usando os botões de navegação no desktop e com gestos horizontais no mobile, além dos indicadores de navegação na parte inferior que são manipulados pelo JavaScript usando também Event Delegation.

- Links footer.\
  O footer contém links para demais páginas do site, como "Institucional", "Central de Ajuda" e "Atendimento", fazendo uso das tags HTML `summary` e `details` para exibir as informações adicionais tendo sua interatividade controlada com CSS e JS para seguir o layout do design proposto.

## Visualização do Projeto
Para visualizar o projeto localmente, siga as instruções abaixo.

1. Clone o repositório:

```bash
git clone https://github.com/matheusdsilva01/desafio-avanti
```
2. Copie o caminho absoluto do arquivo `index.html` e cole no seu navegador.

3. O projeto será exibido no seu navegador.
