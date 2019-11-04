const password = require('../src/password.js');
describe("Password checker",function(){
   // let psw = "KillJ0!!2";
    it("Should Check if password exists",()=>{
        expect(password.passwordIsValid()).toBe();
    });
});

describe("Password verify",function(){
    //let psw = "KillJ0!!2";
    it("Should Check if password is OK",()=>{
        expect(password.passwordIsOk()).toBe(true);
    });
});

describe("Password Never ok",function(){
    //  let psw = "KillJ0!!2";
      it("Should Check if password meets condition 1 & 2",()=>{
          expect(password.passwordIsNeverOk()).toBe();
      });
  });

