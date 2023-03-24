// TODO: Include packages needed for this application

const inquirer = require("inquirer");
let fs = require('fs')
let util = require('util')
// const generMarkdown = require('./utils/generateMarkdown')

let writeFileAsync = util.promisify(fs.writeFile)

// TODO: Create an array of questions for user input
function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Tell users how to install app',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How is this app used?',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Which lisence are you using for this project?',
            choices: ['MIT', 'ISC', 'Apache', 'GNU GPLv3']
        },
        {
            type: 'input',
            message: 'How do others contribute to this project?',
            name: 'contributing'
        },
        {
            type: 'input',
            message: 'Whose credit is this work?',
            name: 'credits'
        },
        {
            type: 'input',
            message: 'Test instructions',
            name: 'test'
        },
        {
            type: 'input',
            message: 'What is your github username?',
            name: 'username'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        },
    ])

}


// TODO: Create a function to write README file
function createMarkDown(response) { 
    return`
    # ${response.title}

    # Table of Contents 

    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Test](#test)
    - [Credits](#credits)
    - [License](#license)
    - [Questions](#questions)

    ## Decription 
    ${response.description}
    ![License](https://img.shields.io/badge/License-${response.license}-blue.svg)

    ## Installation
    ${response.installation}

    ## Usage 
    ${response.usage}

    ## Contributing 
    ${response.contributing}

    ## Test
    ${response.test}

    ## Credits 
    ${response.credits}

    ## License 
    ${response.license}
    
    ## Questions 
    If you have any questions about this generator visit my GitHub page found by the link below 

    - [GitHub](https://github.com/${response.username})
    
    If you have any other questions you can reach me by email at 
    ${response.email}
    `
}

// TODO: Create a function to initialize app
async function init() {
    try {
        const response = await promptUser()
        const readMe = createMarkDown(response)

        await writeFileAsync('README.md', readMe)
        console.log ('Success!')
    } catch (err){
        console.log ('there was an error!', err)
    }
}

init()



// function init() {
//     inquirer
//         .prompt(questions)
//         .then((answers) => {
//             console.log(answers)
//             console.log(answers.anyWord)
//             console.log(answers.listItem)
//             console.log(project)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// }

// Function call to initialize app

