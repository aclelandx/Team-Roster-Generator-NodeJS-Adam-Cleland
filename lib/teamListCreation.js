// importing the fs npm for the functionality of this class. 
const fs = require(`fs`);
// creating a new class that will primarily deal with populating information and generating the html page.
class teamListCreation {
    constructor() {
        this.managerArray = [];
        this.engineerArray = [];
        this.internArray = [];
        this.masterArray = [];
    };

    createPage() {
        let htmlCode = `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title> Generated Team</title>
                <link src='stylesheet.css' type='stylesheet'>
            </head>
            <body>
                <header>
                    <h1>Team Roster Generator</h1>
                </header>
                <main>
                    ${this.insertMembers()}
                </main>
                <footer>
                    <p> The application used to develope this page was created by Adam Cleland.
                </footer>
            </body>
        </html>
        `;
        fs.writeFile(`teamRoster.html`, htmlCode, (err) => {
            !err ? console.log(`File has been created successfully`) : console.error(err);
        }
        )
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
    insertMembers() {
        // this.masterArray.forEach((memberObject) => {
        //     let membersHtmlCode = `
        //     <article>
        //         <header class="${memberObject.role.toLowerCase()}">${memberObject.role}</header>
        //         <p class="textInfo">
        //             ${memberObject.name} <span>ID:${memberObject.id}</span> <br>
        //             Email Address: <a href="mailto: ${memberObject.email}"> ${memberObject.email}</a>
        //         </p>
        //         <footer>
        //             ${this.getAdditionalInfo(memberObject)}
        //         </footer>
        //     </article>
        //     `;
        // })
        // console.log()
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