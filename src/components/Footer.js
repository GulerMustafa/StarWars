import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <img
        alt=""
        src={require("../assets/footer.png")}
      />
      <p>Created by Mustafa Güler ©</p>
    </div>
  );
}

export default Footer;
