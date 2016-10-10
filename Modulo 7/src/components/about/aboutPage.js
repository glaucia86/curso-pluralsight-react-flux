/**
 * Arquivo: aboutPage.js
 * Author: Glaucia Lemos
 * Data: 06/10/2016
 * Description: Arquivo responsável por mostrar o conteúdo da página 'About'.
 * Aqui está o Componente da Página 'About'.
 * 
 */

"use strict";

var React = require('react');

var About = React.createClass({
    render: function() {
        return (
            <div className="container">
                <div className="span10 offset">
                    <div className="row">
                        <h3 className="well">Sobre</h3>
                            <p>
                            Esta aplicação utiliza as seguintes tecnologias:
                                <ul>
                                    <li>React</li>
                                    <li>React Router</li>
                                    <li>Flux</li>
                                    <li>Node</li>
                                    <li>Gulp</li>
                                    <li>Browserify</li>
                                    <li>Bootstrap</li>
                                </ul>
                            </p>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = About;