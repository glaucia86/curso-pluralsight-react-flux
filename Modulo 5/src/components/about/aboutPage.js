"use strict";

var React = require('react');

var About = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Sobre</h1>
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
        );
    }
});

module.exports = About;