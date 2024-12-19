'use strict';
// node.js Packages / Dependencies
// const gulp = require('gulp');
// const sass = require('gulp-dart-sass');
// const uglify = require('gulp-uglify-es').default;
// const rename = require('gulp-rename');
// const cleanCSS = require('gulp-clean-css');
// const browserSync = require('browser-sync').create();
// const gulpautoprefixer = require('gulp-autoprefixer');

// const inject = require('gulp-inject');
// const postcss = require('gulp-postcss');
// const autoprefixer = require('autoprefixer');
// const purgecss = require("@fullhuman/postcss-purgecss");
// const tailwindcss = require("tailwindcss");
// const atimport = require("postcss-import");
// const del = require("del");
// const replace = require('gulp-replace');
// const handlebars = require('gulp-handlebars-builder');
// const gulpif = require('gulp-if');
// const mode = require('gulp-mode')(); //last '()' means a function must be needed or get err

import gulp from 'gulp';
import sass from 'gulp-dart-sass';
import uglify from 'gulp-uglify-es';
import rename from 'gulp-rename';
import cleanCSS from 'gulp-clean-css';
import browserSync from 'browser-sync';
// const browserSync = create;
import gulpautoprefixer from 'gulp-autoprefixer';
import inject from 'gulp-inject';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import purgecss from '@fullhuman/postcss-purgecss';
import tailwindcss from 'tailwindcss';
import atimport from 'postcss-import';
import {deleteAsync} from 'del';
import replace from 'gulp-replace';
// import handlebars from 'gulp-handlebars-builder'; // old
import handlebars from 'gulp-compile-handlebars'; // new in 2024/8/6
import gulpif from 'gulp-if';
import gulpmode from 'gulp-mode';
const mode = gulpmode({
  modes: ["production", "development", "purge"],
  default: "development",
  verbose: false
});
import downloader from 'gulp-downloader';

var fa = true, tw = true, jsbody = true, script = true, colors = false, bs = true, favicon = true, uk = false, aa = false, fonts = false, swiper = true, chartjs = false, splide = false, fullcalendar = false, tuicalendar = false, tagcloud = false, tagscloud = false, amcharts = false, downloadfile = false, editor = false, vendorscss = false, vendorsjs = false, otherjscss = false, bs5lightbox = false, gridgallery = false , photoswipe = false, lightgallery = false, plyr = false, rangeslider = false, masonry = false
var bs4 = false, bs3 = false, jq = false
var othercolors = false, separatecolors = false, separatestyle = false, style2 = false, moreStyle = false
var injectothercolors = false, separateinjectcolors = false, injectstyle2 = false, separateinjectstyle2 = false, jqueryBody = false, bootstrapBody = false, jqueryHead = false

var siteTitle = '國立中央大學-飛學不可'
var logoHref = 'index.html'
var scriptjs = 'script*'
var editorcss = 'editor*.css'
var editorscss = 'editor*.scss'
var color1val = 'ias', color2val = 'apex', color3val = ''
var othercolorscss = 'colors-*.css'
var othercolorsscss = 'colors-*.scss'
var otherjs = ''
var othercss = ''

if (amcharts) {
  downloadfile = true
}

var downloadfiles = [
  // "https://cdn.amcharts.com/lib/5/themes/Animated.js", "https://cdn.amcharts.com/lib/5/wc.js",
  {
    fileName: 'amcharts-animated.js',
    request: {
      url: 'https://cdn.amcharts.com/lib/5/themes/Animated.js'
    }
  },
  {
    fileName: 'amcharts-wc.js',
    request: {
      url: 'https://cdn.amcharts.com/lib/5/wc.js'
    }
  },
  {
    fileName: 'amcharts.js',
    request: {
      url: 'https://cdn.amcharts.com/lib/5/index.js'
    }
  },
]

var srcexcludejs = tuicalendar ? '!src/js/tui-calendar.min.js' : '' +  swiper ? ', !src/js/swiper-bundle.min.js' : '' + tagscloud ? ', !src/js/tagsCloud.js' : '' + amcharts ? ', !src/js/amcharts-animated.js' : '' + amcharts ? ', !src/js/amcharts-wc.js' : '' + amcharts ? ', !src/js/amcharts.js' : '' + splide ? ', !src/js/splide.min.js, !src/js/splide-extension-grid.min.js' : '' + bs5lightbox ? ', !src/js/bs5lightbox.min.js' : '' + gridgallery ? ', !src/js/grid-gallery.min.js' : '' + lightgallery ? ', !src/js/lightgallery.min.js, !src/js/plugins/**/lg-*.js' : '' + masonry ? ', !src/js/masonry.pkgd.min.js' : '' + photoswipe ? ', !src/js/photoswipe.esm.min.js, !src/js/photoswipe-lightbox.esm.min.js' : '' + plyr ? ', !src/js/plyr.min.js' : '' + rangeslider ? ', !src/js/ion-rangeslider.min.js' : '' + otherjscss ? ', !src/js/' + otherjs : ''
var srcexcludeminjs = tuicalendar ? '!src/js/tui-calendar.min.js' : '' +   swiper ? ', !src/js/swiper-bundle.min.js' : '' + amcharts ? ', !src/js/amcharts-animated.js' : '' + amcharts ? ', !src/js/amcharts-wc.js' : '' + amcharts ? ', !src/js/amcharts.js' : '' + amcharts ? ', !src/js/amcharts.js' : '' + splide ? ', !src/js/splide.min.js, !src/js/splide-extension-grid.min.js' : '' + bs5lightbox ? ', !src/js/bs5lightbox.min.js' : '' + gridgallery ? ', !src/js/grid-gallery.min.js' : '' + lightgallery ? ', !src/js/lightgallery.min.js, !src/js/plugins/**/lg-*.js' : '' + masonry ? ', !src/js/masonry.pkgd.min.js' : '' + photoswipe ? ', !src/js/photoswipe.esm.min.js, !src/js/photoswipe-lightbox.esm.min.js' : '' + plyr ? ', !src/js/plyr.min.js' : '' + rangeslider ? ', !src/js/ion-rangeslider.min.js' : '' + otherjscss ? ', !src/js/' + otherjs : ''
var srcexcludecss = tuicalendar ? '!src/css/tui-calendar.min.css' : '' + swiper ? ', !src/css/swiper-bundle.min.css' : '' + splide ? ', !src/css/splide.min.css' : '' + gridgallery ? ', !src/css/grid-gallery.min.css' : '' + lightgallery ? ', !src/css/lightgallery-bundle.min.css' : '' + photoswipe ? ', !src/css/photoswipe.css' : '' + plyr ? ', !src/css/plyr.css' : '' + rangeslider ? ', !src/css/ion-rangeslider.min.css' : '' + otherjscss ? ', !src/css/' + othercss : ''
var srcexcludemincss = tuicalendar ? '!src/css/tui-calendar.min.css' : '' + swiper ? ', !src/css/swiper-bundle.min.css' : '' + splide ? ', !src/css/splide.min.css' : '' + gridgallery ? ', !src/css/grid-gallery.min.css' : '' + lightgallery ? ', !src/css/lightgallery-bundle.min.css' : '' + photoswipe ? ', !src/css/photoswipe.css' : '' + plyr ? ', !src/css/plyr.css' : '' + rangeslider ? ', !src/css/ion-rangeslider.min.css' : '' + otherjscss ? '!src/css/' + othercss : ''
var distexcludejs = tuicalendar ? '!dist/js/tui-calendar.min.js' : '' + swiper ? ', !dist/js/swiper-bundle.min.js' : '' + tagscloud ? ', !dist/js/tagsCloud.js' : '' + amcharts ? ', !dist/js/amcharts-animated.js' : '' + amcharts ? ', !dist/js/amcharts-wc.js' : '' + amcharts ? ', !dist/js/amcharts.js' : '' + splide ? ', !dist/js/splide.min.js, !dist/js/splide-extension-grid.min.js' : '' + bs5lightbox ? ', !dist/js/bs5lightbox.min.js' : '' + gridgallery ? ', !dist/js/grid-gallery.min.js' : '' + lightgallery ? ', !dist/js/lightgallery.min.js, !dist/js/plugins/lg-*.js' : '' + masonry ? ', !dist/js/masonry.pkgd.min.js' : '' + photoswipe ? ', !dist/js/photoswipe.esm.min.js, !dist/js/photoswipe-lightbox.esm.min.js' : '' + plyr ? ', !dist/js/plyr.min.js' : '' + rangeslider ? ', !dist/js/ion-rangeslider.min.js' : '' + otherjscss ? ', !dist/js/' + otherjs : ''
var distexcludecss = tuicalendar ? '!dist/css/tui-calendar.min.css' : '' + swiper ? ', !dist/css/swiper-bundle.min.css' : '' + splide ? ', !dist/css/splide.min.css' : '' + gridgallery ? ', !dist/css/grid-gallery.min.css' : '' + lightgallery ? ', !dist/css/lightgallery-bundle.min.css' : '' + photoswipe ? ', !dist/css/photoswipe.css' : '' + plyr ? ', !dist/css/plyr.css' : '' + rangeslider ? ', !dist/css/ion-rangeslider.min.css' : '' + otherjscss ? ', !dist/css/' + othercss : ''
var distexcludemincss = tuicalendar ? '!dist/css/tui-calendar.min.css' : '' + swiper ? ', !dist/css/swiper-bundle.min.css' : '' + splide ? ', !dist/css/splide.min.css' : '' + gridgallery ? ', !dist/css/grid-gallery.min.css' : '' + lightgallery ? ', !dist/css/lightgallery-bundle.min.css' : '' + photoswipe ? ', !dist/css/photoswipe.css' : '' + plyr ? ', !dist/css/plyr.css' : '' + rangeslider ? ', !dist/css/ion-rangeslider.min.css' : '' + otherjscss ? ', !dist/css/' + othercss : ''
var srcjs = tuicalendar ? './src/js/tui-calendar.min.js' : '' + swiper ? ', ./src/js/swiper-bundle.min.js' : '' + tagscloud ? ', .src/js/tagsCloud.js' : '' + amcharts ? ', ./src/js/amcharts-animated.js' : '' + amcharts ? ', ./src/js/amcharts-wc.js' : '' + amcharts ? ', ./src/js/amcharts.js' : '' + splide ? ', ./src/js/splide.min.js' : '' + bs5lightbox ? ', ./src/js/bs5lightbox.min.js' : '' + gridgallery ? ', ./src/js/grid-gallery.min.js' : '' + lightgallery ? ', ./src/js/lightgallery.min.js, ./src/js/lg-*.js' : '' + masonry ? ', ./src/js/masonry.pkgd.min.js' : '' + photoswipe ? ', ./src/js/photoswipe.esm.min.js, ./src/js/photoswipe-lightbox.esm.min.js' : '' + plyr ? ', ./src/js/plyr.min.js' : '' + rangeslider ? ', ./src/js/ion-rangeslider.min.js' : '' + otherjscss ? ', ./src/js/' + otherjs : ''
var distjs = ['./dist/js/*.js', '!./dist/js/module*.js', '!./dist/js/bootstrap*.js', '!./dist/js/script*.js']
var srccss = tuicalendar ? './src/css/tui-calendar.min.css' : '' + swiper ? ', ./src/css/swiper-bundle.min.css' : '' + splide ? ', ./src/css/splide.min.css' : '' + gridgallery ? ', ./src/css/grid-gallery.min.css' : '' + lightgallery ? ', ./src/css/lightgallery-bundle.min.css' : '' + photoswipe ? ', ./src/css/photoswipe.css' : '' + plyr ? ', ./src/css/plyr.css' : '' + rangeslider ? ', ./src/css/ion-rangeslider.min.css' : '' + otherjscss ? ', ./src/css/' + othercss : ''
var distcss = tuicalendar ? './dist/css/tui-calendar.min.css' : '' + swiper ? ', ./dist/css/swiper-bundle.min.css' : '' + splide ? ', ./dist/css/splide.min.css' : '' + gridgallery ? ', ./dist/css/grid-gallery.min.css' : '' + lightgallery ? ', ./dist/css/lightgallery-bundle.min.css' : '' + photoswipe ? ', ./dist/css/photoswipe.css' : '' + plyr ? ', ./dist/css/plyr.css' : '' + rangeslider ? ', ./dist/css/ion-rangeslider.min.css' : '' + otherjscss ? ', ./dist/css/' + othercss : ''

