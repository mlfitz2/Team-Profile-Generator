const Intern = require("../lib/Intern");

test('School is set correctly', () => {
    const testSchool = 'UW';
    const testIntern = new Intern('Bob', 1, 'test@email.com', testSchool);
    expect(testIntern.school).toBe(testSchool);
});

test('Role should be Intern', () => {
    const testRole = 'Intern';
    const testIntern = new Intern('Bob', 1, 'test@email.com', 10);
    expect(testIntern.getRole()).toBe(testRole);
});