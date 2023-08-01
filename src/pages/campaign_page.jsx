
import Navigation from "../navbar/Navigation"
import JumbotronBackground from "../sections/jumbotron"
import CampaignForm from "../reusable-components/register_campaign"
import Footer from "../footer"

function CampaignPage() {
  return (
    <div>
        <Navigation />
        <JumbotronBackground />
        <CampaignForm/>
        <Footer />
    </div>
  )
}

export default CampaignPage