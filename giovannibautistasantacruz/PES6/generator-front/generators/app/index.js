
var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts);

        // Next, add your custom code
        this.option('babel'); // This method adds support for a `--babel` flag
    }

    async prompting() {
        this.answers = await this.prompt([{
            type    : 'input',
            name    : 'name',
            message : 'Your project name',
            default : this.appname // Default to current folder name
        }, {
            type    : 'confirm',
            name    : 'cool',
            message : 'Would you like to enable the Cool feature?'
        }]);
    }

    config() {
        const pkgJson = {
            devDependencies: {
                "@babel/core": "^7.0.1",
                "@babel/preset-env": "^7.0.0",
                "chalk": "^2.4.1",
                "dotenv": "^6.0.0",
                "fs-extra": "^7.0.0",
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
            dependencies: {
                "@babel/polyfill": "^7.0.0",
                "body-parser": "^1.18.3",
                "cors": "^2.8.4",
                "express": "^4.16.3"
            }
        };

        // Extend or create package.json file in destination path
        this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
    }

    install() {
        this.npmInstall();
    }

    writing() {
       
            this.destinationPath(`src/index.js`)
        
    }
};
