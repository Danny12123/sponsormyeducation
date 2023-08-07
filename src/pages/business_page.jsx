import Navigation from "../navbar/Navigation"
import JumbotronBackground from "../sections/jumbotron"
import Business from "../sections/business"
import Footer from "../footer"

function BusinessPage({newDate}) {
  return (
    <div>
        <Navigation />
        <JumbotronBackground />
        <Business newDate={ newDate}/>
        <Footer />
    </div>
  )
}

export default BusinessPage