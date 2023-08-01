
import Navigation from "../navbar/Navigation"
import JumbotronBackground from "../sections/jumbotron"
import RegisterForm from "../reusable-components/register_form"
import Footer from "../footer"

function CreateCampaign() {
  return (
    <>
      <Navigation />
        
        <JumbotronBackground />
        <RegisterForm/>
        <Footer />
    </>
  )
}

export default CreateCampaign