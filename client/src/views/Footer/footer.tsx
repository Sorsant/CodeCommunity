import React from "react";
import style from "./footer.module.css";
import { Link } from "react-router-dom";

const Footer: React.FC = (): JSX.Element => {
  return (
    <div className={style.footerWrapper}>
      <div className={`${style.footer_dark} ${style.stickyFooter}`}>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <Link to="/home">
                      <p>Home</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/news">
                      <p>News</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/home">
                      <p>Comunitys</p>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <p>Company</p>
                  </li>
                  <li>
                    <p>Team</p>
                  </li>
                  <li>
                    <p>Careers</p>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 item text">
                <h3>CodeCommunity</h3>
                <p>
                  Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                  Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam
                  quis tristique lectus. Aliquam in arcu eget velit pulvinar
                  dictum vel in justo.
                </p>
              </div>
              <div className="col item social">
                <p>
                  <i className="icon ion-social-facebook"></i>
                </p>
                <p>
                  <i className="icon ion-social-twitter"></i>
                </p>
                <p>
                  <i className="icon ion-social-snapchat"></i>
                </p>
                <p>
                  <i className="icon ion-social-instagram"></i>
                </p>
              </div>
            </div>
            <p className="copyright">CodeCommunity © 2018</p>
          </div>
        </footer>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
    </div>
  );
};
export default Footer;
