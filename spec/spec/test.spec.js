const password = require('../password');
describe("Password checker",function(){
    let psw = "KillJ0!!2";
    it("Should Check if password exists",()=>{
        expect(password.passwordIsValid(psw)).toBe();
    });
});

describe("Password verify",function(){
    let psw = "KillJ0!!2";
    it("Should Check if password is OK",()=>{
        expect(password.passwordIsOk(psw)).toBe();
    });
});
