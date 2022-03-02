const Engineer = require("../lib/Engineer");

test("Able to pass github username through the constructor", () => {
  const githubUserTest = "aclelandx";
  const t = new Engineer("Foo", 1, "test@gmail.com", githubUserTest);
  expect(t.github).toBe(githubUserTest);
});

test("able to grab the role for the Engineer class", () => {
  const engineerRoleCheck = "Engineer";
  const t = new Engineer("Foo", 1, "test@gmail.com", "aclelandx");
  expect(t.grabEmployeeRole()).toBe(engineerRoleCheck);
});

test("Can get GitHub username via getGithub()", () => {
  const githubUserTest = "aclelandx";
  const t = new Engineer("Foo", 1, "test@gmail.com", githubUserTest);
  expect(t.grabGithub()).toBe(githubUserTest);
});
