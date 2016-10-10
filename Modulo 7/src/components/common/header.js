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
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
    render: function() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <Link to="app" className="navbar-brand">
                        <img src="images/devcursos.png" />
                    </Link>
                    <ul className="nav navbar-nav">
                        <li><Link to="app">Página Principal</Link></li>
                        <li><Link to="authors">Autores</Link></li>
                        <li><Link to="about">Sobre</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;