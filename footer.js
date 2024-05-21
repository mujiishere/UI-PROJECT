class FooterCode extends HTMLElement {
    
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="footer-container">
                <div class="footer-section">
                    <h3>KK BIKE RENTALS</h3>
                    <hr>
                    <p><i class="gg-mail"></i> support@kkbikerentals.com</p>
                    <p><i class="gg-phone"></i> +913478103290 / +913289922156</p>
                </div>
                <div class="footer-section">
                    <h3>COMPANY</h3>
                    <hr>
                    <p><a href="aboutus.html">About Us</a></p>
                    <p><a href="blogpage.html">Blog</a></p>
                    <p><a href="career.html">Careers <span class="badge">We're hiring!</span></a></p>
                    <p><a href="#contact">Contact Us</a></p>
                </div>
                <div class="footer-section">
                    <h3>POLICIES</h3>
                    <hr>
                    <p><a href="privacy.html">Privacy Policy</a></p>
                    <p><a href="tos.html">Terms & Conditions</a></p>
                </div>
                <div class="footer-section">
                    <h3>QUICK LINKS</h3>
                    <hr>
                    <p><a href="tariff.html">Tariff</a></p>
                    <p><a href="missionGoals.html">Missions and Goals</a></p>
                    <p><a href="https://store.royalenfield.com/en/riding-gear">Riding Gears</a></p>
                    <p><a href="partnerwithus.html">Partner with us</a></p>
                    <p><a href="#routes">Indian bike routes</a></p>
                </div>
                <div class="footer-section">
                    <h3>FOLLOW US</h3>
                    <hr>
                    <div class="social-icons">
                        <a href="#insta"><i class="gg-instagram"></i></a>
                        <a href="#fb"><i class="gg-facebook"></i></a>
                        <a href="#twitter"><i class="gg-twitter"></i></a>
                        <a href="#lcroudFire"><i class="gg-crowdfire"></i></a>
                        <a href="#yt"><i class="gg-youtube"></i></a>
                    </div>
                </div>
                <div class="footer-section">
                    <h3>DOWNLOAD OUR APP</h3>
                    <hr>
                    <div class="app-icons">
                        <a href="https://www.apple.com/in/app-store/"><img src="assets/appstore1.png" alt="App Store"></a>
                        <a href="https://play.google.com/store/games?hl=en_IN&gl=US&pli=1"><img src="assets/playstore.jpeg" alt="Google Play"></a>
                    </div>
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define('footer-code', FooterCode);
