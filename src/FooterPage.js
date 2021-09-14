import React from "react";
import './FooterPage.css';
const FooterPage = () => {
  return (
    <div className="main-footer">
      

      <div className="row">
        <p className="col-sm">
          &copy;{(new Date().getFullYear())} | All Right Reversed |Term of Services |Privacy
        </p>
      </div>
    </div >
  );
}

export default FooterPage;