// var vdjs = 'splide.min.js'
// var vdcss = 'splide.min.css'
// var vdminjs = 'splide*.min.js'
// var vdmincss = 'splide*.min.css'
var fcjs = 'fullcalendar*.js'
var fcminjs = 'fullcalendar*.min.js'
var fccss =  'fullcalendar*.css'

if (othercolors == true && separatecolors == false) {
  injectothercolors = true
}
if (separatecolors == true) {
  othercolors = true
  injectothercolors = false // othercolors will 'not' be all injected
  separateinjectcolors = true // othercolors will be separately injected
}
if (separatestyle == true) {
  style2 = true
  injectstyle2 = false // style-*.css will 'not' be all injected
  separateinjectstyle2 = true // style-*.css will be separately injected
}
if (bs3 == true | bs4 == true) {
  jq = true
  jqueryBody = true
}
if (bs == true | bs3 == true | bs4 == true) {
  // uk = false
  bootstrapBody = true
}
if (swiper == true | splide == true | tuicalendar == true | fullcalendar == true) {
  vendorscss = true
  vendorsjs = true
}
if (rangeslider == true) {
  jq = true
  jqueryBody = true
}
// if (script == false) {
//   scriptjs = ''
// }
// if (fullcalendar == false) {
//   fcjs = ''
// }

