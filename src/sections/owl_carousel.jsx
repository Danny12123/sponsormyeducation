import  { useEffect, useRef } from 'react';
import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css'; // Import Flickity CSS
import '../owlCarousel.css';



//import 'flickity/css/flickity.css'; // Import Flickity CSS
 

const Advertisement = () => {
  const flickityRef = useRef(null);

  useEffect(() => {
    // Initialize Flickity carousel when the component mounts
    flickityRef.current = new Flickity('.custom-carousel', {
      freeScroll: true,
      wrapAround: true
    });

    // Destroy Flickity carousel when the component unmounts
    return () => {
      flickityRef.current.destroy();
    };
  }, []);

  return (
    <>
    <div className='text-bold text-center mt-5'>
      <h1> Featured Courses</h1>
    </div>
    <div className="custom-carousel carousel ">
      <div className="custom-carousel-cell carousel-cell ">
      <img src="https://i.pinimg.com/564x/de/e2/ca/dee2ca49a109ff0b6023e31fd66b0e9c.jpg" 
      className="carousel-image" 
      alt="ama" />
      </div>
      <div className="custom-carousel-cell carousel-cell">
      <img src="https://i.pinimg.com/564x/61/86/84/618684b6d1869ed48a0dae1e758fe751.jpg"
      className="carousel-image" 
      alt="3" />
      </div>
      <div className="custom-carousel-cell carousel-cell">
      <img src="https://i.pinimg.com/564x/00/bb/70/00bb70b89b9ef3fd1ecdb724947b8749.jpg"
      className="carousel-image"
       alt="Image 1" />
      </div>
      <div className="custom-carousel-cell carousel-cell">
      <img src="https://i.pinimg.com/564x/67/4d/0e/674d0ef3090991c5e53688b87cf32685.jpg" 
      className="carousel-image"
      alt="4" />
      </div>
      <div className="custom-carousel-cell carousel-cell ">
      <img src="https://collegevidya.com/blog/wp-content/uploads/2022/06/Best-Computer-Courses-After-12th-Arts-2022.png" 
      className="carousel-image"
      alt="5" />
      </div>
    </div>
    </>
  );
};

export default Advertisement;




// function Advertisement() {
//   const flickityRef = useRef(null);

//   useEffect(() => {
//     flickityRef.current = new Flickity('.gallery', {
//       wrapAround: true,
//       autoPlay: true, // Enable autoplay
//       // You can adjust the autoplay options like delay and pause between slides if needed
//       // autoPlay: 3000, // Autoplay every 3 seconds
//       // pauseAutoPlayOnHover: true, // Pause autoplay on hover
//     });

//     return () => {
//       if (flickityRef.current) {
//         flickityRef.current.destroy();
//       }
//     };
//   }, []);

//   return (
//     <div className="gallery">
//       <div className="gallery-cell ">
      
//       </div>
//       <div className="gallery-cell">
      
//       </div>
//       <div className="gallery-cell">
   
//       </div>
//       <div className="gallery-cell">
      
//       </div>
//       <div className="gallery-cell">
      
//       </div>
//     </div>
//   );
// }


