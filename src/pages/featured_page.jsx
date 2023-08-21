
import Navigation from '../navbar/Navigation'
import JumbotronBackground from '../sections/jumbotron'
import Footer from '../footer'
import Featured from '../sections/featured_campaign'


function FeaturedPage() {
  return (
    <div>
        <Navigation/>
        <JumbotronBackground />
        <Featured />
        <Footer />
    </div>
  )
}

export default FeaturedPage