import path from 'path';

const projectDirName = path.basename(path.resolve());
const buildFolder = `./dist`;
const srcFolder = `./src`;

const filePaths = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/images/`,
    fonts: `${buildFolder}/fonts/`,
    static: `${buildFolder}/`,
    svgicons: `${buildFolder}/images`,
  },
  src: {
    js: `${srcFolder}/js/script.js`,
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp,ico}`,
    svg: `${srcFolder}/images/**/*.svg`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`,
    static: `${srcFolder}/static/**/*.*`,
    svgicons: `${srcFolder}/svgicons/*.svg`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    images: `${srcFolder}/**/*.{jpg,jpeg,png,svg,gif,webp,ico}`,
    static: `${srcFolder}/static/**/*.*`,
    svgicons: `${srcFolder}/svgicons/*.svg`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  projectDirName,
  ftp: ``, // Путь к нужной папке на удаленном сервере. Gulp добавит имя папки проекта автоматически
};

export { filePaths };