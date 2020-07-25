<h1 align="center">
    oNotes
</h1>

## oNotes
Esse é um projeto de backend de um sistema de anotações


<p align="center">
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#começando">Começando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#principais-rotas">Principais Rotas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#licença">Licença</a>
</p>




## Tecnologias

Esse projeto foi desenvolvido com algumas tecnologias, entre quais são:

- [Node.js](https://nodejs.org/en/)
- [expressjs](https://expressjs.com/)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [tsyringe](https://github.com/microsoft/tsyringe)
- [typeorm](https://typeorm.io/#/)


## Projeto

oNotes é um projeto de anotações, onde poderá ter suas notas em todo lugar
esse projeto é apenas o backend, e o código do frontend está em [onotes web](https://github.com/olucasokarin/onotes-web.git).

Resolvi desenvolver esse projeto quando tive uma dificuldade de ter algumas dificuldades de acessar minhas notas do app de notas do meu celular. \
E resolvi desenvolver meu próprio projeto para tal, sendo que ainda terá um app feito em react native.


## Começando

 1. Clone esse repositorio ```git clone https://github.com/olucasokarin/onotes-back.git```
 2. Mova para a directorio: ```cd onotes-back```
 3. Run ```yarn``` para instalar as dependências
 4. Congifure ormconfig para oseu banco
 5. Run ```yarn typeorm migration:run``` para iniciar as migrations do banco
    1. Tenha o banco postgres intalado ou uma instância no docker
 6. Run ```yarn dev:server```


## Principais Rotas

**POST ```/user```**: para criar um novo usuário \
**POST ```/sessions```**: para criar uma nova sessão

**POST ```/categories```**: para criar uma nova categoria \
**GET ```/categories```**: para listar todas as categorias \
**PUT ```/categories/categoryId```**: para atualizar uma categoria especifica \
**DELETE ```/categories/categoryId```**: para deletar uma categoria especifica

**POST ```/notes```**: para criar uma nova nota \
**GET ```/notes```**: para listar todas as notas \
**PUT ```/notes/noteId```**: para atualizar uma nota especifica \
**DELETE ```/notes/noteId```**: para deletar uma nota especifica




 ## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

