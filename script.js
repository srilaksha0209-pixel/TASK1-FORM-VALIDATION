const form= document.getElementById("myform");

form.addEventListener("submit",function(e){

    e.preventDefault();
    
    let isValid= true;

    const Name=document.getElementById("Name");
    const Email=document.getElementById("Email");
    const Password=document.getElementById("Password");
    const Confirmpassword=document.getElementById("Confirmpassword");

    document.getElementById("nameError").innerHTML="";
    document.getElementById("emailError").innerHTML="";
    document.getElementById("passwordError").innerHTML="";
    document.getElementById("confirmError").innerHTML="";

if(Name.value.trim()===""){
    document.getElementById("nameError").innerHTML="Name is required";
Name.classList.add("error");
    isValid= false;
}
if(Email.value.trim()===""){
    document.getElementById("emailError").innerHTML="Email is required";
    Email.classList.add("error");
    isValid= false;
}

if(Password.value.trim()===""){
    document.getElementById("passwordError").innerHTML="password is required";
    Password.classList.add("error");
    isValid= false;
}
if(Confirmpassword.value.trim()===""){
    document.getElementById("confirmError").innerHTML="Confirmpassword is required";
    Confirmpassword.classList.add("error");
    isValid = false;
}
if(isValid){
    alert("Form Submitted Successfully");
    form.reset();
    Name.classList.remove("error");
Email.classList.remove("error");
Password.classList.remove("error");
Confirmpassword.classList.remove("error");
    // clearErrors();
}
});
