import "./Footer.scss";

const Footer = () => {
    return (
      <footer className="footer__container">
        <div className="footer__text-icons">
            <div className="footer__text">
            <h1 className="footer__title">Snaps</h1>
                <div className="footer__link">
                    <div className="footer__link-one--space">
                        <a className="footer__link--underline" href="">For photographers</a>
                        <a className="footer__link--underline" href="">Hire talent</a>
                        <a className="footer__link--underline" href="">Inspiration</a>
                    </div>
                    <div className="footer__link-two--space">
                        <a className="footer__link--underline" href="">About</a>
                        <a className="footer__link--underline" href="">Careers</a>
                        <a className="footer__link--underline" href="">Support</a>
                    </div>
                </div>
            </div>
                <div className="social__icons">
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
        </div>
            <div className="footer__copyright">
                <p className="footer__info">© 2024 Snaps</p>
                <p className="footer__info">. Terms</p>
                <p className="footer__info">Privacy</p>
                <p className="footer__info">Cookies</p>
            </div>
      </footer>
    );
  };
  
  export default Footer;
