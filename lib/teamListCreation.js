const fs = require(`fs`);

class teamListCreation {
    constructor() {
        this.managerArray = [];
        this.engineerArray = [];
        this.internArray = [];
        this.masterArray = [];
    };
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
    };
    insertMembers() {
        this.masterArray = [...this.managerArray, ...this.engineerArray, ...this.internArray];
        this.managerArray.forEach((memberObject) => {
            const $member = document.createElement(`article`);
            $member.setAttribute(`id`, `${memberObject.id.trim()}`);
            $member.setAttribute(`class`, `${memberObject.role.toLowerCase()}Card`);
            $member.innerHTML =
                `<header class="${memberObject.role.toLowerCase()}">${memberObject.role}</header>
                <p class="textInfo">
                    ${memberObject.name} <span>ID:${memberObject.id}</span> <br>
                    Email Address: <a href="mailto: ${memberObject.email}"> ${memberObject.email}</a>
                </p>`;
            this.getAdditionalInfo(memberObject, $member);
        })
    };
    getAdditionalInfo(memberObject, memberCard) {
        const additionalInfo = document.createElement(`footer`);
        switch (memberObject.role) {
            case `Manager`:
                additionalInfo.innerHTML = `<p>Office Number : ${memberObject.officeNumber}</p>`;
                memberCard.appendChild(additionalInfo);
                break;
            case `Engineer`:
                additionalInfo.innerHTML = `<p>GitHub UserName : <a href="https://github.com/${memberObject.github}">${memberObject.github}</a></p>`;
                memberCard.appendChild(additionalInfo);
                break;
            case `Intern`:
                additionalInfo.innerHTML = `<p>School : ${memberObject.school}</p>`;
                memberCard.appendChild(additionalInfo);
                break;
            default: console.error(`The role could not be read properly`);
        };
    };
}

module.exports = teamListCreation;