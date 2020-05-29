const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");
const generateMarkdown = require("./generateMarkdown.js");

//array of questions 
inquirer.prompt([
    {
        type: "input",
        message: "What is your GitHub username",
        name: "username"
    },
    {
        type: "input",
        message: "What is your GitHub email",
        name: "email",
    },
    {
        type: "input",
        message: "The URL to your project",
        name: "URL",
    },
    {
        type: "input",
        message: "What is the project name",
        name: "title",
    },

    {
        type: "input",
        message: "Write a description of your project",
        name: "description",
    },
    {
        type: "input",
        message: "Table of Contents",
        name: "tableofcontents",
    },
    {
        type: "input",
        message: "What command should be run to install dependencies",
        name: "installation",
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo",
        name: "usage",
    },
    {
        type: "list",
        message: "What kind of license should your project have (user arrow keys to select",
        name: "license",
        choices: ["MIT", "APACHE", "GPL", "BSD", "None"],
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo",
        name: "contributors",
    }, {
        type: "input",
        message: "What command should be run to run tests",
        name: "tests",
    }, {
        type: "input",
        message: "Questions",
        name: "questions",
    },
])
    .then((answers) => {
        //user response
        fs.writeFile("README.md", "generateMarkdown.js", function (err) {

            if (err) {
                return console.log(err);
            }
        });

    })






// const questions = [
// ProjectTitle: Project Title,
// Description: 
// ];


// function init() {

// }

// init();
