import "../style/Footer.css";
import React from 'react';
import SendEmail from "../components/SendEmail";


// const sendEmail = (()=> {
//   return (
//     global.open('mailto:test@example.com?subject=subject&body=body')
//   );

// })

const Footer = () => {
  return (
    <>
      <div id="footer">
        <div>
          <div className="footerLogo">YH · ARCHI</div>
          <div className="footerinfo"> 충남대학교 건축학과 김용현 </div>
          <div className="footerinfoEng"> 
            chungnam national university
            Department of Architecture
            Kim yong hyun
          </div>

          <SendEmail />

        </div>
      </div>
    </>
  );
}

export default Footer;