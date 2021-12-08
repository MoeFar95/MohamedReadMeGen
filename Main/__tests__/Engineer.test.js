const Engineer = require('../lib/Engineer');

// start of Engineer Test
describe('Engineer test', () => {
    
   it('should set GitHub username account using constructor arguments', () => {
       const testUserName = "GitHubUser";
       const employee = new Engineer('gabriel', 101, 'gabriel@mail.com', testUserName);
       expect(employee.github).toBe(testUserName);
   });

   
   describe('getRole', () => {
       it('should use getRole() and return it as Engineer', () => {
           const testRole = 'Engineer';
           const employee = new Engineer('gabriel', 101, 'gabriel@mail.com', 'GitHubUser');
           expect(employee.getRole()).toBe(testRole);
       });
   });

   describe('getGitHub', () => {
       it('should get GitHub username using getGitHub()', () => {
           const testUserName = 'GitHubUser';
           const employee = new Engineer('gabriel', 101, 'gabriel@mail.com', testUserName);
           expect(employee.getGithub()).toBe(testUserName);
       });
   });
});