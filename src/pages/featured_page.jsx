import Navbar from '../navbar'
import Nav from '../navbar/Navigation'
import JumbotronBackground from '../sections/jumbotron'
import Footer from '../footer'
import FeaturedCampaign from '../sections/featured_campaign'


function FeaturedPage() {
  return (
    <div>
        <Navbar/>
        <Nav />
        <JumbotronBackground />
        <FeaturedCampaign />
        <Footer />
    </div>
  )
}

export default FeaturedPage