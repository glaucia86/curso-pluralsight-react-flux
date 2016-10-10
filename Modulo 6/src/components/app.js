/** Aqui estaremos desativando temporariamente o eslint com o objetivo
 * de realizar checks contínuos sobre as variáveis globais que estaremos 
 * trabalhando particulamente nesse arquivo aqui.
 */

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