// Paths
var paths = {
  root: {
    www: './src'
  },
  vendors: {
    ukjs: [uk ? 'node_modules/uikit/dist/js/uikit.min.js' : '-', uk ? 'node_modules/uikit/dist/js/uikit-icons.min.js' : '-'],
    ukcss: [uk ? 'node_modules/uikit/dist/css/uikit.min.css' : '-'],
    facss: [fa ? 'node_modules/@fortawesome/fontawesome-free/css/all.min.css' : '-'],
    fafonts: [fa ? 'node_modules/@fortawesome/fontawesome-free/webfonts/*' : '-'],
    bsjs: [bs ? 'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js' : '-'],
    bscss: [bs ? 'node_modules/bootstrap/dist/css/bootstrap.min.css' : '-', bs ? 'node_modules/bootstrap-icons/font/bootstrap-icons.css' : '-'],
    bsiconcss: [bs ? 'node_modules/bootstrap-icons/font/bootstrap-icons.css': '-'],
    bsfonts: [bs ? 'node_modules/bootstrap-icons/font/fonts/*' : '-'],
    bs3js: [bs3 ? 'node_modules/bootstrap/dist/js/bootstrap.min.js' : '-'],
    bs3css: [bs3 ? 'node_modules/bootstrap/dist/css/bootstrap.min.css' : '-'],
    bs3fonts: [bs3 ? 'node_modules/bootstrap/dist/fonts/*' : '-'],
    jq: [jq ? 'node_modules/jquery/dist/jquery.min.js' : '-'],
    fullcalendarjs: [fullcalendar ? 'node_modules/fullcalendar/index.global.min.js' : '-'],
    fullcalendarlocales: [fullcalendar ? 'node_modules/@fullcalendar/core/locales-all.global.min.js' : '-'],
    // fullcalendarcss: [fullcalendar ? 'node_modules/fullcalendar/main.min.css' : '-'],
    fullcalendarjsi: [fullcalendar ? 'src/vendors/' + fcjs : '-'],
    bs5lightbox: [bs5lightbox ? 'node_modules/bs5-lightbox/dist/index.bundle.min.js' : '-'],
    vendorsjs: [swiper ? 'node_modules/swiper/swiper-bundle.min.js' : '-', splide ? 'node_modules/@splidejs/splide/dist/js/splide.min.js' + ', ' + 'node_modules/@splidejs/splide-extension-grid/dist/js/splide-extension-grid.min.js' : '-', tuicalendar ? 'node_modules/tui-calendar/dist/tui-calendar.min.js' : '-', tagscloud ? 'src/vendors/tagsCloud.js' : '-', masonry ? 'node_modules/masonry-layout/dist/masonry.pkgd.min.js' : '-', gridgallery ? 'src/vendors/grid-gallery.min.js' : '-', lightgallery ? 'node_modules/lightgallery/lightgallery.min.js' : '-', photoswipe ? 'node_modules/photoswipe/dist/photoswipe.esm.min.js' : '-', photoswipe ? 'node_modules/photoswipe/dist/photoswipe-lightbox.esm.min.js' : '-', plyr ? 'node_modules/plyr/dist/plyr.min.js' : '-', rangeslider ? 'node_modules/ion-rangeslider/js/ion.rangeSlider.min.js' : '-'],
    vendorscss: [swiper ? 'node_modules/swiper/swiper-bundle.min.css' : '-', splide ? 'node_modules/@splidejs/splide/dist/css/splide.min.css' : '-', tuicalendar ? 'node_modules/tui-calendar/dist/tui-calendar.min.css' : '-', tagscloud ? 'src/vendors/tagsCloud.css' : '-', gridgallery ? 'src/vendors/grid-gallery.min.css' : '-', lightgallery ? 'node_modules/lightgallery/css/lightgallery-bundle.min.css' : '-', photoswipe ? 'node_modules/photoswipe/dist/photoswipe.css' : '-', plyr ? 'node_modules/plyr/dist/plyr.css' : '-', rangeslider ? 'node_modules/ion-rangeslider/css/ion.rangeSlider.min.css' : '-'],
    fonts: [fonts ? 'src/fonts/**/*.*' : '-'],
  },
  // template: '',
  src: {
    root: './src/',
    templates: 'src/templates/*.hbs',
    html: 'src/*.html',
    css: 'src/css/*.css',
    js: 'src/js/*.js',
    vendors: 'src/libs/**/*.*',
    img: ['src/img/**/*.+(png|jpg|gif|svg|webp|mp4|wav)', '!src/img/**/*-i.*'],
    scss: 'src/scss/*.scss',
    delfonts: ['src/fonts', 'src/webfonts'],
    minjs: ['src/js/*.js', '!src/js/module*.js', '!src/js/uikit*.js', '!src/js/*.min.js', '!src/js/*-i.js', '!src/js/*-bak.js', '!src/js/*-old.js', '!src/js/*複製.js', '!src/js/' + fcminjs, srcexcludeminjs],
    // excludeminjs: "'!src/js/*.min.js', '!src/js/*-i.js', '!src/js/*-bak.js', '!src/js/*-old.js'",
    // // [...] will get errors. The variable array cannot be included in a array of [paths.src.js, paths.src.excludeminjs]
    deljs: ['src/js/*.js', 'src/js/**', '!src/js/module.js', '!src/js/*-i.js', '!src/js/*-bak.js', '!src/js/*-new.js', '!src/js/*-old.js', '!src/js/*複製.js', script ? '!src/js/' + scriptjs : '-', vendorsjs ? srcexcludejs : '-', fullcalendar ? '!src/js/' + fcjs : '-'],
    delcss: ['src/css/*.css', vendorscss ? srcexcludecss : '-', fullcalendar ? '!src/css/' + fccss : '-'],
    injectjs: ['src/js/*.js', '!src/js/module*.js', '!src/js/jquery*.js', '!src/js/bootstrap*.js', '!src/js/ui*.js', '!src/js/*-i.js', script ? '!src/js/' + scriptjs : '-', vendorsjs ? srcexcludejs : '-', fullcalendar ? '!src/js/' + fcjs : '-'],
    injectcss: ['src/css/*.css', '!src/css/bootstrap*.css', '!src/css/ui*.css', '!src/css/ta*.css', '!src/css/font*.css', '!src/css/main*.css', '!src/css/colors*.css', '!src/css/editor*.css', '!src/css/style*.css', vendorscss ? srcexcludecss : '-', fullcalendar ? '!src/css/' + fccss : '-'],
    sasstoscss: ['src/scss/*.scss', '!src/scss/*-full.scss', '!src/scss/*-i.scss', '!src/scss/*-old.scss', '!src/scss/*-bak.scss', '!src/scss/*複製.scss', style2 ? '-' : '!src/scss/style-*.scss' , colors ? '-' : '!src/scss/colors.scss', editor ? '-' : '!src/scss/' + editorscss, othercolors ? '-' : '!src/scss/' + othercolorsscss],
    minicss: ['src/css/*.css', '!src/css/ui*.css', '!src/css/tailwind.css', '!src/css/font*.css', '!src/css/bootstrap*.css', srcexcludemincss],
    mincss: ['src/css/*.min.css'],
    color1html: ['src/' + color1val + '-*.html', 'src/*-' + color1val + '.html'], //name-*.html
    color2html: ['src/' + color2val + '-*.html', 'src/*-' + color2val + '.html'],
    color3html: ['src/' + color3val + '-*.html', 'src/*-' + color3val + '.html'],
    color1css: ['src/css/colors-' + color1val + '.css'], // 'src/css/colors-ncu*.css'
    color2css: ['src/css/colors-' + color2val + '.css'], // 'src/css/colors-nthu*.css'
    color3css: ['src/css/colors-' + color3val + '.css'], // 'src/css/colors-nthu*.css'
    style2_1css: ['src/css/style-' + color1val + '.css'], // 'src/css/style-nthu*.css'
    style2_2css: ['src/css/style-' + color2val + '.css'], // 'src/css/style-nthu*.css'
  },
  dist: {
    root: './dist/',
    templates: 'templates',
    html: 'dist/*.html',
    scss: 'scss',
    css: 'css',
    js: 'js',
    img: 'img',
    fonts: 'fonts',
    fafonts: 'webfonts',
    bsfonts: 'fonts',
    bs3fonts: 'fonts',
    vendors: 'libs',
    injectjs: ['dist/js/*.js', '!dist/js/module*.js', '!dist/js/jquery*.js', '!dist/js/bootstrap*.js', '!dist/js/ui*.js', script ? '!dist/js/' + scriptjs : '-', vendorsjs ? distexcludejs : '-', fullcalendar ? '!dist/js/' + fcjs : '-'],
    injectcss: ['dist/css/*.css', '!dist/css/bootstrap*.css', '!dist/css/ui*.css', '!dist/css/ta*.css', '!dist/css/font*.css', '!dist/css/main*.css', '!dist/css/colors*.css', '!dist/css/editor*.css', '!dist/css/style*.css', vendorscss ? distexcludecss : '-', fullcalendar ? '!dist/css/' + fccss : '-'],
    color1html: ['dist/' + color1val + '-*.html', 'dist/*-' + color1val + '.html'], //name-*.html
    color2html: ['dist/' + color2val + '-*.html', 'dist/*-' + color2val + '.html'],
    color3html: ['dist/' + color3val + '-*.html', 'dist/*-' + color3val + '.html'],
    color1css: ['dist/css/colors-' + color1val + '*.css'],
    color2css: ['dist/css/colors-' + color2val + '*.css'],
    color3css: ['dist/css/colors-' + color3val + '*.css'],
    style2_1css: ['dist/css/style-' + color1val + '*.css'],
    style2_2css: ['dist/css/style-' + color2val + '*.css'],
  }
}

//Handlebars templates
//gulp.task('templates', async function(){}): It must need the 'async' or get error 'Did you forget to signal async completion?'
gulp.task('templates', async function() {
  var templateData = {
      title: siteTitle,
      logoHref: logoHref,
      favicon: favicon ? true : false,
      jsbody: jsbody ? true : false,
      uk: uk ? true : false,
      swiper: swiper ? true : false,
      chartjs: chartjs ? true : false,
      tagcloud: tagcloud ? true : false,
      splide: splide ? true : false,
      bootstrap: bs ? true : false,
      fullcalendar: fullcalendar ?  true : false,
      vendorscss: vendorscss ? true : false,
      editor: editor ? true : false,
      colors: colors ? true : false,
      othercolors: othercolors ? true : false,
      style2: style2 ? true : false,
      moreStyle: moreStyle ? true : false,
      jqueryHead: jqueryHead ? true : false,
      vendorsjs: vendorsjs ? true : false,
      script: script ? true : false,
      focusForAA: aa ? true : false,
      nojsForAA: aa ? true : false,
      hrefForAA: aa ? true : false,
      bootstrapBody: bootstrapBody ? true : false,
      jqueryBody: jqueryBody ? true : false,
    },
    options = {
      batch: [paths.src.root + paths.dist.templates + '/partials'],
    }
  gulp.src([paths.src.templates, '!' + paths.src.root + paths.dist.templates + '/*-i.hbs'])
    .pipe(handlebars(templateData, options))
    // .pipe(rename('hello.html'))
    .pipe(rename({
      extname: ".html"
    }))
    .pipe(gulp.dest(paths.src.root)) // got issue with 'mode' & the following command
    // .pipe(mode.development(gulp.dest(paths.src.root)))
});

gulp.task('templates-dist', function() {
  return gulp.src(paths.src.html, {allowEmpty: true, encoding: false})
    .pipe(gulp.dest(paths.dist.root));
});


// Output tailwind css
gulp.task('tailwind', function() {
  return gulp.src('tailwind.css')
    // .pipe(mode.development(
    //   gulpif(tw, postcss([
    //     atimport(),
    //     tailwindcss("tailwind.config.js"),
    //     autoprefixer()
    //     ])
    //   )
    // ))
    .pipe(gulpif(tw, postcss([
      atimport(),
      tailwindcss("tailwind.config.js"),
      autoprefixer()
      ])
    ))
    .pipe(gulpif(tw, gulp.dest(paths.src.root + paths.dist.css)))
})

gulp.task('tailwind-min', function() {
  return gulp.src('src/css/tailwind.css')
    //Minify css
    .pipe(gulpif(tw, cleanCSS()
    ))
    .pipe(gulpif(tw, rename({
        suffix: '.min'
      })
    ))
    .pipe(gulpif(tw, gulp.dest(paths.dist.root + paths.dist.css)))
})

