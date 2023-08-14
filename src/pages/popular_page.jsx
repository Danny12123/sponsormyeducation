import Navigation from "../navbar/Navigation"
import JumbotronBackground from "../sections/jumbotron"
import PopularContent from "../sections/popular_page_content"
import Footer from "../footer"


function PopularPage() {
  return (
    <div>
      
        <Navigation />
        <JumbotronBackground />
        <PopularContent />
        <Footer />
    </div>
  )
}

export default PopularPage