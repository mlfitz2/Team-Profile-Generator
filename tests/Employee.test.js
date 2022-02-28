const Manager = require("../lib/Manager");


const manager = new Manager('Mike','mike@gmail.com','','');
test('adds 1 + 2 to equal 3', () => {
    expect(manager.getName()).toBe('Mike');
  });
  