import Nav from "../navbar/Navigation"
import Navigation from "../navbar"
import JumbotronBackground from "../sections/jumbotron"
import CampaignForm from "../reusable-components/register_campaign"
import Footer from "../footer"

function CampaignPage() {
  return (
    <div>
      <Navigation />
        <Nav />
        <JumbotronBackground />
        <CampaignForm/>
        <Footer />
    </div>
  )
}

export default CampaignPage