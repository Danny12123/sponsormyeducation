import Nav from "../navbar/Navigation"
import Navigation from "../navbar"
import JumbotronBackground from "../sections/jumbotron"
import RegisterForm from "../reusable-components/register_form"
import Footer from "../footer"

function CreateCampaign() {
  return (
    <>
      <Navigation />
        <Nav />
        <JumbotronBackground />
        <RegisterForm/>
        <Footer />
    </>
  )
}

export default CreateCampaign