import Nav from "../navbar/navbar"
import Navbar from "../navbar"
import JumbotronBackground from "../sections/jumbotron"
import LoginForm from "../reusable-components/login_form"
import Footer from "../footer"

function LoginPage() {
  return (
    <>
        <Navbar />
        <Nav />
        <JumbotronBackground />
        <LoginForm />
        <Footer />
    </>
  )
}

export default LoginPage