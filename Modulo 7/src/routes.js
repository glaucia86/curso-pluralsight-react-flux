"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRouter = Router.DefaultRouter;
var Route = Router.Route;

var routes = (
    <Route name="app" path="/" handler={require('./components/app')} >
        <DefaultRouter handler={require('./components/homePage')} />
        <Route name="authors" handler={require('./components/authors/authorPage')} /> 
        <Route name="about" handler={require('./components/about/aboutPage')} />  
    </Route>
);

module.exports = routes;
