// importing the fs npm for the functionality of this class. 
const { Console } = require("console");
const fs = require(`fs`);
// importing a custom made CSS theme that will be generated along with the new roster.
const cssTheme = require(`./darkCssTheme`);
// creating a new class that will primarily deal with populating information and generating the html page.
class teamListCreation {
    constructor() {
        this.managerArray = [];
        this.engineerArray = [];
        this.internArray = [];
        this.masterArray = [];
    };
    // Created the skeleton for the html page along with running the function that will go through the array of provided information to create the webpage.
    async createPage() {
        let htmlCode = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> Generated Team</title>
        <link rel="stylesheet" href="./stylesheet.css">
    </head>
    <body>
        <header>
            <h1>Team Roster Generator</h1>
        </header>
        <main>
            ${this.insertMembers()}
        </main>
        <footer>
            <p> 
            The application used to generate this page was created by Adam Cleland.<br>
            <a href="http://github.com/aclelandx"> MY GITHUB </a>
            </p>
        </footer>
    </body>
</html>
`;      // Uses the node file system to create an html file using the information above as its content.
        fs.writeFile(`./generatedFiles/teamRoster.html`, htmlCode, (err) => {
            !err ? console.log(`HTML file has been created successfully`) : console.error(err);
        });

        fs.writeFile(`./generatedFiles/stylesheet.css`, cssTheme, (err) => {
            !err ? console.log(`CSS file has been created successfully`) : console.error(err);
        });

        console.log(`Thank you for using my application! \n you can find your new files inside the "generatedFiles" Folder.`)
    }

    addTeamMember(memberObject) {
        switch (memberObject.role) {
            case `Manager`:
                this.managerArray.push(memberObject);
                break;
            case `Engineer`:
                this.engineerArray.push(memberObject);
                break;
            case `Intern`:
                this.internArray.push(memberObject);
                break;
            default: console.error(`Something went wrong with adding the new team member.`)
        }
        // takes the master array and sets the order to managers first, engineers second, and interns third. 
        this.masterArray = [...this.managerArray, ...this.engineerArray, ...this.internArray]
    };
    // function for converting the objects information into an html format so it can be displayed on the screen
    insertMembers() {
        // an array that will have the newly converted values pushed into it so it may be returned for use.
        let htmlArr = [];
        // converts the objects information to html format.
        this.masterArray.forEach((memberObject) => {
            let convertedInformation = `
            <article id="${memberObject.id}" class="${memberObject.role.toLowerCase()}">
                <header class="${memberObject.role.toLowerCase()}">
                <p class="headerText">${memberObject.role}</p>
                <span>ID:${memberObject.id}</span>
                </header>
                <p class="textInfo">
                    <span>${memberObject.name}</span> <br>
                    Email Address: <br><a href="mailto:${memberObject.email}"> ${memberObject.email}</a>
                </p>
                <footer>
                    ${this.getAdditionalInfo(memberObject)}
                </footer>
            </article>
            `;
            // adds the converted information into the htmlArr array
            htmlArr.push(convertedInformation)
            // returns the htmlArr and removes the indexing so it is output as one cohesive string in html format.
        }); return htmlArr.join(``);
    };
    // method that uses a switch case to provide the proper additional information depending on the role of the employee.
    getAdditionalInfo(memberObject) {
        let additionalInfo = ``;
        switch (memberObject.role) {
            case `Manager`:
                additionalInfo = `<p>Office Number : ${memberObject.officeNumber}</p>`;
                break;
            case `Engineer`:
                additionalInfo = `<p>GitHub UserName : <a href="https://github.com/${memberObject.github}">${memberObject.github}</a></p>`;
                break;
            case `Intern`:
                additionalInfo = `<p>School : ${memberObject.school}</p>`;
                break;
            default: console.error(`The role could not be read properly`);
        };
        return additionalInfo;
    };

}

module.exports = teamListCreation;