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