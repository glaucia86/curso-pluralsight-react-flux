/**
 * Arquivo: main.js
 * Author: Glaucia Lemos
 * Data: 05/10/2016
 * Description: Arquivo responsável por executar o Bootstrap na aplicação.
 * Arquivo principal que integra os demais Componentes da aplicação.
 */

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

Router.run(routes, function(Handler) {
    React.render(<Handler/>, document.getElementById('app'));
});