'use strict';

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpBabel = require('gulp-babel');

var _gulpBabel2 = _interopRequireDefault(_gulpBabel);

var _gulpAutoprefixer = require('gulp-autoprefixer');

var _gulpAutoprefixer2 = _interopRequireDefault(_gulpAutoprefixer);

var _gulpSourcemaps = require('gulp-sourcemaps');

var _gulpSourcemaps2 = _interopRequireDefault(_gulpSourcemaps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dirs = {
    src: './src/es6',
    dest: 'dest'
};

var es6Path = {
    src: dirs.src + '/' + '*.js',
    dest: '' + dirs.dest
};

_gulp2.default.task('babel', function () {
    return _gulp2.default.src(es6Path.src).pipe((0, _gulpBabel2.default)()).pipe(_gulp2.default.dest(es6Path.dest));
});

_gulp2.default.task('watch', function () {
    _gulp2.default.watch(es6Path.src, ['babel']);
});
//# sourceMappingURL=gulpfile.js.map