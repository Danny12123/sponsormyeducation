import Slider from "react-slick";
//import './Carousel.css'; // Create this file to add custom styles for the carousel

const OwlCarousel = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...carouselSettings}>
      {/* Your carousel items go here */}
      <div className="carousel-item">
        <a href="https://fundmescript.com/category/Animals">
          <img
            className="img-fluid rounded"
            src="https://fundmescript.com/public/img-category/Animals-POsuy0x9UacwnWY20R8hPRYX1zrHXwop.jpg"
            alt="Animals"
          />
          <h5>
            Animals <small>(71)</small>
          </h5>
        </a>
      </div>
      <div className="carousel-item">Item 2</div>
      <div className="carousel-item">Item 3</div>
      <div className="carousel-item">Item 4</div>
      <div className="carousel-item">Item 5</div>
      {/* Add more items as needed */}
    </Slider>
  );
};

export default OwlCarousel;
