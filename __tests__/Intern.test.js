const Intern = require('../lib/Intern');

// start of Intern Test
describe('Intern test', () => {
    
   it('should set school name using constructor arguments', () => {
       const testSchool = 'UTSA';
       const employee = new Intern('kara', 101, 'kara@mail.com', testSchool);
       expect(employee.school).toBe(testSchool);
   });

    
   describe('getRole', () => {
       it('should use getRole() and return it as Intern', () => {
           const testRole = 'Intern';
           const employee = new Intern('kara', 101, 'kara@mail.com', 'UTSA');
           expect(employee.getRole()).toBe(testRole);
       });
   });

   describe('getSchool', () => {
       it('should get school name using getSchool()', () => {
           const testSchool = 'UTSA'
           const employee = new Intern('kara', 101, 'kara@mail.com', testSchool);
           expect(employee.getSchool()).toBe(testSchool);
       });
   });
});