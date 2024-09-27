const formEl = document.getElementById("formEl");
const fullname_input = document.getElementById("fullName-input");
const email_input = document.getElementById("email-input");
const password_input = document.getElementById("password-input");
const confirm_password_input = document.getElementById("confirm_password-input");
let errors = [];

formEl.addEventListener("submit", (e) => {
   
    
    console.log("hello");

    if (fullname_input) {   //to signup page
        console.log("hello1");

        getSignupError(fullname_input.value, email_input.value, password_input.value, confirm_password_input.value);

        const username=localStorage.setItem("username",email_input.value);
        const password=localStorage.setItem("password",password_input.value);
        alert("signup successfully");
    }
    else {
         // to login page
        getLoginErrors(email_input.value, password_input.value);
        
        
  

    }
    console.log(errors.length);
    let count = errors.length;
    if (count > 0) {
        console.log("entered load")
        console.log(errors);
        e.preventDefault();

    }







});

function getSignupError(fullname, email, password, confirm_password) {

    if (fullname == "" || fullname == null) {
        errors.push("Enter the name");
        fullname_input.parentElement.classList.add("incorrect");
    }
    if (email === "" || email == null) {
        errors.push("Enter the email");

        email_input.parentElement.classList.add("incorrect");
    }
    if (password === "" || password == null) {
        errors.push("Enter the password");

        password_input.parentElement.classList.add("incorrect");

    }
    // if (password.length<8) {
    //     errors.push("Ensure password must contain atleast 8 characters");

    //     password_input.parentElement.classList.add("incorrect");

    // }

    if (confirm_password !== password) {
        errors.push("Enter the password correct as above");
       
        confirm_password_input.parentElement.classList.add("incorrect");
    }

    if (password_input.value.length < 8) {
        errors.push("Ensure password must contain atleast 8 characters");
        console.log(errors)

        password_input.parentElement.classList.add("incorrect");
    }




}


function getLoginErrors(email, password) {
    console.log("hello loginin");
    if (email === "" || email == null) {
        errors.push("Enter the email");

        email_input.parentElement.classList.add("incorrect");
    }
    if (password === "" || password == null) {
        errors.push("Enter the password");

        password_input.parentElement.classList.add("incorrect");

    }

    //////
    const usernameSaved=localStorage.getItem("username");
        const passwordSaved=localStorage.getItem("password");
        if(email_input.value===usernameSaved && password_input.value===passwordSaved){
            window.location.href="quix.html";
            console.log("login succes")
            
            alert("login successfully");
            
            email_input.value="";
            password_input.value="";
            
           
           
        }
        else if(email_input.value!==usernameSaved){
            console.log("email id wrong")
            errors.push("Enter the correct email");
            console.log(errors.length);
            

        email_input.parentElement.classList.add("incorrect");
        }
        else{
            console.log("password wrong")
            errors.push("Enter the correct password");
            console.log(errors.length);

        password_input.parentElement.classList.add("incorrect");

        }
    
       


}
const inputs = [fullname_input, email_input, password_input, confirm_password_input].filter(input => input != null);

inputs.forEach((input) => {
    input.addEventListener("click", () => {

        

        if (input.parentElement.classList.contains("incorrect")) {
            input.parentElement.classList.remove("incorrect")
            errors.length=0
        }
        


    })
});




