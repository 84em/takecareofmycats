/**
 * Gulp configuration file for Take Care Of My Cats website
 * Processes CSS and JS files for development and production
 */

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const del = require('del');

// File paths
const paths = {
  styles: {
    src: 'assets/css/styles.css',
    dest: 'dist/css/'
  },
  scripts: {
    src: 'assets/js/**/*.js',
    dest: 'dist/js/'
  },
  html: {
    src: '*.html'
  }
};

// Clean dist directory
function clean() {
  return del(['dist']);
}

// Process CSS files
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.styles.dest)) // Save unminified version
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

// Process JavaScript files
function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(gulp.dest(paths.scripts.dest)) // Save unminified version
    .pipe(terser())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.stream());
}

// Watch files for changes
function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.html.src).on('change', browserSync.reload);
}

// Define complex tasks
const build = gulp.series(clean, gulp.parallel(styles, scripts));
const dev = gulp.series(build, watch);

// Export tasks
exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;
exports.build = build;
exports.default = dev;
