import React from "react";
import "./Testimonial.css";
import Container from "react-bootstrap/Container";
import testimonialsData from "./testimonialdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Testimonial = () => {


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // vertical:true,
    // verticalSwiping:true,
  };

  return (
    <div className="testimonial">
      <Container>
        <h1 className="fw-bolder text-light text-center pt-4 testimonial-header">Our Happy Customers... <hr/></h1>
        <div className="testimonial-cards" >
        
          <Slider {...settings}>
            
          {testimonialsData.map((item) => {
          return  <li key={item.id} className="list-unstyled " >
              <div className="testimonial-card">
                <div className="testimonial-img">
                  <img
                    src={item.image}
                    alt="trusted mobile customers"
                    className="sara"
                  />
                </div>
                <div className="testimonial-content">
                  <h5 className="text-muted fw-bold">{item.name}</h5>
                  <hr />
                  <p className="lg-lh">{item.text}</p>
                </div>
              </div>
            </li>;
          })}
          </Slider>
        </div>
       
      </Container>
    </div>
  );
};

export default Testimonial;
