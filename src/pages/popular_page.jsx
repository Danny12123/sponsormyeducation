import Nav from "../navbar/Navigation"
import Navbar from "../navbar"
import JumbotronBackground from "../sections/jumbotron"
import PopularContent from "../sections/popular_page_content"
import Footer from "../footer"


function PopularPage() {
  return (
    <div>
        <Navbar />
        <Nav />
        <JumbotronBackground />
        <PopularContent />
        <Footer />
    </div>
  )
}

export default PopularPage