gulp.task('tailwind-build', function() {
  return gulp.src('tailwind.css')
    .pipe(gulpif(tw, postcss([
      atimport(),
      tailwindcss("tailwind.config.js"),
      autoprefixer()
      ])
    ))
    .pipe(gulpif(tw, gulp.dest(paths.src.root + paths.dist.css)))

    //Minify css
    .pipe(gulpif(tw, cleanCSS()
    ))
    .pipe(gulpif(tw, rename({
        suffix: '.min'
      })
    ))
    .pipe(gulpif(tw, gulp.dest(paths.dist.root + paths.dist.css)))
})

gulp.task('tailwind-purge', function() {
  return gulp.src('tailwind.css')
    .pipe(gulpif(tw, postcss([
        atimport(),
        tailwindcss("tailwind.config.js"),
        purgecss({ // Using '@fullhuman/postcss-purgecss'
          content: [paths.src.html, paths.src.js], // Must be necessary with 'tailwind.config.js'
          // defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
          defaultExtractor: content => content.match(/[\w-/:!@__]+(?<!:__)/g) || []
        }),
        autoprefixer()
      ])
    ))

    //Minify css
    .pipe(gulpif(tw, cleanCSS()
    ))
    .pipe(gulpif(tw, rename({
        suffix: '.min'
      })
    ))
    .pipe(gulpif(tw, gulp.dest(paths.dist.root + paths.dist.css)))
});

gulp.task('fontsize', function() {
  return gulp.src('dist/css/**/*.css', {allowEmpty: true})
    .pipe(replace('@charset "UTF-8";', ''))
    .pipe(replace(/:\s*\.\d/g, function(match) {
      return ":" + match.slice(1, -2).trim() + "0." + match.slice(-1)
    }))
    // Find digits between "font-size:" and "px" in Visual Studio Code using: "font-size:(\s*\d+\.*\d*)px" or "font-size:\s*\d+\.*\d*px"
    //'\s*': none or any spaces, '\d+': one or more digits, '\.*': none or any dots, '\d*': none or any digit numbers
    // (\s*\d+\.*\d*) will find out any integer number or floating point number
    .pipe(replace(/font-size:(\s*\d+\.*\d*)px/g, function(match) {
      return "font-size:calc(" + match.slice(10, -2).trim() + "rem/16)"
    }))
    .pipe(gulp.dest('dist/css/'))
})

gulp.task('download', function() { // the network must be on, or the task 'download' will get 'type error'
  return downloader(downloadfiles)
    .pipe(gulpif(downloadfile, gulp.dest(paths.src.root + paths.dist.js)))
    .pipe(gulpif(downloadfile, gulp.dest(paths.dist.root + paths.dist.js)))
})

