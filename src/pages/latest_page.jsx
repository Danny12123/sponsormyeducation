import Navbar from '../navbar'
import Nav from '../navbar/Navigation'
import JumbotronBackground from '../sections/jumbotron'
import Footer from '../footer'
import NewCampaign from '../sections/new_campaign'


function LatestCampaign() {
  return (
    <div>
        <Navbar/>
        <Nav />
        <JumbotronBackground />
        <NewCampaign />
        <Footer />
    </div>
  )
}

export default LatestCampaign