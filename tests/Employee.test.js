const Employee = require("../lib/Employee");

test('Can set name correctly', () => {
    const testName = 'Bob';
    const testEmployee = new Employee('Bob', 1, 'test@email.com');
    expect(testEmployee.name).toBe(testName);
});

test('Can set ID correctly', () => {
    const testId = 1;
    const testEmployee = new Employee('Bob', testId, 'test@email.com');
    expect(testEmployee.id).toBe(testId);
});

test('Can set email correctly', () => {
    const testEmail = 'test@email.com';
    const testEmployee = new Employee('Bob', 1, testEmail);
    expect(testEmployee.email).toBe(testEmail);
});