gulp.task('ukjs', function() {
  return gulp.src(paths.vendors.ukjs, {allowEmpty: true})
    .pipe(gulpif(uk, gulp.dest(paths.src.root + paths.dist.js)))
    .pipe(gulpif(uk, gulp.dest(paths.dist.root + paths.dist.js)))

    // .pipe(gulp.dest(paths.src.root + paths.dist.js))
    // .pipe(gulp.dest(paths.dist.root + paths.dist.js))
    // .pipe(mode.production(gulp.dest(paths.dist.vendors)))
})
gulp.task('ukcss', function() {
  return gulp.src(paths.vendors.ukcss, {allowEmpty: true})
    .pipe(gulpif(uk, replace('@charset "UTF-8";', '')))
    .pipe(gulpif(uk, replace(/:\s*\.\d/g, function(match) {
      return ":" + match.slice(1, -2).trim() + "0." + match.slice(-1)
    })))
    // Find digits between "font-size:" and "px" in Visual Studio Code using: "font-size:(\s*\d+\.*\d*)px" or "font-size:\s*\d+\.*\d*px"
    //'\s*': none or any spaces, '\d+': one or more digits, '\.*': none or any dots, '\d*': none or any digit numbers
    // (\s*\d+\.*\d*) will find out any integer number or floating point number
    .pipe(gulpif(uk, replace(/font-size:(\s*\d+\.*\d*)px/g, function(match) {
      return "font-size:calc(" + match.slice(10, -2).trim() + "rem/16)"
    })))
    .pipe(gulpif(uk, gulp.dest(paths.src.root + paths.dist.css)))
    .pipe(gulpif(uk, gulp.dest(paths.dist.root + paths.dist.css)))
})
gulp.task('bs5lightbox', function() {
  return gulp.src(paths.vendors.bs5lightbox, {allowEmpty: true})
    .pipe(gulpif(bs5lightbox, rename("bs5lightbox.min.js")))
    .pipe(gulpif(bs5lightbox, gulp.dest(paths.src.root + paths.dist.js)))
    .pipe(gulpif(bs5lightbox, gulp.dest(paths.dist.root + paths.dist.js)))
})
gulp.task('fullcalendarjsi', function() {
  return gulp.src(paths.vendors.fullcalendarjsi, {allowEmpty: true})
    .pipe(gulpif(fullcalendar, gulp.dest(paths.src.root + paths.dist.js)))
    .pipe(gulpif(fullcalendar, gulp.dest(paths.dist.root + paths.dist.js)))
})
gulp.task('fullcalendarjs', function() {
  return gulp.src(paths.vendors.fullcalendarjs, {allowEmpty: true})
    .pipe(gulpif(fullcalendar, rename("fullcalendar.min.js")))
    .pipe(gulpif(fullcalendar, gulp.dest(paths.src.root + paths.dist.js)))
    .pipe(gulpif(fullcalendar, gulp.dest(paths.dist.root + paths.dist.js)))
})
gulp.task('fullcalendarlocales', function() {
    return gulp.src(paths.vendors.fullcalendarlocales, {allowEmpty: true})
    .pipe(gulpif(fullcalendar, replace(/code:"zh-tw",buttonText:{prev:"上個",next:"下個"/g, function(match) {
      return 'code:"zh-tw",buttonText:{prev:"上一月",next:"下一月",prevYear:"上一年",nextYear:"下一年"'
    })))
    .pipe(gulpif(fullcalendar, rename("fullcalendar-locales.min.js")))
    .pipe(gulpif(fullcalendar, gulp.dest(paths.src.root + paths.dist.js)))
    .pipe(gulpif(fullcalendar, gulp.dest(paths.dist.root + paths.dist.js)))
})
gulp.task('fullcalendarcss', function() {
  return gulp.src(paths.vendors.fullcalendarcss, {allowEmpty: true})
    .pipe(gulpif(fullcalendar, rename("fullcalendar-main.min.css")))
    .pipe(gulpif(fullcalendar, gulp.dest(paths.src.root + paths.dist.css)))
    .pipe(gulpif(fullcalendar, gulp.dest(paths.dist.root + paths.dist.css)))
})
gulp.task('vendorsjs', function() {
  return gulp.src(paths.vendors.vendorsjs, {allowEmpty: true})
    .pipe(gulpif(vendorsjs, replace('sourceMappingURL=splide.min.js.map', '')))
    .pipe(gulpif(vendorsjs, replace('sourceMappingURL=splide-extension-grid.min.js.map', '')))
    .pipe(gulpif(vendorsjs, replace('sourceMappingURL=swiper-bundle.min.js.map', '')))
    .pipe(gulpif(vendorsjs, gulp.dest(paths.src.root + paths.dist.js)))
    .pipe(gulpif(vendorsjs, gulp.dest(paths.dist.root + paths.dist.js)))
})
gulp.task('chartjs', function() {
  return gulp.src('node_modules/chart.js/dist/chart.umd.js', {allowEmpty: true})
    .pipe(gulpif(chartjs, rename("chart.min.js")))
    .pipe(gulpif(chartjs, gulp.dest(paths.src.root + paths.dist.js)))
    .pipe(gulpif(chartjs, gulp.dest(paths.dist.root + paths.dist.js)))
})
gulp.task('tagcloud', function() {
  return gulp.src('node_modules/TagCloud/dist/TagCloud.min.js', {allowEmpty: true})
    .pipe(gulpif(tagcloud, replace('slow:.5', 'slow:.2')))
    .pipe(gulpif(tagcloud, replace('slow:16', 'slow:8')))
    .pipe(gulpif(tagcloud, gulp.dest(paths.src.root + paths.dist.js)))
    .pipe(gulpif(tagcloud, gulp.dest(paths.dist.root + paths.dist.js)))
})
gulp.task('vendorscss', function() {
  // return gulp.src([paths.vendors.vendorscss]) // [paths.vendors.vendorscss] will get errors. The variable array cannot be included in a array
  return gulp.src(paths.vendors.vendorscss, {allowEmpty: true})
    .pipe(gulpif(vendorscss, gulp.dest(paths.src.root + paths.dist.css)))
    .pipe(gulpif(vendorscss, gulp.dest(paths.dist.root + paths.dist.css)))
})
gulp.task('fonts', function() {
  return gulp.src(paths.vendors.fonts, {allowEmpty: true, encoding: false})
    // .pipe(gulpif(fonts, gulp.dest(paths.src.root + paths.dist.fonts)))
    .pipe(gulpif(fonts, gulp.dest(paths.dist.root + paths.dist.fonts)))
})
gulp.task('facss', function() {
  return gulp.src(paths.vendors.facss, {allowEmpty: true})
    .pipe(gulpif(fa, rename("fontawesome.min.css")))
    .pipe(gulpif(fa, gulp.dest(paths.src.root + paths.dist.css)))
    .pipe(gulpif(fa, gulp.dest(paths.dist.root + paths.dist.css)))
})
gulp.task('fafonts', function() {
  return gulp.src(paths.vendors.fafonts, {allowEmpty: true, encoding: false})
    .pipe(gulpif(fa, gulp.dest(paths.src.root + paths.dist.fafonts)))
    .pipe(gulpif(fa, gulp.dest(paths.dist.root + paths.dist.fafonts)))
})
gulp.task('bsjs', function() {
  return gulp.src(paths.vendors.bsjs, {allowEmpty: true})
    .pipe(gulpif(bs, replace('sourceMappingURL=bootstrap.bundle.min.js.map', '')))
    .pipe(gulpif(bs, gulp.dest(paths.src.root + paths.dist.js)))
    .pipe(gulpif(bs, gulp.dest(paths.dist.root + paths.dist.js)))
})
gulp.task('bscss', function() {
  return gulp.src('bootstrap.scss', {allowEmpty: true})
    .pipe(gulpif(bs, sass({
      // outputStyle: 'compressed',
      includePaths: ['node_modules/bootstrap/scss/'], // It's necessary or coding not completely
    }).on('error', sass.logError)))
    .pipe(gulpif(bs, gulpautoprefixer())) //Cannot use autoprefixer or get err
    .pipe(gulpif(bs, replace('@charset "UTF-8";', '')))
    .pipe(gulpif(bs, replace(/:\s*\.\d/g, function(match) {
      return ":" + match.slice(1, -2).trim() + "0." + match.slice(-1)
    })))
    .pipe(gulpif(bs, replace(/font-size:(\s*\d+\.*\d*)px/g, function(match) {
      return "font-size:calc(" + match.slice(10, -2).trim() + "rem/16)"
    })))
    //Minify css
    .pipe(gulpif(bs, cleanCSS()
    ))
    .pipe(gulpif(bs, rename({
        suffix: '.min'
      })
    ))
    .pipe(gulpif(bs, gulp.dest(paths.src.root + paths.dist.css)))
    .pipe(gulpif(bs, gulp.dest(paths.dist.root + paths.dist.css)))
})
gulp.task('bsiconcss', function() {
  return gulp.src(paths.vendors.bsiconcss, {allowEmpty: true})
    .pipe(gulpif(bs, gulp.dest(paths.src.root + paths.dist.css)))
    .pipe(gulpif(bs, gulp.dest(paths.dist.root + paths.dist.css)))
})
gulp.task('bsfonts', function() {
  return gulp.src(paths.vendors.bsfonts, {allowEmpty: true, encoding: false})
    .pipe(gulpif(bs, gulp.dest(paths.src.root + paths.dist.css + '/' + paths.dist.bsfonts)))
    .pipe(gulpif(bs, gulp.dest(paths.dist.root + paths.dist.css + '/' + paths.dist.bsfonts)))
})
gulp.task('bs3js', function() {
  return gulp.src(paths.vendors.bs3js, {allowEmpty: true})
    .pipe(gulpif(bs3, gulp.dest(paths.src.root + paths.dist.js)))
    .pipe(gulpif(bs3, gulp.dest(paths.dist.root + paths.dist.js)))
})
gulp.task('bs3css', function() {
  return gulp.src(paths.vendors.bs3css, {allowEmpty: true})
    .pipe(gulpif(bs3, replace('@charset "UTF-8";', '')))
    .pipe(gulpif(bs3, replace(/:\s*\.\d/g, function(match) {
      return ":" + match.slice(1, -2).trim() + "0." + match.slice(-1)
    })))
    .pipe(gulpif(bs3, replace(/font-size:(\s*\d+\.*\d*)px/g, function(match) {
      return "font-size:calc(" + match.slice(10, -2).trim() + "rem/16)"
    })))
    .pipe(gulpif(bs3, gulp.dest(paths.src.root + paths.dist.css)))
    .pipe(gulpif(bs3, gulp.dest(paths.dist.root + paths.dist.css)))
})
gulp.task('bs3fonts', function() {
  return gulp.src(paths.vendors.bs3fonts, {allowEmpty: true, encoding: false})
    .pipe(gulpif(bs3, gulp.dest(paths.src.root + paths.dist.bs3fonts)))
    .pipe(gulpif(bs3, gulp.dest(paths.dist.root + paths.dist.bs3fonts)))
})
gulp.task('jqjs', function() {
  return gulp.src(paths.vendors.jq, {allowEmpty: true})
    .pipe(gulpif(jq, gulp.dest(paths.src.root + paths.dist.js)))
    .pipe(gulpif(jq, gulp.dest(paths.dist.root + paths.dist.js)))
    // .pipe(gulp.dest(paths.src.root + paths.dist.js))
    // .pipe(gulp.dest(paths.dist.root + paths.dist.js))
    // .pipe(mode.production(gulp.dest(paths.dist.vendors)))
})
gulp.task('lg-autoplay', function() {
  return gulp.src('node_modules/lightgallery/plugins/autoplay/lg-autoplay.min.js', {allowEmpty: true})
    .pipe(gulpif(lightgallery, gulp.dest('./src/js/plugins/autoplay')))
    .pipe(gulpif(lightgallery, gulp.dest('./dist/js/plugins/autoplay')))
})
gulp.task('lg-fullscreen', function() {
  return gulp.src('node_modules/lightgallery/plugins/fullscreen/lg-fullscreen.min.js', {allowEmpty: true})
    .pipe(gulpif(lightgallery, gulp.dest('./src/js/plugins/fullscreen')))
    .pipe(gulpif(lightgallery, gulp.dest('./dist/js/plugins/fullscreen')))
})
gulp.task('lg-thumbnail', function() {
  return gulp.src('node_modules/lightgallery/plugins/thumbnail/lg-thumbnail.min.js', {allowEmpty: true})
    .pipe(gulpif(lightgallery, gulp.dest('./src/js/plugins/thumbnail')))
    .pipe(gulpif(lightgallery, gulp.dest('./dist/js/plugins/thumbnail')))
})
gulp.task('lg-zoom', function() {
  return gulp.src('node_modules/lightgallery/plugins/zoom/lg-zoom.min.js', {allowEmpty: true})
    .pipe(gulpif(lightgallery, gulp.dest('./src/js/plugins/zoom')))
    .pipe(gulpif(lightgallery, gulp.dest('./dist/js/plugins/zoom')))
})
gulp.task('lightgallery', gulp.series('lg-autoplay', 'lg-fullscreen', 'lg-thumbnail', 'lg-zoom'));


// inject css & js to html - https://www.npmjs.com/package/gulp-inject#method-2-use-gulp-inject-s-name-option
gulp.task('inject', function() {
  return gulp.src(paths.src.html, {allowEmpty: true})
    .pipe(gulpif(bs, inject(gulp.src([paths.src.root + paths.dist.css + '/bootstrap.min.css'], {allowEmpty: true}, {
      read: false
    }), {
      name: 'bs',
      relative: true,
      removeTags: false
    })))
    .pipe(gulpif(bs, inject(gulp.src([paths.src.root + paths.dist.css + '/bootstrap-icons.css'], {allowEmpty: true}, {
      read: false
    }), {
      name: 'bsicon',
      relative: true,
      removeTags: false
    })))
    .pipe(gulpif(uk, inject(gulp.src([paths.src.root + paths.dist.css + '/uikit*.css'], {allowEmpty: true}, {
      read: false
    }), {
      name: 'uk',
      relative: true,
      removeTags: false
    })))
    .pipe(gulpif(tw, inject(gulp.src([paths.src.root + paths.dist.css + '/tailwind*.css'], {allowEmpty: true}, {
      read: false
    }), {
      name: 'tw',
      relative: true,
      removeTags: false
    })))
    .pipe(gulpif(fa, inject(gulp.src([paths.src.root + paths.dist.css + '/font*.css'], {allowEmpty: true}, {
      read: false
    }), {
      name: 'fa',
      relative: true,
      removeTags: false
    })))
    .pipe(gulpif(vendorscss, inject(gulp.src(srccss, {allowEmpty: true}, {
      read: false
    }), {
      name: 'vendors',
      relative: true,
      removeTags: false
    })))
    // .pipe(gulpif(fullcalendar, inject(gulp.src([paths.src.root + paths.dist.css + '/fullcalendar*.css'], {allowEmpty: true}, {
    //   read: false
    // }), {
    //   name: 'fullcalendar',
    //   relative: true,
    //   removeTags: false
    // })))
    .pipe(inject(gulp.src([paths.src.root + paths.dist.css + '/main.css'], {allowEmpty: true}, {
      read: false
    }), {
      name: 'main',
      relative: true,
      removeTags: false
    }))
    .pipe(gulpif(colors, inject(gulp.src([paths.src.root + paths.dist.css + '/colors.css'], {allowEmpty: true}, {
      read: false
    }), {
      name: 'colors',
      relative: true,
      removeTags: false
    })))
    .pipe(gulpif(injectothercolors, inject(gulp.src([paths.src.root + paths.dist.css + '/colors-*.css'], {allowEmpty: true}, {
      read: false
    }), {
      name: 'othercolors',
      relative: true,
      removeTags: false
    })))
    .pipe(inject(gulp.src([paths.src.root + paths.dist.css + '/style.css'], {allowEmpty: true}, {
      read: false
    }), {
      name: 'style',
      relative: true,
      removeTags: false
    }))
    .pipe(gulpif(injectstyle2, inject(gulp.src([paths.src.root + paths.dist.css + '/style-*.css'], {allowEmpty: true}, {
      read: false
    }), {
      name: 'style2',
      relative: true,
      removeTags: false
    })))
    .pipe(gulpif(editor, inject(gulp.src([paths.src.root + paths.dist.css + '/editor.css'], {allowEmpty: true}, {
      read: false
    }), {
      name: 'editor',
      relative: true,
      removeTags: false
    })))
    .pipe(inject(gulp.src(paths.src.injectcss, {allowEmpty: true}, {
      read: false
    }), {
      relative: true,
      removeTags: false
    }))
    .pipe(gulpif(uk, inject(gulp.src([paths.src.root + paths.dist.js + '/uikit.min.js'], {allowEmpty: true}, {
      read: false
    }), {
      name: 'uk',
      relative: true,
      removeTags: false
    })))
    .pipe(gulpif(uk, inject(gulp.src([paths.src.root + paths.dist.js + '/uikit-icons.min.js'], {allowEmpty: true}, {
      read: false
    }), {
      name: 'ukicon',
      relative: true,
      removeTags: false
    })))
    .pipe(gulpif(jq, inject(gulp.src([paths.src.root + paths.dist.js + '/jquery.min.js'], {allowEmpty: true}, {
      read: false
    }), {
      name: 'jq',
      relative: true,
      removeTags: false
    })))
    .pipe(gulpif(bs, inject(gulp.src([paths.src.root + paths.dist.js + '/bootstrap*.js'], {allowEmpty: true}, {
      read: false
    }), {
      name: 'bs',
      relative: true,
      removeTags: false
    })))
    .pipe(gulpif(vendorsjs, inject(gulp.src(srcjs, {allowEmpty: true}, {
      read: false
    }), {
      name: 'vendors',
      relative: true,
      removeTags: false
    })))
    // .pipe(gulpif(fullcalendar, inject(gulp.src([paths.src.root + paths.dist.js + '/fullcalendar.js'], {allowEmpty: true}, {
    //   read: false
    // }), {
    //   name: 'fullcalendar',
    //   relative: true,
    //   removeTags: false
    // })))
    .pipe(gulpif(fullcalendar, inject(gulp.src([paths.src.root + paths.dist.js + '/fullcalendar.min.js'], {allowEmpty: true}, {
      read: false
    }), {
      name: 'fullcalendar-main',
      relative: true,
      removeTags: false
    })))
    .pipe(gulpif(fullcalendar, inject(gulp.src([paths.src.root + paths.dist.js + '/fullcalendar-locales*.js'], {allowEmpty: true}, {
      read: false
    }), {
      name: 'fullcalendar-locales',
      relative: true,
      removeTags: false
    })))
    .pipe(inject(gulp.src([paths.src.root + paths.dist.js + '/script.js'], {allowEmpty: true}, {
      read: false
    }), {
      name: 'script',
      relative: true,
      removeTags: false,
      transform: function(filepath) {
        return '<script type="module" src="' + filepath + '" defer>' + '</script>';
      }
    }))
    .pipe(inject(gulp.src(paths.src.injectjs, {allowEmpty: true}, {
      read: false
    }), {
      relative: true,
      removeTags: false,
      // transform: function(filepath) {
      //   return '<script src="' + filepath + '" defer>' + '</script>';
      // }
    }))
    .pipe(gulp.dest(paths.src.root))
  // .pipe(gulp.dest(paths.dist.root))
});
gulp.task('inject-color1', function() {
  return gulp.src(paths.src.color1html, {allowEmpty: true})
    .pipe(gulpif(separateinjectcolors, inject(gulp.src(paths.src.color1css, {allowEmpty: true}, {
      read: false
    }), {
      name: 'othercolors',
      relative: true,
      removeTags: false
    })))
    .pipe(gulp.dest(paths.src.root))
});
gulp.task('inject-color2', function() {
  return gulp.src(paths.src.color2html, {allowEmpty: true})
    .pipe(gulpif(separateinjectcolors, inject(gulp.src(paths.src.color2css, {allowEmpty: true}, {
      read: false
    }), {
      name: 'othercolors',
      relative: true,
      removeTags: false
    })))
    .pipe(gulp.dest(paths.src.root))
});
gulp.task('inject-color3', function() {
  return gulp.src(paths.src.color3html, {allowEmpty: true})
    .pipe(gulpif(separateinjectcolors, inject(gulp.src(paths.src.color3css, {allowEmpty: true}, {
      read: false
    }), {
      name: 'othercolors',
      relative: true,
      removeTags: false
    })))
    .pipe(gulp.dest(paths.src.root))
});
gulp.task('inject-style2-1', function() {
  return gulp.src(paths.src.color1html, {allowEmpty: true})
    .pipe(gulpif(separateinjectstyle2, inject(gulp.src(paths.src.style2_1css, {allowEmpty: true}, {
      read: false
    }), {
      name: 'style2',
      relative: true,
      removeTags: false
    })))
    .pipe(gulp.dest(paths.src.root))
});
gulp.task('inject-style2-2', function() {
  return gulp.src(paths.src.color2html, {allowEmpty: true})
    .pipe(gulpif(separateinjectstyle2, inject(gulp.src(paths.src.style2_2css, {allowEmpty: true}, {
      read: false
    }), {
      name: 'style2',
      relative: true,
      removeTags: false
    })))
    .pipe(gulp.dest(paths.src.root))
});

gulp.task('build-inject', function() {
  return gulp.src(paths.dist.html, {allowEmpty: true})
    .pipe(gulpif(bs, inject(gulp.src([paths.dist.root + paths.dist.css + '/bootstrap.min.css'], {allowEmpty: true}, {
      read: false
    }), {
      name: 'bs',
      relative: true,
      removeTags: true
    })))
    .pipe(gulpif(bs, inject(gulp.src([paths.dist.root + paths.dist.css + '/bootstrap-icons.css'], {allowEmpty: true}, {
      read: false
    }), {
      name: 'bsicon',
      relative: true,
      removeTags: true
    })))
    .pipe(gulpif(uk, inject(gulp.src([paths.dist.root + paths.dist.css + '/uikit*.css'], {allowEmpty: true}, {
      read: false
    }), {
      name: 'uk',
      relative: true,
      removeTags: true
    })))
    .pipe(gulpif(tw, inject(gulp.src([paths.dist.root + paths.dist.css + '/tailwind*.css'], {allowEmpty: true}, {
      read: false
    }), {
      name: 'tw',
      relative: true,
      removeTags: true
    })))
    .pipe(gulpif(fa, inject(gulp.src([paths.dist.root + paths.dist.css + '/font*.css'], {allowEmpty: true}, {
      read: false
    }), {
      name: 'fa',
      relative: true,
      removeTags: true
    })))
    .pipe(gulpif(vendorscss, inject(gulp.src(distcss, {allowEmpty: true}, {
      read: false
    }), {
      name: 'vendors',
      relative: true,
      removeTags: true
    })))
    // .pipe(gulpif(fullcalendar, inject(gulp.src([paths.dist.root + paths.dist.css + '/fullcalendar*.css'], {allowEmpty: true}, {
    //   read: false
    // }), {
    //   name: 'fullcalendar',
    //   relative: true,
    //   removeTags: true
    // })))
    .pipe(inject(gulp.src([paths.dist.root + paths.dist.css + '/main*.css'], {allowEmpty: true}, {
      read: false
    }), {
      name: 'main',
      relative: true,
      removeTags: true
    }))
    .pipe(gulpif(colors, inject(gulp.src([paths.dist.root + paths.dist.css + '/colors.min.css'], {allowEmpty: true}, {
      read: false
    }), {
      name: 'colors',
      relative: true,
      removeTags: true
    })))
    .pipe(gulpif(injectothercolors, inject(gulp.src([paths.dist.root + paths.dist.css + '/colors-*.css'], {allowEmpty: true}, {
      read: false
    }), {
      name: 'othercolors',
      relative: true,
      removeTags: true
    })))
    .pipe(inject(gulp.src([paths.dist.root + paths.dist.css + '/style.min.css'], {allowEmpty: true}, {
      read: false
    }), {
      name: 'style',
      relative: true,
      removeTags: true
    }))
    .pipe(gulpif(injectstyle2, inject(gulp.src([paths.dist.root + paths.dist.css + '/style-*.css'], {allowEmpty: true}, {
      read: false
    }), {
      name: 'style2',
      relative: true,
      removeTags: true
    })))
    .pipe(gulpif(editor, inject(gulp.src([paths.dist.root + paths.dist.css + '/editor.min.css'], {allowEmpty: true}, {
      read: false
    }), {
      name: 'editor',
      relative: true,
      removeTags: true
    })))
    .pipe(inject(gulp.src(paths.dist.injectcss, {allowEmpty: true}, {
      read: false
    }), {
      relative: true,
      removeTags: true
    }))
    .pipe(gulpif(uk, inject(gulp.src([paths.dist.root + paths.dist.js + '/uikit.min.js'], {allowEmpty: true}, {
      read: false
    }), {
      name: 'uk',
      relative: true,
      removeTags: true
    })))
    .pipe(gulpif(uk, inject(gulp.src([paths.dist.root + paths.dist.js + '/uikit-icons.min.js'], {allowEmpty: true}, {
      read: false
    }), {
      name: 'ukicon',
      relative: true,
      removeTags: true
    })))
    .pipe(gulpif(jq, inject(gulp.src([paths.dist.root + paths.dist.js + '/jquery.min.js'], {allowEmpty: true}, {
      read: false
    }), {
      name: 'jq',
      relative: true,
      removeTags: true
    })))
    .pipe(gulpif(bs, inject(gulp.src([paths.dist.root + paths.dist.js + '/bootstrap*.js'], {allowEmpty: true}, {
      read: false
    }), {
      name: 'bs',
      relative: true,
      removeTags: true
    })))
    .pipe(gulpif(vendorsjs, inject(gulp.src(distjs, {allowEmpty: true}, {
      read: false
    }), {
      name: 'vendors',
      relative: true,
      removeTags: true
    })))
    // .pipe(gulpif(fullcalendar, inject(gulp.src([paths.dist.root + paths.dist.js + '/fullcalendar.min.js'], {allowEmpty: true}, {
    //   read: false
    // }), {
    //   name: 'fullcalendar',
    //   relative: true,
    //   removeTags: true
    // })))
    .pipe(gulpif(fullcalendar, inject(gulp.src([paths.dist.root + paths.dist.js + '/fullcalendar.min.js'], {allowEmpty: true}, {
      read: false
    }), {
      name: 'fullcalendar-main',
      relative: true,
      removeTags: true
    })))
    .pipe(gulpif(fullcalendar, inject(gulp.src([paths.dist.root + paths.dist.js + '/fullcalendar-locales*.js'], {allowEmpty: true}, {
      read: false
    }), {
      name: 'fullcalendar-locales',
      relative: true,
      removeTags: true
    })))
    .pipe(inject(gulp.src([paths.dist.root + paths.dist.js + '/script*.js'], {allowEmpty: true}, {
      read: false
    }), {
      name: 'script',
      relative: true,
      removeTags: true,
      transform: function(filepath) {
        return '<script type="module" src="' + filepath + '" defer>' + '</script>';
      }
    }))
    .pipe(inject(gulp.src(paths.dist.injectjs, {allowEmpty: true}, {
      read: false
    }), {
      relative: true,
      removeTags: true,
      // transform: function(filepath) {
      //   return '<script src="' + filepath + '" defer>' + '</script>';
      // }
    }))
    .pipe(gulp.dest(paths.dist.root))
});
gulp.task('build-inject-color1', function() {
  return gulp.src(paths.dist.color1html, {allowEmpty: true})
    .pipe(gulpif(separateinjectcolors, inject(gulp.src(paths.dist.color1css, {allowEmpty: true}, {
      read: false
    }), {
      name: 'othercolors',
      relative: true,
      removeTags: true
    })))
    .pipe(gulp.dest(paths.dist.root))
});
gulp.task('build-inject-color2', function() {
  return gulp.src(paths.dist.color2html, {allowEmpty: true})
    .pipe(gulpif(separateinjectcolors, inject(gulp.src(paths.dist.color2css, {allowEmpty: true}, {
      read: false
    }), {
      name: 'othercolors',
      relative: true,
      removeTags: true
    })))
    .pipe(gulp.dest(paths.dist.root))
});
gulp.task('build-inject-color3', function() {
  return gulp.src(paths.dist.color3html, {allowEmpty: true})
    .pipe(gulpif(separateinjectcolors, inject(gulp.src(paths.dist.color3css, {allowEmpty: true}, {
      read: false
    }), {
      name: 'othercolors',
      relative: true,
      removeTags: true
    })))
    .pipe(gulp.dest(paths.dist.root))
});
gulp.task('build-inject-style2-1', function() {
  return gulp.src(paths.dist.color1html, {allowEmpty: true})
    .pipe(gulpif(separateinjectstyle2, inject(gulp.src(paths.dist.style2_1css, {allowEmpty: true}, {
      read: false
    }), {
      name: 'style2',
      relative: true,
      removeTags: true
    })))
    .pipe(gulp.dest(paths.dist.root))
});
gulp.task('build-inject-style2-2', function() {
  return gulp.src(paths.dist.color2html, {allowEmpty: true})
    .pipe(gulpif(separateinjectstyle2, inject(gulp.src(paths.dist.style2_2css, {allowEmpty: true}, {
      read: false
    }), {
      name: 'style2',
      relative: true,
      removeTags: true
    })))
    .pipe(gulp.dest(paths.dist.root))
});


// Compile SCSS
gulp.task('sass', function() {
  return gulp.src(paths.src.sasstoscss, {allowEmpty: true})
    // .pipe(sass({
    //   outputStyle: 'expanded'  //For old "gulp-sass"
    // }).on('error', sass.logError))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpautoprefixer()) //Cannot use autoprefixer or get err
    .pipe(replace('@charset "UTF-8";', ''))
    .pipe(replace(/:\s*\.\d/g, function(match) {
      return ":" + match.slice(1, -2).trim() + "0." + match.slice(-1)
    }))
    .pipe(gulp.dest(paths.src.root + paths.dist.css))
    // .pipe(browserSync.stream())
});

// Minify + Combine CSS
gulp.task('css', function() {
  return gulp.src(paths.src.minicss, {allowEmpty: true})
    .pipe(mode.development(
      postcss([
        atimport(),
        autoprefixer()
      ])
    ))
    .pipe(mode.production(
      postcss([
        atimport(),
        autoprefixer()
      ])
    ))
    .pipe(mode.production(
      cleanCSS()
    ))
    .pipe(mode.production(
      rename({
        suffix: '.min'
      })
    ))
    .pipe(mode.purge(
      postcss([
        atimport(),
        purgecss({ // Using '@fullhuman/postcss-purgecss'
          content: [paths.src.html, paths.src.js],
          safelist: [/^swiper-pagination-/], // selector or regex - https://purgecss.com/configuration.html#options
          // 'defaultExtractor' Must be necessary here
          defaultExtractor: content => content.match(/[\w-/:!@__]+(?<!:__)/g) || []
        }),
        autoprefixer()
      ])
    ))
    .pipe(mode.purge(
      cleanCSS()
    ))
    .pipe(mode.purge(replace('@charset "UTF-8";', '')))
    .pipe(mode.purge(replace(/:\s*\.\d/g, function(match) {
      return ":" + match.slice(1, -2).trim() + "0." + match.slice(-1)
    })))
    .pipe(mode.purge(
      rename({
        suffix: '.min'
      })
    ))
    // .pipe(
    //   postcss([
    //     atimport(),
    //     // purgecss({
    //     //   content: [paths.src.html, paths.src.js],
    //     //   // whitelist: ['opacity-100'],
    //     //   defaultExtractor: content =>
    //     //     content.match(/[\w-/:!@__]+(?<!:__)/g) || []
    //     // }),
    //     autoprefixer()
    //   ])
    // )
    // .pipe(cleanCSS())
    // // .pipe(concat('app.css'))
    // .pipe(rename({
    //   suffix: '.min'
    // }))
    .pipe(gulp.dest(paths.dist.root + paths.dist.css))
});
gulp.task('mincss', function() {
  return gulp.src(paths.src.mincss, {allowEmpty: true})
    .pipe(mode.production(
      postcss([
        atimport(),
        autoprefixer()
      ])
    ))
    .pipe(mode.production(
      cleanCSS()
    ))
    .pipe(mode.purge(
      postcss([
        atimport(),
        purgecss({
          content: [paths.src.html, paths.src.js],
          // whitelist: ['opacity-100'],
          defaultExtractor: content =>
            content.match(/[\w-/:!@__]+(?<!:__)/g) || []
        }),
        autoprefixer()
      ])
    ))
    .pipe(mode.purge(
      cleanCSS()
    ))
    .pipe(gulp.dest(paths.dist.root + paths.dist.css))
});

// Minify + Combine JS
gulp.task('module', function() {
  return gulp.src('src/js/module.js', {allowEmpty: true})
    .pipe(uglify.default())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.src.root + paths.dist.js))
    .pipe(gulp.dest(paths.dist.root + paths.dist.js))
});

