const Footer = () => {
    return (
      <footer className="footer__container">
            <h1>Snaps</h1>
            <div>
                <a className='footer__link' href="">For photographers</a>
                <a href="">Hire talent</a>
                <a href="">Inspiration</a>
            </div>
            <div>
                <a href="">About</a>
                <a href="">Careers</a>
                <a href="">Support</a>
            </div>
            <div>
                <a href="https://www.facebook.com/">
                    <img src="./src/assets/images/Facebook.svg" alt="facebook icon"></img>
                </a>
                <a href="https://x.com/?lang=en">
                    <img src="./src/assets/images/X_twitter.svg" alt="twitter icon"></img>
                </a>
                <a href="https://www.instagram.com/">
                    <img src="./src/assets/images/Instagram.svg" alt="instagram icon"></img>
                </a>
                <a href="https://www.pinterest.com/">
                    <img src="./src/assets/images/Pinterest.svg" alt="pinterest icon"></img>
                </a>
            </div>
            <div>
                {/* for Copyright stuff */}
            </div>
      </footer>
    );
  };
  
  export default Footer;
