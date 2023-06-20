import gulp from 'gulp';
import svgSprite from 'gulp-svg-sprite';

import { filePaths } from '../config/paths.js';
import { plugins } from '../config/plugins.js';

const createSvgSprite = () => {
  return gulp
    .src(`${filePaths.src.svgicons}`, {})
    .pipe(plugins.handleError('SVG'))
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: `../sprite.svg`,
          },
        },
      })
    )
    .pipe(gulp.dest(`${filePaths.build.images}`));
};

export { createSvgSprite };