gulp.task('js', function() {
  return gulp.src(paths.src.minjs, {allowEmpty: true})
    // .pipe(mode.production(
    //   autopolyfiller('script_polyfill.js', {
    //     browsers: require('autoprefixer').default
    //   })
    // ))
    // .pipe(autopolyfiller('script-polyfill.js'))
    .pipe(mode.production(
      uglify.default()
    ))
    .pipe(mode.production(
      rename({
        suffix: '.min'
      })
    ))
    .pipe(mode.purge(
      uglify.default()
    ))
    .pipe(mode.purge(
      rename({
        suffix: '.min'
      })
    ))
    // .pipe(uglify())
    // // .pipe(concat('app.js'))
    // .pipe(rename({
    //   suffix: '.min'
    // }))
    // .pipe(gulp.dest(paths.dist.root + paths.dist.js))
    .pipe(mode.production(gulp.dest(paths.dist.root + paths.dist.js)))
    .pipe(mode.purge(gulp.dest(paths.dist.root + paths.dist.js)))
});

//It seems not working
// gulp.task('minjs', function() {
//   return gulp.src([paths.src.root + paths.dist.js + '/*.min.js'])
//     .pipe(mode.production(
//       uglify()
//     ))
//     .pipe(mode.purge(
//       uglify()
//     ))
//     .pipe(mode.production(gulp.dest(paths.dist.root + paths.dist.js)))
//     .pipe(mode.purge(gulp.dest(paths.dist.root + paths.dist.js)))

