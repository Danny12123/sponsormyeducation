import { Carousel } from "react-bootstrap";
import { useState, useEffect } from "react";

const CarouselComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block img-fluid w-100 "
          src="https://images.pexels.com/photos/11025019/pexels-photo-11025019.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="happy kids"
        />
        <div className="carousel-caption d-none d-md-block " style={{marginBottom: "10em"}}>
          <h1 className= {`fade-in ${isVisible ? "visible" : ""}`}>Educating the Future</h1>
          <h5 className= {`fade-in ${isVisible ? "visible" : ""}`}>With A Small Contribution You Can Help Educate Thousands of Children</h5>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/14554004/pexels-photo-14554004.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Children drinking water"
        />
         <div className="carousel-caption d-none d-md-block" style={{marginBottom: "10em"}}>
          <h1 className= {`fade-in ${isVisible ? "visible" : ""}`}>Little Help For Big Cause</h1>
          <h5 className= {`fade-in ${isVisible ? "visible" : ""}`}>With A Small Contribution You Can Help Educate Thousands of Children</h5>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/11139373/pexels-photo-11139373.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Girl looking at camera"
        />
         <div className="carousel-caption d-none d-md-block" style={{marginBottom: "10em"}}>
          <h1 className= {`fade-in ${isVisible ? "visible" : ""}`}>Sponser My Campaign</h1>
          <h5 className= {`fade-in ${isVisible ? "visible" : ""}`}>With A Small Contribution You Can Help Educate Thousands of Children</h5>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
