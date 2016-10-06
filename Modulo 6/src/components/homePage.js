/**
 * Arquivo: homePage.js
 * Author: Glaucia Lemos
 * Data: 06/10/2016
 * Description: Arquivo responsável por mostrar a Página Principal da Aplicação.
 * Aqui está o Componente do 'Home'
 */

"use strict";

var React = require('react');

var Home = React.createClass({
    render: function(){
        return (
            <div className="jumbotron">
                <h1>DevCursos - Dashboard</h1>
                <p>Aprenda aqui as principais tecnologias do mercado!</p>
            </div>
        );
    }
});

module.exports = Home;