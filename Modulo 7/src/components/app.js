/**
 * Arquivo: app.js
 * Author: Glaucia Lemos
 * Data: 10/10/2016
 * Description: Arquivo principal do projeto, onde mostrará todas as partes dos componentes 
 * recém criados.
 */

/*eslint-disable strict */

var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Header/>
                <div className="container-fluid">
                    <RouteHandler/>
                </div>
            </div>
        );
    }
});

module.exports = App;