let signupbtn = document.getElementById("signupbtn");
let loginbtn = document.getElementById("loginbtn");
let namefield = document.getElementById("namefield");
let title = document.getElementById("title");
var button  = document.getElementById("registerbtn");
var closebtn = document.getElementById("closebtn");

loginbtn.onclick = function(){
  namefield.style.maxHeight = "0";
  idfield.style.maxHeight= "0";
  title.innerHTML= "Log in";
  signupbtn.classList.add("disable");
  loginbtn.classList.remove("disable");
  button.innerHTML = "Login with password";
  document.getElementById("p2").style.display = "none";
} 

signupbtn.onclick = function(){
  namefield.style.maxHeight = "65px";
  idfield.style.maxHeight= "65px";
  title.innerHTML= "Sign up";
  signupbtn.classList.remove("disable");
  loginbtn.classList.add("disable");
  button.innerHTML = "Register";
  document.getElementById("p2").style.display = "block";
} 

closebtn.onclick = function() {
  window.history.back();
}




