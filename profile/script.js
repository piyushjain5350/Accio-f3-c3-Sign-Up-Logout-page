const logout=document.getElementById('logoutBtn');

let currentUser = JSON.parse(localStorage.getItem('loggenInUser'));
if(!currentUser){
    window.location.href='../index.html';
}else{
    alert('login successful!!!!!');
}
const profile=document.getElementsByClassName('profile-details')[0];


profile.innerHTML=`
   <p><span>Full Name</span>:${currentUser.nameInput}</p>
    <p><span>Email</span>:${currentUser.emailInput}</p>
    <p><span>Token</span>:${currentUser.token}</p>
    <p><span>Password</span>:${currentUser.passwordInput}</p>
`;

logout.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href='../index.html';
    localStorage.clear();
})