


var gulp = require("gulp");

// var htmlmin = require('gulp-htmlmin');

var csso = require('gulp-csso');

var uglify = require('gulp-uglify');

var imagemin = require('gulp-imagemin');

var autoprefixer = require('gulp-autoprefixer');

var rename = require("gulp-rename");

var del = require("del");

// var source = "source/";

 var dest ="production/";

var browserSync = require('browser-sync').create();
var reload  = browserSync.reload;
// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./css/*.css").on("change", reload);
    gulp.watch("*.html").on("change", reload);
    gulp.watch("./js/*.js").on("change", reload);

});



gulp.task("default", function() {


});


// gulp.task("htmlminify", function(){
// return gulp.src('source/*.html')
//     .pipe(htmlmin({collapseWhitespace: true}))
//     .pipe(gulp.dest('production/'))
// });

gulp.task("cssminify", function () {
    return gulp.src("./css/*.css")
        //.pipe(autoprefixer())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(csso())
        // .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(dest + "css/"));
});

gulp.task('jscompress', function() {
  return gulp.src("./js/*.js")
    .pipe(uglify())
    // .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(dest + "js/"));
});

gulp.task('move', function () {
	return gulp.src(["*.html", "*.png"])
	       .pipe(gulp.dest(dest));
});


gulp.task('imagemins', function () {
	return gulp.src(["./img/*.jpg", "./img/*.png"])
	       .pipe(imagemin())
	       .pipe(gulp.dest(dest + "img/"))
});

//clean a production folder
gulp.task('clean', function() {
    // content
    del([dest + "*"]).then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'));
});
});

