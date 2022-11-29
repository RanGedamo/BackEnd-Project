import "./Header.css";
import React from "react";

function Header() {
  return (
    <div className="header">

<nav class="mb-1 navbar navbar-expand-lg navbar-dark orange lighten-1 bg-dark">
  <a class="navbar-brand" href="#"><img src="https://static.wixstatic.com/media/db36e0_9f977799257f4cdd8353762ce053b6af~mv2.png/v1/fill/w_318,h_136,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/db36e0_9f977799257f4cdd8353762ce053b6af~mv2.png" alt="" width="150px"/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
    aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent-555">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
    </ul>
    <ul class="navbar-nav ml-auto nav-flex-icons">
      <li class="nav-item avatar">
        <a class="nav-link p-0" href="#">
          <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.webp" class="rounded-circle z-depth-0"
            alt="avatar image" height="35"/>
        </a>
      </li>
    </ul>
  </div>
</nav>
    </div>
  );
};

export default Header;
