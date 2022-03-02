const Intern = require("../lib/Intern");

test("Able to set School from the Constructor", () => {
  const testSchool = "OSU Coding Boot Camp";
  const t = new Intern("Cleland", 1, "test@gmail.com", testSchool);
  expect(t.school).toBe(testSchool);
});

test("Able to get the role from the grabEmployeeRole method", () => {
  const internRoleCheck = "Intern";
  const t = new Intern("Cleland", 1, "test@gmail.com", "OSU Coding Boot Camp");
  expect(t.grabEmployeeRole()).toBe(internRoleCheck);
});

test("Able to get the school from the grabSchool method", () => {
  const testSchool = "OSU Coding Boot Camp";
  const t = new Intern("Cleland", 1, "test@gmail.com", testSchool);
  expect(t.grabSchool()).toBe(testSchool);
});
