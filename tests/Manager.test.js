const Manager = require("../lib/Manager");

test("Able to set the office number from the constructor", () => {
  const officeNumberTest = 100;
  const t = new Manager("Cleland", 1, "test@gmail.com", officeNumberTest);
  expect(t.officeNumber).toBe(officeNumberTest);
});

test("Able to get the role from the grabEmployeeRole method", () => {
  const managerRoleCheck = "Manager";
  const t = new Manager("Cleland", 1, "test@gmail.com", 100);
  expect(t.grabEmployeeRole()).toBe(managerRoleCheck);
});

test("Able to grab the office number from the grabOfficeNumber method", () => {
  const officeNumberTest = 100;
  const t = new Manager("Cleland", 1, "test@gmail.com", officeNumberTest);
  expect(t.grabOfficeNumber()).toBe(officeNumberTest);
});
