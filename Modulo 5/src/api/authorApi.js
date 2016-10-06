/**
 * Arquivo: authorApi.js
 * Author: Glaucia Lemos
 * Data: 06/10/2016
 * Description: Arquivo responsável por realizar os mocks para poder testar a 
 * aplicação via Ajax com dados já pré-definidos.
 */

"use strict";

//O arquivo 'authorData' será responsável por realizar o mock do API através de dados já 
//pré-definidos:
var authors = require('./authorData').authors;
var _ = require('lodash');

//Aqui será realizada no servidor na aplicação real.
var _generatedId = function(author) {
    return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
};

//Aqui irá clonar uma cópia do item que será passado por um determinado valor
var _clone = function(item) {
    return JSON.parse(JSON.stringify(item));
}

//Desde aqui já iremos simular um CRUD com AJAX:
var AuthorApi = {

    //Função responsável por mostrar todos os Autores:
    getAllAuthors: function() {
        return _clone(authors);
    },

    //Função responsável por mostrar os autores pelo Id:
    getAuthorById: function() {
        var author = _.find(authors, {id: id});
        return _clone(authors);
    },
    
    //Função responsável por salvar um Autor:
    saveAuthor: function(author) {
        console.log('Irá só salvar o autor para o DB via AJAX');

        if(author.id) {
            var existingAuthorIndex = _.index(authors, _.find(authors, {id:id}));
        }
    }


}



