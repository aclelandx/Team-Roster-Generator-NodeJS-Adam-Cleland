class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, `Manager`);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        inquirer.prompt([
            {
                type: `input`,
                message: `What is the Office number for this Manager?`,
                name: `managersOfficeNumber`,
            }
        ]).then((userInput) => {
            this.officeNumber = userInput.managersOfficeNumber;
            employeeArray.push(this);
            console.log(employeeArray);
            makePage();
        })
    }
}
