import Navigation from "../navbar/Navigation";

import JumbotronBackground from "../sections/jumbotron";
import Gallery from "../sections/gallery";
import Footer from "../footer";

function GalleryPage() {
  return (
    <div>
      <Navigation />
      <JumbotronBackground />
      <Gallery />
      <Footer />
    </div>
  );
}

export default GalleryPage;
