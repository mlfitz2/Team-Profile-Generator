const Manager = require("../lib/Manager");


test("Office number can be set correctly", () => {
    const testOfficeNumber = 10;
    const testManager = new Manager('Bob', 1, 'test@email.com', testOfficeNumber);
    expect(testManager.officeNumber).toBe(testOfficeNumber);
});

test("Role should be Manager", () => {
    const testRole = 'Manager';
    const testManager = new Manager('Bob', 1, 'test@email.com', 10);
    expect(testManager.getRole()).toBe(testRole);
});

