import React, { Component } from 'react';
import './Footer.css';

import linkedin from '../assets/linkedin.png';
import mail from '../assets/mail.png';
import github from '../assets/github.png';

const IconText = (props) => {
  return (
    <div className="IconText" onClick={props.onClick}>
      <img src={props.icon} alt="icon" />
      <span>{props.text}</span>
    </div>
  );
}

class Footer extends Component {
  render () {
    return (
      <div className="Footer">
        <div style={{ marginRight: '100px' }}>
          <span style={{ fontWeight: 'bold', display: 'block' }}>Eric Sández Riballo</span>
          <span>+34 675 274 372</span>
          <span></span>
        </div>
        <IconText icon={linkedin} text="Eric Sández" onClick={() => { window.open('https://www.linkedin.com/in/esandez93','_blank') }}/>
        <IconText icon={mail} text="esandez93@gmail.com" onClick={() => { window.open('mailto:esandez93@gmail.com') }} />
        <IconText icon={github} text="/esandez93" onClick={() => { window.open('https://github.com/esandez93', '_blank') }} />
      </div>
    );
  }
}

export default Footer;
