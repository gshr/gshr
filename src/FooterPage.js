import React from "react";
import './FooterPage.css';
const FooterPage = () => {
  return (
    <div className="main-footer">
      <div class="box">
        <a class="one"  href="https://www.linkedin.com/in/gauravsharma1054/" >LinkedIn</a>
        <div class="two">Two</div>
        <div class="three">Three</div>
      </div>


      <div className="row">
        <p className="col-sm">
          &copy;{(new Date().getFullYear())} | All Right Reversed |Term of Services |Privacy
        </p>
      </div>
    </div >
  );
}

export default FooterPage;