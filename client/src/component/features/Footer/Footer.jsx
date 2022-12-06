import "./Footer.css";
import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div className="footer">
<footer className="bg-dark text-center text-white fixed-bottom" >
  <div className="container p-4 pb-0" style={{height:'9vh'}}>
    <section className="mb-4">
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><FacebookIcon sx={{mt:0.7 }}/></a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><TwitterIcon sx={{mt:0.7 }}/></a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><GoogleIcon sx={{mt:0.6 }}/></a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><InstagramIcon sx={{mt:0.7 }}/></a>

      <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/ran-gedamo-288828236/" role="button"
        ><LinkedInIcon sx={{mt:0.7 }}/></a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><GitHubIcon sx={{mt:0.7 }}/></a>
    </section>
  </div>
  {/* twitter
  google
  instagram
  linkedin */}
</footer>
    </div>
  );
};

export default Footer;
