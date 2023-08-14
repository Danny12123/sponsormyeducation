import Navigation from "../navbar/Navigation"
import JumbotronBackground from "../sections/jumbotron"
import Business from "../sections/business"
import Footer from "../footer"

function BusinessPage() {
  return (
    <div>
        <Navigation />
        <JumbotronBackground />
        <Business />
        <Footer />
    </div>
  )
}

export default BusinessPage