// imports the Employee Class from the /lib folder.

const Employee = require("../lib/Employee");

test("Able to create a new Employee instance", () => {
  const t = new Employee();
  expect(typeof (t)).toBe("object");
});

test("Able to assign the name through constructor F", () => {
  const testName = "Cleland";
  const t = new Employee(testName);
  expect(t.name).toBe(testName);
});

test("Able to assign the id through constructor F", () => {
  const testValue = 100;
  const t = new Employee("Cleland", testValue);
  expect(t.id).toBe(testValue);
});

test("Able to assign the email through constructor F", () => {
  const testEmail = "test@gmail.com";
  const t = new Employee("Cleland", 1, testEmail);
  expect(t.email).toBe(testEmail);
});

test("Can access information from grabEmployeeName()", () => {
  const testName = "Cleland";
  const t = new Employee(testName);
  expect(t.grabEmployeeName()).toBe(testName);
});

test("Can access information from grabEmployeeId()", () => {
  const testId = 100;
  const t = new Employee("Cleland", testId);
  expect(t.grabEmployeeId()).toBe(testId);
});

test("Can access information from grabEmployeeEmail()", () => {
  const testEmail = "test@gmail.com";
  const t = new Employee("Cleland", 1, testEmail);
  expect(t.grabEmployeeEmail()).toBe(testEmail);
});

test(" The default role \"Employee\"", () => {
  const roleCheck = "Employee";
  const t = new Employee("Cleland", 1, "test@gmail.com");
  expect(t.grabEmployeeRole()).toBe(roleCheck);
});
