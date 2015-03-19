
'use strict';

var path = require('path');
var shell = require('shelljs');

var hachi = {

  basePath: path.resolve(__dirname, '../scaffolds/'),

  targetPath: path.resolve(process.cwd(), './'),

  koa: function () {
    console.log('\n  koa\n');

    var koaFiles = path.join(this.basePath, 'koa/*');

    shell.cp(koaFiles, this.targetPath);

  },

  eslint: function () {
    console.log('\n  eslint\n')

     var eslintFile = path.join(this.basePath, 'configs/.eslintrc');

    shell.cp(eslintFile, this.targetPath);
  },

  inpm: function () {
    console.log('\n  inpm\n');

    var inpmFile = path.join(this.basePath, 'configs/.npmignore');

    shell.cp(inpmFile, this.targetPath);
  },

  igit: function () {
    console.log('\n  igit\n');

    var igitFile = path.join(this.basePath, 'configs/.gitignore');

    shell.cp(igitFile, this.targetPath);
  }

};


module.exports = hachi;
