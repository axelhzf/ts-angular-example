var gulp = require("gulp");
var ts = require('gulp-typescript');
var eventStream = require('event-stream');
var del = require('del');

gulp.task('clean:ts', function (cb) {
  del([
    '.app/definitions',
    '.app/js'
  ], cb);
});

var tsProject = ts.createProject({
  declarationFiles: true,
  noExternalResolve: true
});

gulp.task('scripts', ['clean:ts'], function () {
  var tsResult = gulp.src([
    'app/types/**/*.ts',
    'app/ts/*.ts',
  ]).pipe(ts(tsProject));

  return eventStream.merge( // Merge the two output streams, so this task is finished when the IO of both operations are done.
    tsResult.dts.pipe(gulp.dest('.app/definitions')),
    tsResult.js.pipe(gulp.dest('.app/js'))
  );
});

gulp.task('watch', ['scripts'], function () {
  gulp.watch('app/ts/*.ts', ['scripts']);
});

gulp.task("default", ["scripts"]);