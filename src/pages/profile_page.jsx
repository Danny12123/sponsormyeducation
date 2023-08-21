import Navigation from "../navbar/Navigation"
import JumbotronBackground from "../sections/jumbotron"
import Footer from "../footer"
import Profile from "../sections/profile"

function ProfilePage() {
  return (
    <div>
        <Navigation />
        <JumbotronBackground />
        <Profile />
        <Footer />
    </div>
  )
}

export default ProfilePage