/**
 * Arquivo: homePage.js
 * Author: Glaucia Lemos
 * Data: 06/10/2016
 * Description: Arquivo responsável por mostrar a Página Principal da Aplicação.
 * Aqui está o Componente do 'Home'
 */

"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
    render: function(){
        return (
            <div className="jumbotron">
                <h1>DevCursos - Dashboard</h1>
                <p>Aprenda aqui as principais tecnologias do mercado!</p>
                <Link to="about" className="btn btn-primary btn-lg">Veja Mais!</Link>
            </div>
        );
    }
});

module.exports = Home;