const Engineer = require("../lib/Engineer");

test('GitHub account sets correctly', () => {
    const testGithub = 'github';
    const testEngineer = new Engineer('Bob', 2, 'test@email.com', testGithub);
    expect(testEngineer.github).toBe(testGithub);
});

test('Role should be Engineer', () => {
    const testRole = 'Engineer';
    const testEngineer = new Engineer('Bob', 2, 'test@email.com', 'TestGitHub');
    expect(testEngineer.getRole()).toBe(testRole);
});