//     .pipe(browserSync.stream());
// });

// Compress (JPEG, PNG, GIF, SVG, JPG)
gulp.task('img', function() {
  return gulp.src(paths.src.img, {allowEmpty: true, encoding: false})
    // .pipe(imagemin([
    //   imagemin.gifsicle({interlaced: true}),
    //   imagemin.mozjpeg({quality: 75, progressive: true}),
    //   imagemin.optipng({optimizationLevel: 5}),
    //   // imagemin.svgo got removing ',' prolblem in svg
    //   // imagemin.svgo({
    //   //     plugins: [
    //   //         {removeViewBox: true},
    //   //         {cleanupIDs: false}
    //   //     ]
    //   // })
    // ]))
    .pipe(gulp.dest(paths.dist.root + paths.dist.img));
});

// ceate dist dir
gulp.task('dist', function() {
  return gulp.src('*.*', {
      read: false
    })
    .pipe(gulp.dest(paths.dist.root))
});

// clean dist and keep the directory
gulp.task('clean', function() {
  return deleteAsync(['dist/**', '!dist']);
});

// clean html
gulp.task('delhtml', function() {
  // return deleteAsync([paths.src.root + '*.html', paths.dist.root + '*.html'], {allowEmpty: true});
  return deleteAsync([paths.src.root + '*.html', paths.dist.root + '*.html'], {allowEmpty: true});
});

