function validate(){
    var name=/^[0-9]+$/;
    var phone=/[6-9][0-9]{9}/;
    var email=/[a-z A-Z 0-9 \.-_]+[@][a-z A-Z 0-9 _-]+[\.][a-z]{2,5}/;
    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML="enter username*";
        return false;
    }
    else if(document.Formfill.Username.value.length<6){
        document.getElementById("result").innerHTML=" username atleast six letters";
        return false;
    }
    else if(document.Formfill.Username.value.length>20){
        document.getElementById("result").innerText="should contain less than 20 character";
    }
    else if(document.Formfill.Username.value.match(name)){
        document.getElementById("result").innerText="username has only alphabets";
        return false;
    }
    else if(document.Formfill.Email.value==""){
            document.getElementById("result").innerHTML="enter your email";
            return false;
    }
    else if(!document.Formfill.Email.value.match(email)){
        document.getElementById("result").innerHTML="enter your email";
        return false;
}
    else if(document.Formfill.Phone.value==""){
            document.getElementById("result").innerHTML="enter your mobile number";
            return false;
    }
    else if(document.Formfill.Phone.value.length<10){
            document.getElementById("result").innerHTML="phone number must be 10 digits";
            return false;
    }
    else if(document.Formfill.Phone.value.length>10){
        document.getElementById("result").innerHTML="phone number must be 10 digits";
        return false;
}
    else if(!document.Formfill.Phone.value.match(phone)){
        document.getElementById("result").innerHTML="enter correct number";
        return false;
}
    else if(document.Formfill.People.value==""){
        document.getElementById("result").innerHTML=" enter people number";
        return false;
    }
    else if(document.Formfill.People.value=="/!([0-9])/"){
        document.getElementById("result").innerHTML=" people must be number";
        return false;
    }
    else if(document.Formfill.Textarea.value==""){
        document.getElementById("result").innerHTML="enter event name";
            return false;
    }
    else if(document.Formfill.Textarea.value.length<4){
        document.getElementById("result").innerHTML=" event name atleast 4 letters";
        return false;
    }
    else if(document.Formfill.Textarea.value.length>30){
        document.getElementById("result").innerText="event name should contain less than 30 character";
    }
    else if(document.Formfill.Textarea.value.match(name)){
        document.getElementById("result").innerText=" event name only alphabets";
        return false;
    }

    

}
// var popup=document.getElementById('popup');
// function closeslide(){
//     popup.classList.remove('open-slide');
//}