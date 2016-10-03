"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //Executar um local dev-server
var open = require('gulp-open'); //Abrir uma URL no browser

var config = {
    port: 8080,
    devBaseUrl: 'http://localhost',
    paths: {
        html: '.src/*.html',
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

gulp.task('open', ['connect'], function() {
    gulp.src('dist/index.html')
        .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/' }));
});