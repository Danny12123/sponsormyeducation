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
          src="https://images.pexels.com/photos/5940845/pexels-photo-5940845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="happy kids"
        />
        <div className="carousel-caption d-none d-md-block  text-bold" style={{marginBottom: "10em"}}>
          <h1 className= {`fade-in ${isVisible ? "visible" : ""}`}>Sponser My Education</h1>
          <h3 className= {`fade-in ${isVisible ? "visible" : ""}`}>Help Make Dreams A Reality</h3>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/8197532/pexels-photo-8197532.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Children drinking water"
        />
         <div className="carousel-caption d-none d-md-block text-bold" style={{marginBottom: "10em"}}>
          <h1 className= {`fade-in ${isVisible ? "visible" : ""}`}> Sponser My Education</h1>
          <h3 className= {`fade-in ${isVisible ? "visible" : ""}`}>Little Help For Big Cause</h3>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/7713173/pexels-photo-7713173.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Girl looking at camera"
        />
         <div className="carousel-caption d-none d-md-block text-bold" style={{marginBottom: "10em"}}>
          <h1 className= {`fade-in ${isVisible ? "visible" : ""}`} >Sponser My Education</h1>
          <h3 className= {`fade-in ${isVisible ? "visible" : ""}`}>Give Someone Hope</h3>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
