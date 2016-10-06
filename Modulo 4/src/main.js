/**
 * Arquivo: main.js
 * Author: Glaucia Lemos
 * Data: 05/10/2016
 * Description: Arquivo responsável por executar o Bootstrap na aplicação.
 */

$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homePage.js');

/**
 * Aqui estamos fazendo a chamada do render do Componente 'Home'. A qual ele buscará o elemento
 * 'app' para poder ser renderizado!! :)
 */
React.render(<Home />, document.getElementById('app'));