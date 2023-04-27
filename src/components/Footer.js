import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <img
        alt=""
        src={require("../assets/footer.png")}
      />
      <p><a href="https://www.linkedin.com/in/gulermustafa/">Created by Mustafa Güler ©</a></p>
    </div>
  );
}

export default Footer;
