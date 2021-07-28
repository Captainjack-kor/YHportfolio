import "../style/Footer.css";
import React from 'react';

class SendEmail extends React.Component {
  constructor(props){
    super(props);
    this.onSendEmail = this.onSendEmail.bind(this);
  }

  onSendEmail(children){
    console.log(children.target.innerText);
    window.open(`mailto:${children.target.innerText}`)
  }

  render(){
    return(
      <>
      <div > 
        <span className="emailInfo" onClick={this.onSendEmail}> plm0518@gmail.com </span>
      </div>
      <div > 
        <span className="emailInfo" onClick={this.onSendEmail}> plm0518@naver.com </span>
      </div>    
      </>
      // global.open('mailto:test@example.com?subject=subject&body=body')
    );
  }
}

export default SendEmail;