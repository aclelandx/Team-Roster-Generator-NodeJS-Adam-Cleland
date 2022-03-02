const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testSchool = "UCLA";
  const t = new Intern("Foo", 1, "test@test.com", testSchool);
  expect(t.school).toBe(testSchool);
});

test("getRole() should return \"Intern\"", () => {
  const internRoleCheck = "Intern";
  const t = new Intern("Foo", 1, "test@test.com", "UCLA");
  expect(t.grabEmployeeRole()).toBe(internRoleCheck);
});

test("Can get school via getSchool()", () => {
  const testSchool = "UCLA";
  const t = new Intern("Foo", 1, "test@test.com", testSchool);
  expect(t.grabSchool()).toBe(testSchool);
});
