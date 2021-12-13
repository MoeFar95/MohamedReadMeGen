const Employee = require('../lib/Employee');
 
describe('Employee Test', () => {
   it('should instantiate the Employee instance', () => {
       const employee = new Employee();
       expect(typeof(employee)).toBe('object');
   });

   it('should set name of employee using constructor arguments', () => {
       const name = 'moe';
       const employee = new Employee(name);
       expect(employee.name).toBe(name);
   });
   
   it('should set the ID of the employee using constructor arguments', () => {
       const testId = 101;
       const employee = new Employee('moe', testId);
       expect(employee.id).toBe(testId);
   });

   it('should set email of employee using constructor arguments', () => {
       const testEmail = 'moe@mail.com';
       const employee = new Employee('moe', 101, testEmail);
       expect(employee.email).toBe(testEmail);
   });
})
   describe('getName', () => {
       it('should get name using getName()', () => {
           const testName = 'moe';
           const employee = new Employee(testName);
           expect(employee.getName()).toBe(testName);
       });
   });

   describe('getId', () => {
       it('should get ID using getID()', () => {
           const testId = 101;
           const employee = new Employee('moe', testId);
           expect(employee.getId()).toBe(testId);
       });
   });

   describe('getEmail', () => {
       it('should get email using getEmail()', () => {
           const testEmail = 'moe@mail.com';
           const employee = new Employee('moe', 101, testEmail);
           expect(employee.getEmail()).toBe(testEmail);
       });
   });
    
   describe('getRole', () => {
       it('should get role using getRole() and return type of Employee', () => {
           const testRole = 'Employee';
           const employee = new Employee('moe', 101, 'test@email.com');
           expect(employee.getRole()).toBe(testRole);
       });
    });