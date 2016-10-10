/**
 * Arquivo: main.js
 * Author: Glaucia Lemos
 * Data: 10/10/2016
 * Description: Arquivo responsável por executar a aplicação.
 */

"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('app'));
});