import Navigation from "../navbar/Navigation"
import JumbotronBackground from "../sections/jumbotron"
import Footer from "../footer"
import Profile from "../sections/profile"

function ProfilePage({newDate,userEmail}) {
  return (
    <div>
        <Navigation />
        <JumbotronBackground />
        <Profile newDate={newDate}/>
        <Footer />
    </div>
  )
}

export default ProfilePage