import "./Footer.scss";

const Footer = () => {
    return (
      <footer className="footer__container">
            <h1 className="footer__title">Snaps</h1>
            <div className="footer__link--space">
                <a className="footer__link--underline" href="">For photographers</a>
                <a className="footer__link--underline" href="">Hire talent</a>
                <a className="footer__link--underline" href="">Inspiration</a>
            </div>
            <div className="footer__link--space">
                <a className="footer__link--underline" href="">About</a>
                <a className="footer__link--underline" href="">Careers</a>
                <a className="footer__link--underline" href="">Support</a>
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
