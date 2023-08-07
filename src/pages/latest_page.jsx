
import Navigation from '../navbar/Navigation'
import JumbotronBackground from '../sections/jumbotron'
import Footer from '../footer'
import New from '../reusable-components/new'


function LatestCampaign({newDate}) {
    console.log(newDate)
  return (
    <div>
        <Navigation />
        <JumbotronBackground />
        <New newDate={newDate}/>
        <Footer />
    </div>
  )
}

export default LatestCampaign