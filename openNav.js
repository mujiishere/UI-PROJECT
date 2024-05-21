document.addEventListener("DOMContentLoaded", function() {
  var locationButton = document.getElementById("location");
  var closeContentButton = document.getElementById("closeContentButton");
  var overlay = document.getElementById("overlay");
  var contentBox = document.getElementById("contentBox");

  locationButton.addEventListener("click", function() {
    overlay.style.display = "block";
    contentBox.style.display = "block";
    document.body.classList.add("translucent"); // Add translucent class to the body
  });

  closeContentButton.addEventListener("click", function() {
    overlay.style.display = "none";
    contentBox.style.display = "none";
    document.body.classList.remove("translucent"); // Remove translucent class from the body
  });
});  

  function openNav() {

    document.getElementById("sideBar").style.width = "250px";
    document.getElementById("main").style.display = 'none';
    document.getElementById("nav-links").style.display = 'none';
    document.getElementById("contact-info").style.display = 'none';
    document.getElementById("login-signup").style.display = 'none';
    document.getElementById("location").style.display = 'none';
  }
  
  function closeNav() {
    document.getElementById("sideBar").style.width = "0";
    document.getElementById("main").style.display = 'block';
    document.getElementById("nav-links").style.display = 'block';
    document.getElementById("contact-info").style.display = 'block';
    document.getElementById("login-signup").style.display = 'block';
    document.getElementById("location").style.display = 'none';
  }