const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const Path = require('path');
var uglify = require('gulp-uglify');
let bs = require('browser-sync').create();

console.log(argv = process.argv);
const TASK = (() => {
    let ScssBasePath = Path.resolve(__dirname, '../src/main/resources/build/scss/modules');
    let cssDestPath = Path.resolve(__dirname, '../src/main/resources/statics/css');
    let commonMainJsPath = Path.resolve(__dirname, 'main/resources/statics/plugins');
    let scssList = ['home', 'shell', 'base', 'aui', 'homeqy', 'yanmgxccjb', 'superviseShow'];
    let currentScssPath = ['aui'].map(file => Path.resolve(ScssBasePath, file + '.scss'));
    return {
        paths: {
            styles: {
                src: currentScssPath,
                dest: cssDestPath
            }
        },
        server: () => {
            let proxy = 'localhost:8080';
            console.log('start server proxy', proxy);
            bs.init({
                proxy
            });
        },
        css: () => {
            return gulp.src(currentScssPath)
                .pipe(sass())
                .pipe(gulp.dest(Path.resolve(__dirname, TASK.paths.styles.dest)))
                .pipe(postcss([autoprefixer([
                    '> 1%',
                    'last 2 versions',
                    'ie >10',
                ])])).
            pipe(gulp.dest(Path.resolve(__dirname, TASK.paths.styles.dest)));
        },
        watch: () => {
            console.log('watch', Path.resolve(ScssBasePath, 'main.scss'));
            setTimeout(() => {
                gulp.watch(Path.resolve(ScssBasePath, 'main.scss'), gulp.series(TASK.css, gulp.parallel(TASK.BSreload, TASK.watch)));
            }, 1000);
        },
        BSreload: () => {
            setTimeout(() => {
                bs.reload();
            }, 2000);
            console.log('watch main.scss');
        },
        compressor: async () => { // 1\. 找到文件
            const {
                merge,
                getPath
            } = require('./mergeJS');

            // const DIST_PATH = await merge();
            const DIST_PATH = 'G:/workspaceGK/201905092729renren/security-enterprise-general/renren-admin/src/main/resources/statics/plugins/common.main.js';
            console.log('DIST_PATH\n', DIST_PATH, getPath());
            console.log('\nDIST_PATH', DIST_PATH);
            gulp.src(DIST_PATH)
                // .pipe(uglify())
                .pipe(gulp.dest(Path.resolve(getPath(), 'min')));
        }
    };
})();

exports.default = gulp.parallel(TASK.server, TASK.watch);
exports.css = gulp.parallel(TASK.css);
exports.compressor = gulp.parallel(TASK.compressor);