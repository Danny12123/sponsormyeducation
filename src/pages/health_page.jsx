import Navigation from "../navbar/Navigation"
import JumbotronBackground from "../sections/jumbotron"
import Health from "../sections/health"
import Footer from "../footer"

function HealthPage({newDate}) {
  return (
    <div>
        <Navigation />
        <JumbotronBackground />
        <Health newDate={ newDate}/>
        <Footer />
    </div>
  )
}

export default HealthPage