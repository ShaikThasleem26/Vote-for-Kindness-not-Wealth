function validate(){
    var email=/[a-z A-Z 0-9 \.-_]+[@][a-z A-Z 0-9 _-]+[\.][a-z]{2,5}/;
    var pwd1=/[a-z]/;
    var pwd2=/[A-Z]/;
    var pwd3=/[@#&-]/;
    var pwd4 =/[0-9]/;
    if(document.Formfill.Email.value==""){
        document.getElementById("result").innerHTML="enter your email";
        return false;
    }    
    else if(!document.Formfill.Email.value.match(email)){
        document.getElementById("result").innerHTML="enter your email";
        return false;
    }
    else if(document.FormFill.Password.value==""){
        document.getElementById("result").innerHTML="Enter password";
        return false;
    }
    else if(document.FormFill.Password.value.length<8){
        document.getElementById("result").innerHTML="Password should contain atleast 8 characters";
    }
    else if(!document.FormFill.Password.value.match(pwd1)){
        document.getElementById("result").innerHTML="Password must contain one lowercase";
    }
    else if(!document.FormFill.Password.value.match(pwd2)){
        document.getElementById("result").innerHTML="Password must contain one Uppercase";
    }
    else if(!document.FormFill.Password.value.match(pwd3)){
        document.getElementById("result").innerHTML="Password must contain one Special character";
    }
    else if(!document.FormFill.Password.value.match(pwd4)){
        document.getElementById("result").innerHTML="Password must contain one digit";
    }
}