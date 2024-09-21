let email = document.querySelector("[name='email']");
let submit = document.querySelector("[name='submit']");
let emailError = document.querySelector(".emailError");

submit.onclick = function(e) {
    let emailValid = true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    emailError.innerHTML = "";
    email.style.borderColor = "";
    
    if(email.value === ""){
        emailValid = false;
        emailError.innerHTML = "Please provide a valid email address";
    }

    else if(!emailPattern.test(email.value)){
        emailValid = false;
        emailError.innerHTML = "Please provide a valid email address";
    }

    if(!emailValid){
        e.preventDefault();
        email.style.borderColor = "hsl(354, 100%, 66%)";
        emailError.innerHTML = "Please provide a valid email address";
    }
}

email.addEventListener("input", function(){
    emailError.innerHTML = "";
    email.style.borderColor = "";
})
