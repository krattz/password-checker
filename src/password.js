var psw= 'K1llJ0y@2';

function passwordIsValid(){
    
    try{
        if (psw == ''){
            throw("password should exist");
        }
    }
    catch (e){
        console.log("error "+ e);
        
    }
   
    try{
        if (psw.length <8){
            throw("password should be longer than 8 characters");
        }
    }
    catch(e){
        console.log("error "+ e);    
    }

    try {
        const regexp = /[a-z]/;
        if (regexp.test(psw)!=true){
            throw("password should have at least one lowercase letter");
        }
    }
    catch(e){
        console.log("error "+e);    
    }

    try {
        const regexp1 = /[A-Z]/;
        if (regexp1.test(psw)!=true){
            throw("password should have at least one uppercase letter");
        }
    }
    catch(e){
        console.log("error "+e);
    }

    try {
        const regexp2 = /[0-9]/;
        if (regexp2.test(psw)!=true){
            throw("password should at least have one digit");
        }
    }
    catch(e){
        console.log("error "+e);    
    }

    try {
        const regexp3 = /g*[ \ ^ $ . ! @ % & | ? * + { } ( ) + = - _  ; :]/;
        if (regexp3.test(psw)!=true){
            throw("password should have at least one special character");
        }
    }
    catch(e){
        console.log("error "+e);
    }
}

function passwordIsOk(){
    const regexp1 = /[A-Z]/;
    let msg = '';
if ((psw != '' )&&(psw.length >=8 )&&(regexp1.test(psw)==true)){
        msg = true;
}
else{
    msg = false;
}
return msg;
}

function passwordIsNeverOk(){
    try{
    if ((psw == '' )||(psw.length <8 )){
            throw("Password is Not okay");
        }

    }
    catch(e){
        console.log(" error "+e);
    }
}

 //Console.log("KillJ0!!2");
module.exports = {
    passwordIsValid,
    passwordIsNeverOk,
    passwordIsOk
}