// clean css
gulp.task('deletecss', function() {
  return deleteAsync(paths.src.delcss, {allowEmpty: true});
});

// clean js
gulp.task('deletejs', function() {
  return deleteAsync(paths.src.deljs, {allowEmpty: true});
});

// clean fonts
gulp.task('deletefonts', function() {
  return deleteAsync(paths.src.delfonts, {allowEmpty: true});
});

// Watch (SASS, CSS, JS, and HTML) reload browser on change
gulp.task('watch', function() {
  browserSync.init({
    server: {
      baseDir: paths.root.www
    },
    notify: false, // added in 2024/7/4
  })
  gulp.watch(paths.src.scss, gulp.series('sass')).on('change', browserSync.reload);
  // gulp.watch(paths.src.css, gulp.series('css')).on('change', browserSync.reload);
  gulp.watch('src/js/script.js').on('change', browserSync.reload);
  gulp.watch('src/js/module.js', gulp.series('module')).on('change', browserSync.reload);
  // gulp.watch(paths.src.templates, gulp.series('templates')).on('change', browserSync.reload);
  gulp.watch(paths.src.root + paths.dist.templates + '/**/*.hbs', gulp.series('tailwind', 'delhtml', 'templates', 'sass', 'tailwind')).on('change', browserSync.reload);
  // gulp.watch(paths.src.html).on('change', browserSync.reload);
});

//------------------- First run 'gulp start' ---------------------------------------------------------
if (uk) {
  gulp.task('vendors', gulp.series('clean', 'ukjs', 'ukcss', 'fonts', 'facss', 'fafonts', 'jqjs', 'fullcalendarjsi', 'fullcalendarjs', 'fullcalendarlocales', 'vendorsjs', 'vendorscss', 'chartjs', 'tagcloud', 'lightgallery', 'bs5lightbox', 'download'));
}
if (bs) {
  gulp.task('vendors', gulp.series('clean', 'bscss', 'bsjs', 'bsiconcss', 'bsfonts', 'fonts', 'facss', 'fafonts', 'jqjs', 'fullcalendarjsi', 'fullcalendarjs', 'fullcalendarlocales', 'vendorsjs', 'vendorscss', 'chartjs', 'tagcloud', 'lightgallery', 'bs5lightbox', 'download'));
}
if (bs3) {
  gulp.task('vendors', gulp.series('clean', 'bs3css', 'bs3js', 'bs3fonts', 'fonts', 'facss', 'fafonts', 'jqjs', 'fullcalendarjsi', 'fullcalendarjs', 'fullcalendarlocales', 'vendorsjs', 'vendorscss', 'chartjs', 'tagcloud', 'lightgallery', 'bs5lightbox', 'download'));
}

//Compile Tailwind to CSS and minify css, using 'gulp tailwind' & 'gulp tailwind --production' to purge css on production
gulp.task('tocss', gulp.series('sass', 'css', 'mincss'));
// gulp.task('tocss', gulp.series('tailwind', 'sass', 'css'));

//Compile SCSS to CSS and purge & minify css, needed when modify scss
gulp.task('scss', gulp.series('sass', 'css'));

//------------------- Remember edit 'title' in gulp.task('templates') ---------------------------------------------------------
//********** First Edit title: ' ' **************
//Inject path manually in 'meta.hbs' files, no 'inject' task
gulp.task('temp', gulp.series('templates'));
//Inject path to all html files relative to /src and /dist [NO for different injection in html]
gulp.task('html', gulp.series('delhtml', 'templates', 'deletecss', 'sass', 'js', 'inject'));

//0. Preset
gulp.task('start', gulp.series('clean', 'deletecss', 'deletejs', 'vendors', 'delhtml', 'templates', 'sass', 'js', 'inject'));

//1. Preset then watch
gulp.task('server', gulp.series('deletecss', 'deletejs', 'deletefonts', 'vendors', 'module', 'tailwind', 'delhtml', 'templates', 'sass', 'inject', 'inject-color1', 'inject-color2', 'inject-style2-1', 'inject-style2-2', 'tailwind', 'watch'));

//2. Prepare all assets for production, run: 'yarn build-nohtml' or 'yarn build'
gulp.task('build-nohtml', gulp.series('deletecss', 'deletejs', 'vendors', 'scss', 'js', 'img'));
// gulp.task('build-purge', gulp.series('dist', 'clean', 'deletecss', 'deletejs', 'vendors', 'tailwind', 'delhtml', 'templates', 'sass', 'inject', 'inject-color1', 'inject-color2', 'inject-style2-1', 'inject-style2-2', 'tailwind', 'img', 'js', 'tailwind-min', 'css', 'build-inject', 'build-inject-color1', 'build-inject-color2', 'build-inject-style2-1', 'build-inject-style2-2', 'fontsize')); // old
gulp.task('purge', gulp.series('templates-dist', 'tailwind-min', 'css', 'img', 'js', 'build-inject', 'build-inject-color1', 'build-inject-color2', 'build-inject-style2-1', 'build-inject-style2-2', 'fontsize'));
gulp.task('build', gulp.series('dist', 'clean', 'deletecss', 'deletejs', 'vendors', 'tailwind', 'delhtml', 'templates', 'img', 'sass', 'tailwind-min', 'css', 'js', 'inject', 'inject-color1', 'inject-color2', 'inject-style2-1', 'inject-style2-2', 'build-inject', 'build-inject-color1', 'build-inject-color2', 'build-inject-style2-1', 'build-inject-style2-2'));


//--- 0.First run: 'gulp start'
//--- 1.For development run: 'gulp server' or 'yarn server'
//--- 2.For production only run: 'yarn build'