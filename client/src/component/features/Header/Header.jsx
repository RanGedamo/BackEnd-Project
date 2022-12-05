import "./Header.css";
import React from "react";

function Header({ bol }) {

  const logOut = () => {
    localStorage.clear()
  }

  switch (bol) {
    case true:
      return (<div className="header">

        <nav className=" navbar navbar-expand-lg navbar-dark orange lighten-1 bg-dark ">
          <a className="navbar-brand" href="/chart"><img src="https://static.wixstatic.com/media/db36e0_9f977799257f4cdd8353762ce053b6af~mv2.png/v1/fill/w_318,h_136,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/db36e0_9f977799257f4cdd8353762ce053b6af~mv2.png" alt="" width="120px" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
            aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent-555">

            <ul className="navbar-nav ml-auto nav-flex-icons">
              <li className="text-white m-2">
                <a href="/" onClick={logOut} className="text-white">Log Out</a>
              </li>
              <li className="nav-item avatar">
                <a className="nav-link p-0" href="#">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.webp" className="rounded-circle z-depth-0"
                    alt="avatar image" height="35" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      );

    case false:
      return (
        <div className="header">

          <nav className=" navbar navbar-expand-lg navbar-dark orange lighten-1 bg-dark ">
            <a className="navbar-brand" href="#"><img src="https://static.wixstatic.com/media/db36e0_9f977799257f4cdd8353762ce053b6af~mv2.png/v1/fill/w_318,h_136,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/db36e0_9f977799257f4cdd8353762ce053b6af~mv2.png" alt="" width="120px" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
              aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent-555">


            </div>
          </nav>
        </div>
      )
    default:
      return "hello";
  }

};

export default Header;
