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
        name: chalk.greenBright.bold('Jordi'),
        surname: chalk.greenBright.bold('Sánchez Mir'),
    },
    position: {
        title: chalk.blackBright('Position:'),
        text: chalk.white.bold('Frontend Team Lead at Seat:CODE')
    },
    email: {
        title: chalk.blackBright('Email:'),
        text: chalk.white.bold('jordi.sanchez@code.seat')
    },
    mobile: {
        title: chalk.blackBright('Mobile:'),
        text: chalk.white.bold('+34 669 510 810')
    },
    github: {
        title: chalk.blackBright('Github:'),
        text: chalk.white.bold('github.com/jordisanchez-seatcode')
    },
    linkedin: {
        title: chalk.blackBright('Linkedin:'),
        text: chalk.white.bold('linkedin.com/in/jordisanchezmir')
    },
}

function tranformContentToString(content) {
    const endline = '\n';
    const space = ' ';
    return content.personalInformation.name + space + content.personalInformation.surname + endline + endline +
        content.position.title + space + content.position.text + endline +
        content.email.title + space + space + space + space + content.email.text + endline +
        content.mobile.title + space + space + space + content.mobile.text + endline +
        content.github.title + space + space + space + content.github.text + endline +
        content.linkedin.title + space + content.linkedin.text;
}

console.log(boxen(tranformContentToString(content), logOptions));