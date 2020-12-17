#!/usr/bin/env node

const boxen = require('boxen');
const chalk = require('chalk');

const logOptions = {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'blackBright'
}

const content = {
    personalInformation: {
        name: chalk.white.bold('Jordi Sánchez Mir'),
    },
    position: {
        title: chalk.blackBright('Position:'),
        text: chalk.white.bold('Frontend Team Lead at Seat:CODE')
    },
    github: {
        title: chalk.blackBright('Github:'),
        text: chalk.green.bold('github.com/j00ye')
    },
    linkedin: {
        title: chalk.blackBright('Linkedin:'),
        text: chalk.green.bold('linkedin.com/in/jordisanchezmir')
    },
}

function tranformContentToString(content){
    const endline = '\n';
    const space = ' ';
    return content.personalInformation.name + endline + endline +
        content.position.title + space + content.position.text + endline +
        content.github.title + space + content.github.text + endline +
        content.linkedin.title + space + content.linkedin.text;
}
    
console.log(boxen(tranformContentToString(content), logOptions));