'use strict';

const { exec } = require('child_process');
const fs = require('fs/promises');
const path = require('path');
const data = require(path.join(__dirname, 'data.js'));
const { question } = require('readline-sync');

class App {
  constructor() {
    this.data = data;
    this.reactAppName = question('Qual o nome da aplicacao react que quer criar? ');

    this.init();
  }

  async createDirectory() {
    for (let folder of this.data.folders) {
      await fs.mkdir(`./${this.reactAppName}/${folder}`, { recursive: true });
    }
  }

  async installPackages(type) {
    const res = new Promise((resolve, reject) => {
      let cleitin = this.data.packages
        .reduce((acc, curr) => {
          if (curr.type === type) {
            acc.push(curr.name);
          }
          return acc;
        }, [])
        .join(' ');

      type === 'dev' ? (cleitin += ' -D') : (cleitin += '');

      exec(`cd ${this.reactAppName} && npm install ${cleitin}`, (error, stdout, stderr) => {
        if (error) reject(new Error('Error: ', error));
        if (stderr) console.log('Stderr: ', stderr);
        console.log('Dependencies have been installed');
        console.log('Stdout: ', stdout);
        resolve();
      });
    });
    return res;
  }

  createReactApp() {
    const res = new Promise((resolve, reject) => {
      exec(`npx create-react-app ${this.reactAppName}`, (error, stdout, stderr) => {
        if (error) reject(new Error('Error: ', error));
        if (stderr) console.log('Stderr: ', stderr);
        console.log('React app has been created');
        console.log('Stdout: ', stdout);
        resolve();
      });
    });
    return res;
  }

  async clear() {
    await fs.rm(`./${this.reactAppName}/src`, { recursive: true });
    await fs.mkdir(`./${this.reactAppName}/src`);
  }

  async rebuildSrc() {
    for (let { path, content } of this.data.clear) {
      console.log(`./${this.reactAppName}/${path}`, content);
      await fs.writeFile(`./${this.reactAppName}/${path}`, content);
    }
  }

  async init() {
    try {
      await this.createReactApp();
      await this.clear();
      await this.rebuildSrc();
      await this.createDirectory();
      await this.installPackages('prod');
      await this.installPackages('dev');
    } catch (error) {
      console.log(error);
    }
  }
}

const init = new App();
