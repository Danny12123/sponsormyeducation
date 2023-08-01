import Nav from "../navbar/Navigation"
import Navbar from "../navbar"
import Donation from "../reusable-components/donation"
import FeaturedCampaign from "../sections/featured_campaign"
import Footer from "../footer"


function DonationPage() {
  return (
    <div>
       <Navbar />
        <Nav />
        <Donation />
        <FeaturedCampaign />
        <Footer/>
    </div>
  )
}

export default DonationPage