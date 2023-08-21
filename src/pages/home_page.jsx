 //import Navbar from "../navbar"
 import Navigation from "../navbar/Navigation"
 import Carousel from "../navbar/carousel"

 
 import FeaturedCampaign from "../sections/featured_campaign";
 import NewCampaign from "../sections/new_campaign";
 import GreenBanner from "../sections/green_banner";
 import JumbotronBackground from "../sections/jumbotron";
 import Footer from "../footer";
import Advertisement from "../sections/owl_carousel";

function HomePage() {
  return (
    <div>
      
         <Navigation category="education"/>
         <Carousel />
         <Advertisement />
         <FeaturedCampaign />
         <NewCampaign  />
         <GreenBanner />
         <JumbotronBackground />
         <Footer /> 
    </div>
  )
}

export default HomePage