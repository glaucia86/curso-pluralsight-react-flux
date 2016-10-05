"use strict";

var gulp 		= require('gulp');
var connect 	= require('gulp-connect'); //Executar um local dev-server
var open 		= require('gulp-open'); //Abrir uma URL no browser
var browserify 	= require('browserify'); //Bundles do js
var reactify 	= require('reactify'); //Transforma o React JSX para Js
var source 		= require('vinyl-source-stream'); //Usa os textos convencionais com Gulp
var concat 		= require('gulp-concat'); //Concatenação de arquivos
var lint 		= require('gulp-eslint');

var config = {
    port: 8080,
    devBaseUrl:'http://localhost',
    paths: {
        html:'./src/*.html',
		js: './src/**/*.js',
			css: [
				'node_modules/bootstrap/dist/css/bootstrap.min.css',
				'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
			],
        dist:'./dist',
		mainJs: './src/main.js'
    }
}

//Iniciando um server local de desenvolvimento:
gulp.task('connect', function() {
	connect.server({
		root:['dist'],
		port:config.port,
		base:config.devBaseUrl,
		livereload:true
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

//A task abaixo será responsável para executar um único arquivo Js, em caso de haver vários arquivos
//'.js' no projeto:
gulp.task('js', function() {
	browserify(config.paths.mainJs)
		.transform(reactify)
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.paths.dist + '/scripts'))
		.pipe(connect.reload());
});

gulp.task('css', function() {
	gulp.src(config.paths.css)
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('lint', function() {
	return gulp.src(config.paths.js)
		.pipe(lint({ config: 'eslint.config.json' }))
		.pipe(lint.format());
});

//Essa task será responsável por todas as vezes que formos realizar alguma alteração no projeto,
//automaticamente ele irá atualizar no browser
gulp.task('watch', function() {
    gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['js', 'lint']);
});

//E a task abaixo será a responsável por quando quisermos executar a aplicação abaixo 
//só iremos necessitar digitar no terminal 'gulp' para executar a aplicação.
//Aqui a task será a default e irá consequentemente executar as demais task inseridas aqui no arquivo 'gulpfile.js'
gulp.task('default', ['html', 'js', 'css', 'lint', 'open', 'watch']);