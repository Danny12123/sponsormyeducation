import Navigation from "../navbar/Navigation"
import JumbotronBackground from "../sections/jumbotron"
import Health from "../sections/health"
import Footer from "../footer"

function HealthPage() {
  return (
    <div>
        <Navigation />
        <JumbotronBackground />
        <Health />
        <Footer />
    </div>
  )
}

export default HealthPage