/**
 * Arquivo: routes.js
 * Author: Glaucia Lemos
 * Data: 10/10/2016
 * Description: Arquivo responsável por fazer as rotas entre as páginas com o objetivo
 * de deixar a manuntenção mais simplista para futuras inclusões de novas rotas.
 */

"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage')}/>
        <Route name="authors" handler={require('./components/authors/authorPage')}/>
        <Route name="about" handler={require('./components/about/aboutPage')}/>
    </Route>
);

module.exports = routes;