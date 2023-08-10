
import Navigation from '../navbar/Navigation'
import JumbotronBackground from '../sections/jumbotron'
import Footer from '../footer'
import Featured from '../sections/featured_campaign'


function FeaturedPage({newDate}) {
  console.log(newDate)
  return (
    <div>
        <Navigation/>
        <JumbotronBackground />
        <Featured newDate={newDate}/>
        <Footer />
    </div>
  )
}

export default FeaturedPage