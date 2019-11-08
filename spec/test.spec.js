const password = require('../src/password.js');

let psw = 'KillJ0!!2';
let validate = password.passwordIsValid(psw);

describe("Password checker",function(){
    
    it("Should Check if password exists",()=>{
        expect(validate).not.toBeNull();
    });
    it("Should check password length is not less than 8 characters", () => {
        expect(psw.length).toBeGreaterThan(7);
    });
    it("Should check if password has atleast 1 lowercase letter", () => {
        expect(validate).toMatch(/^(?=.*[a-z])/);
    });
    it("Should check if password has atleast 1 capital letter", () => {
        expect(psw).toMatch(/^(?=.*[A-Z])/);
    });
    it("Should check if password has atleast 1 number", () => {
        expect(psw).toMatch(/^(?=.*\d)/);
    });
    it("Should check password for atleast 1 special character",()=>{
        expect(password.passwordIsOk(psw)).toMatch(/[ \ ^ $ . ! @ % & | ? * + { } ( ) + = - _  ; :]/g);
    });
});

describe("Password verify",function(){
    
    it("Should Check if password is OK",()=>{
        expect(password.passwordIsOk(psw)).toBe('Password is okay');
    });
});

describe("Password Never ok",function(){
    
      it("Should Check if password meets condition 1 & 2",()=>{
          expect(password.passwordIsNeverOk(password)).toBe('Password is valid');
      });
  });

