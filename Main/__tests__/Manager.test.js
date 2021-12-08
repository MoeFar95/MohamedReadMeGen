const Manager = require('../lib/Manager');

// start of Manager Test
describe('Manager test', () => {
    
   it('should set office number using constructor arguments', () => {
       const testOffNum = 210;
       const employee = new Manager('brent', 101, 'brent@mail.com', testOffNum);
       expect(employee.officeNumber).toBe(testOffNum);
   });

 
   describe('getRole', () => {
       it('should use getRole() and return it as Manager', () => {
           const testRole = 'Manager';
           const employee = new Manager('brent', 101, 'brent@mail.com', 210);
           expect(employee.getRole()).toBe(testRole);
       });
   });

   
   describe('getOfficeNumber', () => {
       it('should get office number by using getOfficeNumber()', () => {
           const testOffNum = 210;
           const employee = new Manager('brent', 101, 'brent@mail.com', testOffNum);
           expect(employee.getOfficeNumber()).toBe(testOffNum);
       });
   });
});