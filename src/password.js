var password= 'K1llJ0y@2';

function passwordIsValid(password){
    var count = 0;
    var respond = "";
    try{
        if (password == ''){
            throw("password should exist");
        } else count++;
    }
    catch (e){
        console.log("error "+ e);     
    }
   
    try{
        if (password.length <8){
            throw("password should be longer than 8 characters");
        }else count++;
    } catch(e){
        console.log("error "+ e);    
    }

    try {
        const regexp = /[a-z]/;
        if (regexp.test(password)!== true){
            throw("password should have at least one lowercase letter");
        }else count++;
    }
    catch(e){
        console.log("error "+e);    
    }

    try {
        const regexp1 = /[A-Z]/g;
        if (password.match(regexp1) == null){
            throw("password should have at least one uppercase letter");
        }else count++;
    }
    catch(e){
        console.log("error "+e);
    }

    try {
        const regexp2 = /^(?=.*\d)/g;
        if (password.match(regexp2) == null){
            throw("password should at least have one digit");
        }else count++;
    }
    catch(e){
        console.log("error "+e);    
    }

    try {
        const regexp3 = /g*[ \ ^ $ . ! @ % & | ? * + { } ( ) + = - _  ; :]/;
        if (password.match(regexp3) == null){
            throw("password should have at least one special character");
        }else {
            count++;   
        }
    }
    catch(e){
        console.log("error "+e);
    }

    if(count >5){
        respond= console.log("Password is valid");
    }else if(count <5) {
        respond = console.log("Password not valid");
    }
}


function passwordIsOk(password){
    const regexp1 = /[A-Z]/;
    let msg = '';
if ((password != '' )&&(regexp1.test(password)==true)){
        msg = "Password is okay";
}
else{
    msg = "Password is Not okay";
}
return msg;
}

function passwordIsNeverOk(password){
    try{
    if ((password == '' )||(password.length <8 )){
            throw("Password is Not okay");
        }else return "Password is valid";

    }
    catch(e){
        console.log(" error "+e);
    }
}
console.log(passwordIsValid(password));
console.log(passwordIsOk(password));
console.log(passwordIsNeverOk(password));
module.exports = {
    passwordIsValid,
    passwordIsOk,
    passwordIsNeverOk
}
