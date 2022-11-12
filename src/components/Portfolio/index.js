import React from "react";
import Layout from "../Layout";
import { ReactDOM } from "react-dom";
import "./portfolio.css";
import { Container, Row, Col, ProgressBar, Carousel } from "react-bootstrap";
import banner1 from "../../images/logo/banner-3.jpg";
import banner2 from "../../images/logo/women-banner.jpg";
import {
  FaArrowRight,
  FaBuilding,
  FaClock,
  FaEnvelope,
  FaFacebook,
  FaFacebookF,
  FaFacebookSquare,
  FaGlobe,
  FaInstagramSquare,
  FaPhone,
  FaRocket,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

// var Carousel = require("react-responsive-carousel").Carousel;

/**
 * @author
 * @function PortFolio
 **/

const PortFolio = (props) => {
    const SKILLS_LIST = [
        {
          label: 'HTML5/CSS3 - 95%',
          percentage: '100%',
        },
        {
          label: 'ES6 / 95%',
          percentage: '95%',
        },
        {
          label: 'React/Redux - 95%',
          percentage: '95%',
        },
      
     
      ];
      console.log(SKILLS_LIST)
      const ProgressLine = ({ label, percentage, barBg, progresBg, barHeight, borderRadius }) => {
          const [widths, setWidths] = React.useState(0);
      
          React.useEffect(() => {
              requestAnimationFrame(() => setWidths(percentage));
          }, [percentage]);
      
          return (
              <section className="progress-line">
                  <span className="progress-line__label">{ label }</span>
                  <div 
                      className="progress-line__outer"
                      style={ {
                          background: barBg,
                          height: `${barHeight}px`,
                          borderRadius: borderRadius,
                         
                         
                      }}>
                      <div 
                          className="progress-line__inner" 
                          style={ {
                              width: widths,
                              background: progresBg,
                              transition: 'width 2s',
                         } } /> 
                  </div>
              </section>
          );
      };
      
      const Skills = ()=> (
        <Container>
           
            <Row>
               <Col>
                {
                    SKILLS_LIST.map((skill, index) => ( // index: static values
                        <ProgressLine
                            key={ index }
                            barHeight="8"
                            barBg="#efefef"
                            progresBg="rgba(255, 82, 82, .7)"
                            label={ skill.label }
                            percentage={ skill.percentage }
                            borderRadius="10px"
                            
                            /> 
                    ))
                 }
              </Col>
            </Row>
          </Container>
      );
      
  

  return (
    <Layout>
      <Carousel className="carousel slide carousel-inner">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

  
  </Carousel.Item>

</Carousel>
      {/* body */}
      <section>
      <div className="appMainHeading">
          <h2>About Me</h2>
        </div>
        <Container>
          <div className="portfolioContainer">
            <div className="portfolioLeftContainer">
              <div className="image-card">
                <img src="https://images.unsplash.com/photo-1582439170934-d089aa10abda?ixlib=rb-1.2.1&auto=format&fit=crop&w=335&q=80" />
                <h2>Beni Pixie</h2>
                <ul className="ulnew">
                  <li className="linew">
                    <i>
                      <FaFacebookSquare />{" "}
                    </i>
                    <span>Facebook</span>
                  </li>
                  <li className="linew">
                    <i>
                      {" "}
                      <FaTwitterSquare />{" "}
                    </i>
                    <span>Twitter</span>
                  </li>
                  <li className="linew">
                    <i>
                      {" "}
                      <FaInstagramSquare />{" "}
                    </i>
                    <span>Instagram</span>
                  </li>
                  <li className="linew">
                    <i>
                      {" "}
                      <FaYoutubeSquare />{" "}
                    </i>
                    <span>Youtube</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="portfolioRightContainer">
              <h5>Hi There</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic
              </p>
              <div className="portfolioGridtextContainer">
                <div>
                  <h6>Name</h6>
                  <p>Soulbyindian</p>
                </div>
                <div>
                  <h6>Email</h6>
                  <p>Soulbyindian@gmail.com</p>
                </div>
              </div>
              <div className="portfolioGridtextContainer">
                <div>
                  <h6>Name</h6>
                  <p>Soulbyindian</p>
                </div>
                <div>
                  <h6>Email</h6>
                  <p>Soulbyindian@gmail.com</p>
                </div>
              </div>
              <button>
                CONTACT ME <FaArrowRight />{" "}
              </button>
            </div>
          </div>
        </Container>
      </section>
    

      <section>
        <div className="appMainHeading">
          <h2>My Services</h2>
        </div>
        <Container>
          <div className="serviceContainer">
            <div className="serviceBox">
              <div className="service-icon">
                <span>
                
                  <FaRocket className="fa" />
                </span>
              </div>
              <h3 className="title">Web Design</h3>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                quaerat fugit quas veniam perferendis repudiandae sequi, dolore
                quisquam illum.
              </p>
            </div>
            <div class="serviceBox orange">
              <div class="service-icon">
                <span>
                  <i className="fa fa-globe">
                    <FaGlobe />
                  </i>
                </span>
              </div>
              <h3 class="title">Web Development</h3>
              <p class="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                quaerat fugit quas veniam perferendis repudiandae sequi, dolore
                quisquam illum.
              </p>
            </div>
            <div className="serviceBox purple">
              <div className="service-icon">
                <span>
                  <i className="fa fa-globe">
                    <FaGlobe />
                  </i>
                </span>
              </div>
              <h3 className="title">Web Design</h3>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                quaerat fugit quas veniam perferendis repudiandae sequi, dolore
                quisquam illum.
              </p>
            </div>
            <div className="serviceBox blue">
              <div className="service-icon">
                <span>
                  <i className="fa fa-globe">
                    <FaGlobe />
                  </i>
                </span>
              </div>
              <h3 className="title">Web Design</h3>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                quaerat fugit quas veniam perferendis repudiandae sequi, dolore
                quisquam illum.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* <section>
      <div className="appMainHeading">
          <h2>My Skills</h2>
        </div>
        <Container>
          <div className="mySkill">
            <div className="mySkillLeft">
              <h5>Every Day Is a new challenge</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                quaerat fugit quas veniam perferendis repudiandae sequi, dolore
                quisquam illum.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                quaerat fugit quas veniam perferendis repudiandae sequi, dolore
                quisquam illum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                quaerat fugit quas veniam perferendis repudiandae sequi, dolore
                quisquam illum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                quaerat fugit quas veniam perferendis repudiandae sequi, dolore
                quisquam illum.
              </p>
            
            </div>
            <div className="myskillRight">
          
            <Skills />
          </div>
          </div>
        </Container>
      </section> */}
      <section>
      <div className="appMainHeading">
          <h2 style={{paddingBottom: '30px'}}>My Designs</h2>
        </div>
     <Container>
     <div id="gallery" className="container-fluid">  
  <img src="https://source.unsplash.com/1600x1200?female,portrait" className="img-responsive" />
  <img src="https://source.unsplash.com/1024x768?female,portrait" className="img-responsive" />
   <img src="https://source.unsplash.com/1366x768?female,portrait" className="img-responsive" />
 
  <img src="https://source.unsplash.com/1920x1080?female,portrait" className="img-responsive" />
  <img src="https://source.unsplash.com/640x360?female,portrait" className="img-responsive" />
<img src="https://source.unsplash.com/320x640?female,portrait" className="img-responsive" />
  <img src="https://source.unsplash.com/1200x1600?female,portrait" className="card img-responsive" />
  <img src="https://source.unsplash.com/800x600?female,portrait" className="img-responsive" />
  <img src="https://source.unsplash.com/600x800?female,portrait" className="img-responsive" />
  <img src="https://source.unsplash.com/400x600?female,portrait" className="img-responsive" />
  <img src="https://source.unsplash.com/600x400?female,portrait" className="img-responsive" />
<img src="https://source.unsplash.com/1100x1600?female,portrait" className="img-responsive" />
<img src="https://source.unsplash.com/1600x1100?female,portrait" className="img-responsive" />
<img src="https://source.unsplash.com/992x768?female,portrait" className="img-responsive" />
<img src="https://source.unsplash.com/768x992?female,portrait" className="img-responsive" />

</div>

<div id="myModal" className="modal fade" role="dialog">
  <div className="modal-dialog">

 
    <div className="modal-content">
      <div className="modal-body">
      </div>
    </div>

  </div>
</div>
     </Container>

      </section>
      <section>
          <div className="counterProfile">
              <div className="counterInnerProfile">
                  <h5>43</h5>
                  <p>clients</p>
              </div>
              <div className="counterInnerProfile">
                  <h5>43</h5>
                  <p>clients</p>
              </div>
              <div className="counterInnerProfile">
                  <h5>43</h5>
                  <p>clients</p>
              </div>
              <div className="counterInnerProfile">
                  <h5>43</h5>
                  <p>clients</p>
              </div>
          </div>
      </section>
       <section style={{backgroundColor: 'black'}}>
          
      <Carousel>

<Carousel.Item> 
<div  className="d-block w-100"  style={{height: '400px'}}>
<Carousel.Caption className="inner-testi1">
 <div>
 <img

style={{backgroundColor: 'black', height: '100px', width: '100px', borderRadius:'50%', verticalAlign: 'middle'}}
src={banner1}
alt="First slide"
/>
 </div>
<div>
<h5>JON DEO</h5>
<p>
is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
</p>
</div>
</Carousel.Caption>
</div>
</Carousel.Item>

<Carousel.Item> 
<div  className="d-block w-100"  style={{height: '400px'}}>
<Carousel.Caption className="inner-testi1">
 <div>
 <img

style={{backgroundColor: 'black', height: '100px', width: '100px', borderRadius:'50%', verticalAlign: 'middle'}}
src={banner1}
alt="First slide"
/>
 </div>
<div>
<h5>JON DEO</h5>
<p>
is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
</p>
</div>
</Carousel.Caption>
</div>
</Carousel.Item>



</Carousel>
      </section>
  
      
      <section>
      <div className="appMainHeading">
          <h2>Get In Touch</h2>
        </div>



  <div className="contact-info">
 
    <ul className="ulContact">
   

      <li className="liContact"><div className="circle"><i className="fas fa-home"> <FaBuilding /> </i></div> Tokyo, Japan</li>
      <li className="liContact"><div className="circle"><i className="fas fa-phone"></i> <FaPhone /> </div> +0 000 0000000</li>
      <li className="liContact"><div className="circle"><i className="fas fa-envelope"> <FaEnvelope /> </i></div> name@address.com</li>
      <li className="liContact"><div className="circle"><i className="fas fa-clock"> <FaClock /> </i></div> Mon - Fri 8:00 AM to 4:00 PM</li>
    </ul>
    <div className="contact-section">
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="E-mail" />
      <input type="tel" placeholder="@Your E-mail" />
      <textarea placeholder="Write your message..."></textarea>
      <button className="buttonContainer">Submit</button>
    </div>

</div>
      </section> 
    </Layout>
  );
};

export default PortFolio;
