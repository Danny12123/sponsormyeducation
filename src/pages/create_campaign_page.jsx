import Nav from "../navbar/navbar"
import Navbar from "../navbar"
import JumbotronBackground from "../sections/jumbotron"
import RegisterForm from "../reusable-components/register_form"
import Footer from "../footer"

function CreateCampaign() {
  return (
    <>
        <Navbar />
        <Nav />
        <JumbotronBackground />
        <RegisterForm/>
        <Footer />
    </>
  )
}

export default CreateCampaign