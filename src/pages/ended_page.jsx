import Navigation from "../navbar/Navigation"
import JumbotronBackground from "../sections/jumbotron"
import Ended from "../sections/ended"
import Footer from "../footer"


function EndedPage() {
  return (
    <div>
        <Navigation />
        <JumbotronBackground />
        <Ended />
        <Footer />
    </div>
  )
}

export default EndedPage