#!/usr/bin/env node

var program = require('commander');
var fse = require('fs-extra');
const { spawn } = require('child_process');
program
  .version('1.0.2', '-v, --version')

program
  .command('new [path]')
  .description('generate new cyberspeed project on destination path')
  .action(function(path, options){
    
    // With Promises:
    fse.ensureDir(path)
    .then(() => {

        // Clone Git Repo to Destination Path

    })
    .catch(err => {
        console.error(err)
    })

  })
  
program.parse(process.argv);


