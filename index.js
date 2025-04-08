let names = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#form");
form.addEventListener("submit",(e)=>{
   if(names.value==""||email.value==""||password.value==""){
     e.preventDefault();
     alert("Please!Fill all fields before submission.")
    document.getElementById("warning").innerHTML="Please, All input fileds are required before submission.😒"
   }
})