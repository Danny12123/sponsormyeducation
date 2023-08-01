 //import Navbar from "../navbar"
 import Nav from "../navbar/Navigation"
 import Carousel from "../navbar/carousel"
 //import SectionHead from "../reusable-components/section_head";
 //import OwlCarousel from "../sections/owl_carousel";
 import FeaturedCampaign from "../sections/featured_campaign";
 import NewCampaign from "../sections/new_campaign";
 import GreenBanner from "../sections/green_banner";
 import JumbotronBackground from "../sections/jumbotron";
 import Footer from "../footer";

function HomePage({ newDate }) {
  return (
    <div>
         {/* <Navbar /> */}
         <Nav />
         <Carousel />
         {/* <OwlCarousel /> */}
         <FeaturedCampaign />
      <NewCampaign newDate={ newDate } />
         <GreenBanner />
         <JumbotronBackground />
         <Footer /> 
    </div>
  )
}

export default HomePage