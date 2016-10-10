/**
 * Arquivo: header.js
 * Author: Glaucia Lemos
 * Data: 06/10/2016
 * Description: Arquivo responsável por mostrar o conteúdo da nav-bar da aplicão.
 * Aqui está criado o Componente do 'Header'.
 * 
 */

"use strict";

var React = require('react');

var Header = React.createClass({
    render: function() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand">
                        <img src="images/devcursos.png" />
                    </a>
                    <ul className="nav navbar-nav">
                        <li><a href="/">Página Principal</a></li>
                        <li><a href="/#authors">Autores</a></li>
                        <li><a href="/#about">Sobre</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;