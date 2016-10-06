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
    render: function() {
        return (
            <div className="container">
                <div className="span10 offset1">
                    <div className="row">
                        <h3 className="well">Autores</h3>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Authors;