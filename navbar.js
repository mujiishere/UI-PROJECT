class NavBar extends HTMLElement {
    
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar">
            <div id="main">
                <button class="openbtn" onclick="openNav()">&#9776;</button>
            </div>
            <div class="logo">
            <a href="MainPage.html"><img src="assets/companyLogo.png" alt="web_logo"></a>
            </div>
            <div id="nav-links" class="nav-links">
                <a href="tariff.html" id="tariff-link">Tariff</a>
                <a href="whatsnew.html">What's New?</a>
                <a href="career.html">Careers</a>
                <a href="partnerwithus.html">Partner with Us</a>
            </div>
            <div class="dropDown">
                <select id="selectLink">
                    <option value="#">Choose</option>
                    <option value="tariff.html">Tariff</option>
                    <option value="whatsnew.html">What's new?</option>
                    <option value="career.html">Careers</option>
                    <option value="partnerwithus.html">Partner with us</option>
                </select> 
            </div>
            <div>
                <button id="location">Location</button>
            </div>
            <div class="contact-info" id="contact-info">
                <a href="tel:+9113478103290">+9113478103290</a>
                <a href="tel:+913289922156">+913289922156</a>
                <a href="#">Chat Now</a>
            </div>
            <div class="login-signup" id="login-signup">
                <a href="loginpage.html" class="login">Sign Up</a>
                <a href="loginpage.html" class="login">Login</a>
            </div>
        </nav>

        <div id="overlay"></div>
        <div id="contentBox">
            <button id="closeContentButton"><i class="gg-close"></i></button>
            <h2 style="text-align: center; font-family: Monospace; font-size: 26">Our Locations</h2>
            <div class="row">
                <button id="box1" class="selection"></button>
                <button id="box2" class="selection"></button>
            </div>
            <div class="row">
                <button id="box3" class="selection"></button>
                <button id="box4" class="selection"></button>
            </div>
        </div>  

        <div id="sideBar" class="sidebar">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <a href="tariff.html" id="tariff-link">Tariff</a>
            <a href="career.html">Careers</a>
            <a href="partnerwithus.html">Partner with Us</a>
            <a href="missionGoals.html">Missions and Goals</a>
            <a href="blogpage.html">Blog</a>
            <a href="aboutus.html">About Us</a>
            <a href="tos.html">Terms and Condition</a>
            <a href="privacy.html">Privacy Policy</a>
            <a href="loginpage.html" class="login" >Login</a>
            <a href="loginpage.html" class="signup">Sign Up</a>
        </div>
        `;

        document.querySelector('#selectLink').addEventListener('change',function(){
            var url = this.value;
            if(url){
                window.location.href = url;
            }
        });
    }
}

customElements.define('nav-bar', NavBar);
