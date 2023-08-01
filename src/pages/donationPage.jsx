
import Navigation from "../navbar/Navigation"
import Donation from "../reusable-components/donation"
import FeaturedCampaign from "../sections/featured_campaign"
import Footer from "../footer"


function DonationPage() {
  return (
    <div>
       <Navigation />
        <Donation />
        <FeaturedCampaign />
        <Footer/>
    </div>
  )
}

export default DonationPage