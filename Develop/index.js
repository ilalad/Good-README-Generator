const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");

//array of questions
function promptUser() {
    return inquirer
        .prompt([

            {
                type: "input",
                message: "What is the project name",
                name: "Title",
            },

            {
                type: "input",
                message: "Write a description of your project",
                name: "Description",
            },

            {
                type: "input",
                message: "What command should be run to install dependencies",
                name: "Installation",
            },
            {
                type: "input",
                message: "What does the user need to know about using the repo",
                name: "Usage",
            },
            {
                type: "list",
                message: "What kind of license should your project have (user arrow keys to select",
                name: "License",
                choices: ["MIT", "APACHE", "GPL", "BSD", "None"],
            },
            {
                type: "input",
                message: "What does the user need to know about contributing to the repo",
                name: "Contribution",
            }, {
                type: "input",
                message: "What command should be run to run tests",
                name: "Tests",
            }, {
                type: "input",
                message: "Questions",
                name: "Questions",
            },

        ]);
}

promptUser()
    .then((answers) => {
        //user response
        fs.writeFile("README.md", generateMarkdown, (err) => {
            if (err) throw err;
            console.log(err);
            console.log("Successfully generated README.md")
        });
    });



// function init() {

// }

// init();
