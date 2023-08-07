import Navigation from "../navbar/Navigation"
import JumbotronBackground from "../sections/jumbotron"
import Ended from "../sections/ended"
import Footer from "../footer"


function EndedPage({newDate}) {
  return (
    <div>
        <Navigation />
        <JumbotronBackground />
        <Ended newDate={newDate}/>
        <Footer />
    </div>
  )
}

export default EndedPage