import React from 'react'
import './footer.css';
import { Instagram, Mail, Facebook, Twitter, YouTube } from '@material-ui/icons';
import { Container, Row, Col } from 'react-bootstrap';
/**
* @author
* @function Footer
**/

const Footer = (props) => {
    return(
        <div className="main-footer">
            <div className="instaBtn">
                <button><Instagram className="instaIcon" /> <span>shop from instagram</span> </button>
            </div>
             <div className="subscription">
                <form action="" className="newsletter col-12">
                    <h2>Subscribe Our Newsletter &amp; Join US</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="newsletter-box">
                        <span className="mailIcon"><Mail /></span>
                        <input className="emailbox" type="email" placeholder="Enter your email id" />
                        <button type="button" name="button">Subscribe</button>
                    </div>
                </form>
            </div>
             
    
           <div className="footer-container">
              
            <footer className="footer">

  
  <ul className="footer__nav">
    <li className="nav__item">
      <h2 className="nav__title">Media</h2>

      <ul className="nav__ul">
        <li>
          <a href="#">Online</a>
        </li>

        <li>
          <a href="#">Print</a>
        </li>
            
        <li>
          <a href="#">Alternative Ads</a>
        </li>
        <li>
          <a href="#">Alternative Ads</a>
        </li>
        <li>
          <a href="#">Alternative Ads</a>
        </li>
      </ul>
    </li>
  
  </ul>
  <ul className="footer__nav">
    <li className="nav__item">
      <h2 className="nav__title">Media</h2>

      <ul className="nav__ul">
        <li>
          <a href="#">Online</a>
        </li>

        <li>
          <a href="#">Print</a>
        </li>
            
        <li>
          <a href="#">Alternative Ads</a>
        </li>
        <li>
          <a href="#">Alternative Ads</a>
        </li>
        <li>
          <a href="#">Alternative Ads</a>
        </li>
      </ul>
    </li>
  
  </ul>
  <ul className="footer__nav">
    <li className="nav__item">
      <h2 className="nav__title">Media</h2>

      <ul className="nav__ul">
        <li>
          <a href="#">Online</a>
        </li>

        <li>
          <a href="#">Print</a>
        </li>
            
        <li>
          <a href="#">Alternative Ads</a>
        </li>
        <li>
          <a href="#">Alternative Ads</a>
        </li>
        <li>
          <a href="#">Alternative Ads</a>
        </li>
      </ul>
    </li>
  
  </ul>
  <ul className="footer__nav">
    <li className="nav__item">
      <h2 className="nav__title">Media</h2>

      <ul className="nav__ul">
        <li>
          <a href="#">Online</a>
        </li>

        <li>
          <a href="#">Print</a>
        </li>
            
        <li>
          <a href="#">Alternative Ads</a>
        </li>
        <li>
          <a href="#">Alternative Ads</a>
        </li>
        <li>
          <a href="#">Alternative Ads</a>
        </li>
       
      </ul>
    </li>
  
  </ul>
  
  <div className="col-12" style={{textAlign: "center"}}>
                    <p className="foot">
                        &copy;{new Date().getFullYear()} grapsnextsocial.com All rights reserved.
                    </p>
                </div>
</footer>
           </div>

            
    
        </div>
    )
 }

export default Footer