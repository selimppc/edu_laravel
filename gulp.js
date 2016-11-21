var gulp = require('gulp');
var elixir = require('laravel-elixir');
var shell = require('gulp-shell');
var browserSync = require('laravel-elixir-browsersync-official');
var concat = require('gulp-concat');

var bowerDir = './bower_components/';
var sassDir =  'resources/assets/sass/';
var adminThemeDir = './resources/assets/admin_theme/';

//Assets Path
 var paths = {
     'jquery'     : bowerDir + "jquery/dist/",
     'bootstrap'  : bowerDir + "bootstrap/dist/",
     'fonts': bowerDir + "bootstrap/fonts/",
     'adminthemecss' : adminThemeDir + "css/",
     'adminAssets' : adminThemeDir + "assets/",
     'adminLess' : adminThemeDir + "assets/less/",
 };

/*
 * Mix the assets
 */

elixir(function(mix) {

    // admin module
    mix.sass([sassDir + 'admin.scss', paths.adminthemecss + '/theme-default/font-awesome.min.css?1422529194'], 'public/assets/css/admin.css');
    mix.webpack(paths.jquery + 'jquery.min.js', 'public/assets/js/jquery.min.js');
    mix.less(paths.adminLess+ '*.less', 'public/assets/admin_less/materialadmin.css');
    mix.scriptsIn(paths.adminAssets + 'js/**', 'public/assets/admin_less/materialadmin.js');

    // versions for cache-busting
    /*mix.version([
        'assets/js/app.js',
        'assets/css/app.css',
        'assets/js/admin.js',
        'assets/css/admin.css'
    ]);*/

    mix.browserSync({
        notify: false,
        proxy: 'localhost/~selimreza/Sites/haber_dev/public'
    });

});


/**
 * Copy any needed files.
 */
gulp.task('copyfiles', function() {

     // admin panel + plugins
     gulp.src(adminThemeDir + 'assets/img/**')
        .pipe(gulp.dest('public/assets/images/'));

     //font awesome
     gulp.src(bowerDir + 'bootstrap/dist/fonts/*' + '!**')
        .pipe(gulp.dest('public/assets/fonts'));

 });














