'use strict';

var Generator = require('yeoman-generator');

module.exports = class extends Generator {

  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // Next, add your custom code
    this.option('babel'); // This method adds support for a `--babel` flag
  }

  config() {
    const pkgJson = {
      devDependencies: {
        "serve": "^10.0.1",
        "fs-extra": "^7.0.0",
        "@babel/core": "^7.0.1",
        "@babel/preset-env": "^7.0.0",
        "gulp": "^3.9.1",
        "gulp-autoprefixer": "^6.0.0",
        "gulp-babel": "^8.0.0",
        "gulp-livereload": "^4.0.0",
        "gulp-minify": "^3.1.0",
        "gulp-minify-css": "^1.2.4",
        "gulp-notify": "^3.2.0",
        "gulp-rename": "^1.4.0",
        "gulp-sass": "^4.0.1",
        "gulp-uglify": "^3.0.1",
        "gulp-watch": "^5.0.1"
      },
      dependencies: {},
      scripts: {
        "test": "test",
        "serve": "serve",
        "build": "gulp",
        "start": "node index.js",
        "serve:dev": "gulp dev",
        "serve:prod": "gulp prod"
      }
    };

    // Extend or create package.json file in destination path
    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
  }

  install() {
    this.npmInstall();
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('src/index.html'),
      {
        title: "PracticaES6"
      }
    );
    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath('src/js/index.js'));
    
    this.fs.copyTpl(
      this.templatePath('index.scss'),
      this.destinationPath('src/css/index.scss'));

    this.fs.copyTpl(
      this.templatePath('gulpfile.js'),
      this.destinationPath('gulpfile.js'));
  }

};