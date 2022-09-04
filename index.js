let checker =document.querySelector('#sign_in_checker');
let isactive = document.querySelector('#sign_in');
let reg =/[A-Z]/;
let reg1 =/[a-z]/;
checker.onclick=function(){
    if (!isactive.checked) {
        checker.innerHTML='&#10799;';
    } else {
        checker.innerHTML='Sign In';
    }
}

function validateForm(e){
  let password= document.querySelector('#password').value;
  if (!(reg.test(password) && reg1.test(password))){
    e.preventDefault();
    alert("password must contain at least one uppercase letter and one lowercase letter");
    return false;
  }
  else if(password.length<=8)
  { 
    e.preventDefault();
    alert("password must be at least 8 characters");
    return false;
  } else if(password.length=='' || password.length==null){
    e.preventDefault();
    alert("entry password");
    return false;
  }
  alert("validations passed");
  return true;
};

function inputcontroller() {
  let password= document.querySelector('#password');
  if(
    password.value.length<=8 || 
    password.value.length=='' || 
    password.value.length==null ||
    !(reg.test(password.value) && reg1.test(password.value))
    )
  { 
    password.style.boxShadow="0px 0px 5px red";
  }
  else{
    password.style.boxShadow="0px 0px 5px green";
  }
}