console.log("this is travel desktop")

// plan  when we call a blur event means that after click on box of name after that jab ham bahar click karenge tab blur event fire ho jayega then we call validate event

const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phonenumber");
let validEmail = false;
let validPhone = false;
let validUser = false;
// console.log(username ,email ,phone)

username.addEventListener("blur" , ()=>{
    console.log("blur")

    let regex = /^[a-zA-Z]([a-z A-Z]){3,10}/
    let str = username.value;
    // console.log(regex.exec(str))
    console.log(regex , str)
    if(regex.test(str)){
        console.log("your name is valid");
        username.classList.remove('is-invalid');
        validUser = true;
        
    }
    else{
        console.log("Your name is not valid");
        username.classList.add('is-invalid');
        validUser = false;
    }
})
email.addEventListener("blur" , ()=>{
    console.log("E-mail blur")

    let regex = /^([0-9 a-z A-Z]+)@([_\-\.0-9 a-z A-Z]+)\.([a-zA-Z])/;
    let str = email.value;
    // console.log(regex.exec(str))
    console.log(regex , str)
    if(regex.test(str)){
        console.log("your e mail  is valid");
        email.classList.remove('is-invalid');
        validEmail = true;
        
    }
    else{
        console.log("Your e mail  is not valid");
        email.classList.add('is-invalid');
        validEmail = false;
    }
})
phone.addEventListener("blur" , ()=>{
    console.log("phone blur")

    let regex = /([0-9]){10}/;
    let str = phone.value;
    // console.log(regex.exec(str))
    console.log(regex , str)
    if(regex.test(str)){
        console.log("your phone number is valid");
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else{
        console.log("Your phone number is not valid");
        phone.classList.add('is-invalid');
        validPhone = false;
    }
})

let submit = document.getElementById("submit");
submit.addEventListener("click", (e)=>{
    console.log("clicked submit")

    // submit your data 
    // console.log(validEmail , validPhone , validUser)
    
    
    if(validEmail == true&&  validPhone==true && validUser == true){
        console.log("phone user email is valid Submitting the form")
        fail.classList.remove("show");
        fail.classList.add("displayInDom");
        let success = document.getElementById("success");
        success.classList.remove("displayInDom")
        success.classList.add("show");

    }
    else{
        console.log("one out of phone , user , email doesnot matches the required specifiction try again")
        success.classList.remove("show")
        success.classList.add("displayInDom");
        let fail  = document.getElementById("fail");
        fail.classList.remove("displayInDom");
        fail.classList.add("show");
    }
    e.preventDefault();


})