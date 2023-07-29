const errorContainer=document.getElementById("error-container");
const form=document.getElementById('formInput');

const nameInput=document.getElementById("userName");
const email=document.getElementById("userEmail");
const password=document.getElementById("userPassword");
const cnfPassword=document.getElementById("userCnfPassword");
const signUp=document.getElementById("signUpBtn");


signUp.addEventListener('click',(e)=>{
    e.preventDefault();

    errorContainer.innerHTML=' ';

    if(nameInput.value.trim()===''||
       email.value.trim()===''||
       password.value.trim()===''||
       cnfPassword.value.trim()===''
    ){
        const p=document.createElement('p');
        p.innerText="Error: All fields are mandatory!";
        p.setAttribute('id','fieldLog');
        p.style.color="red";

        errorContainer.appendChild(p);
    }else{
        if(password.value.trim()!==cnfPassword.value.trim()){
            const p=document.createElement('p');
            p.setAttribute('id','errorLog');
            p.innerText="Password mismatch!!!!!";
            p.style.color="red";

            errorContainer.appendChild(p);
        }else{
            if(ValidateEmail(email.value)){
                var token = generateToken(16);
                saveUser(nameInput.value,email.value,password.value,token);
            }
        }
    }
});

function saveUser(name,email,password,token){
    let userData={
        nameInput:name,
        emailInput:email,
        passwordInput:password,
        token:token
    }

    let users=JSON.parse(localStorage.getItem("users"));

    if(users===null){
        users=[];
    }
    users.push(userData);
    localStorage.setItem('loggenInUser',JSON.stringify(userData));
    form.reset();
    if(token!=='null'){
        window.location.href='./profile';
    }
};
    

function ValidateEmail(input) {
    console.log(input);
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.match(validRegex)) {
      return true;
    } else {
      alert("Invalid email address!");
      return false;
    }
};

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateToken(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
