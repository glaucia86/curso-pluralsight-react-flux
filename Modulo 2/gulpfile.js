"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //Executar um local dev-server
var open = require('gulp-open'); //Abrir uma URL no browser

var config = {
    port: 8080,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        dist: './dist'
    }
}

//Iniciando um server local de desenvolvimento:
gulp.task('connect', function() {
	connect.server({
		root: ['dist'],
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	});
});

//A task abaixo será responsável por abrir a conexão da aplicação na path indicada:
gulp.task('open', ['connect'], function() {
	gulp.src('dist/index.html')
		.pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/'}));
});

//A task abaixo é responsável por configurar as paths para poder conectar e fazer o reload da aplicação:
gulp.task('html', function() {
	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
});

//Essa task será responsável por todas as vezes que formos realizar alguma alteração no projeto,
//automaticamente ele irá atualizar no browser
gulp.task('watch', function() {
    gulp.watch(config.paths.html, ['html']);
});

//E a task abaixo será a responsável por quando quisermos executar a aplicação abaixo 
//só iremos necessitar digitar no terminal 'gulp' para executar a aplicação.
//Aqui a task será a default e irá consequentemente executar as demais task inseridas aqui no arquivo 'gulpfile.js'
gulp.task('default', ['html', 'open', 'watch']);