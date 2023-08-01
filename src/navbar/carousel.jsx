import { Carousel } from "react-bootstrap";

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block img-fluid w-100 "
          src="https://media.istockphoto.com/id/636860704/photo/group-of-happy-african-children-east-africa.jpg?s=1024x1024&w=is&k=20&c=TQ_jyi5MsQeLXyuQNXZV2EyeuhWIbfeg3tAHuK-98TM="
          alt="happy kids"
        />
        <div className="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/474251868/photo/african-black-child-drinking-fresh-water-from-tap.jpg?s=1024x1024&w=is&k=20&c=VBE3pYzkkeVuYl2DmacOzzyT6uRCyqq9A8FnLRdMAbE="
          alt="Children drinking water"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1353379172/photo/cute-little-african-american-girl-looking-at-camera.jpg?s=1024x1024&w=is&k=20&c=umFtOYrvwG4HIDCAskJ5U-2ncPlSoNXETjog2YbpC10="
          alt="Girl looking at camera"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
