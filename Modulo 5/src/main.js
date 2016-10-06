/**
 * Arquivo: main.js
 * Author: Glaucia Lemos
 * Data: 05/10/2016
 * Description: Arquivo responsável por executar o Bootstrap na aplicação.
 * Arquivo principal que integra os demais Componentes da aplicação.
 */

$ = jQuery = require('jquery');

var React = require('react');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');

/**
 * Aqui estamos fazendo a roteirização entre as páginas 'Home' com 'About'. 
 * Por isso que criamos uma routerização entre essas páginas.
 */

(function(win) {
    "use strict";

    var App = React.createClass({
        render: function() {
            var Child;

            switch(this.props.route) {
                case 'about': Child = About; break;
                default: Child = Home;
            }

            return (
                <div>
                    <Header/>
                    <Child/>
                </div>
            );
        }
    });

    function render() {
        var route = win.location.hash.substr(1);
        React.render(<App route={route} />, document.getElementById('app'));
    }

    win.addEventListener('hashchange', render);
    render();

}(window));