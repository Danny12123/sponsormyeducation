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
      wrapAround: true,
      autoPlay: 3000,
      cellAlign: window.innerWidth <= 768 ? 'center' : 'left', 
      contain: true,
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
    
      <img src="src\assets\Customer.jpg" 
      className="carousel-image" 
      alt="sponsor my education pictures" />
      
      </div>
      <div className="custom-carousel-cell carousel-cell">
      <img src="src/assets/ROBOTIC.jpg"
      className="carousel-image" 
      alt="sponsor my education pictures" />
      </div>
      <div className="custom-carousel-cell carousel-cell">
      <img src="src/assets/SCHOLARSHIP.jpg"
      className="carousel-image"
       alt="sponsor my education pictures" />
      </div>
      <div className="custom-carousel-cell carousel-cell">
      <img src="src/assets/DET.jpg" 
      className="carousel-image"
      alt="sponsor my education pictures" />
      </div>
      <div className="custom-carousel-cell carousel-cell ">
      <img src="src/assets/Remedial33.jpg" 
      className="carousel-image"
      alt="sponsor my education pictures" />
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


