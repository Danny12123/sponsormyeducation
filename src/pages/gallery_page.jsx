import Nav from "../navbar/Navigation"
import Navbar from "../navbar"
import JumbotronBackground from "../sections/jumbotron"
import Gallery from "../sections/gallery"
import Footer from "../footer"


function GalleryPage() {
  return (
    <div>
        <Navbar />
        <Nav />
        <JumbotronBackground />
        <Gallery/>
        <Footer />
    </div>
  )
}

export default GalleryPage