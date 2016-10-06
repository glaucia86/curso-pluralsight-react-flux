/**
 * Arquivo: homePage.js
 * Author: Glaucia Lemos
 * Data: 06/10/2016
 * Description: Arquivo responsável por mostrar uma página de lista de autores de seus
 * respectivos cursos. Aqui está o Componente página: 'Autores'
 */

"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');

var Authors = React.createClass({

    //Aqui estamos iniciando o estado dos autores:
    getInitialState: function() {
        return {
            authors: []
        };
    },

    //'componentWillMount' é um método que é chamado uma vez só, tanto do lado do client
    //quando do server antes da renderização acontecer
    componentWillMount: function() {
        this.setState({ authors: AuthorApi.getAllAuthors() });
    },

    render: function() {

        //Lógica responsável por trazer os autores já pré-definidos no arquivo: 'authorData.js':
        var createAuthorRow = function(author) {
            return (
                <tr key={author.id}>
                    <td><a href={"/#authors/" + author.id}>{author.id}</a></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            ); 
        };

        //Parte do código onde receberá os dados dos autores 
        //já pré-definidos no arquivo: 'authorData.js'
        return (
            <div className="container">
                <div className="span10 offset1">
                    <div className="row">
                        <h3 className="well">Autores</h3>

                        <table className="table">
                            <thead>
                                <th>Id</th>
                                <th>Nome</th>
                            </thead>
                            <tbody>
                                {this.state.authors.map(createAuthorRow, this)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Authors;