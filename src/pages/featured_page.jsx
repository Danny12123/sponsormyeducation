
import Navigation from '../navbar/Navigation'
import JumbotronBackground from '../sections/jumbotron'
import Footer from '../footer'
import FeaturedCampaign from '../sections/featured_campaign'


function FeaturedPage() {
  return (
    <div>
        <Navigation/>
        <JumbotronBackground />
        <FeaturedCampaign />
        <Footer />
    </div>
  )
}

export default FeaturedPage