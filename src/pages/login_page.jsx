import Navigation from "../navbar/Navigation"

import JumbotronBackground from "../sections/jumbotron"
import LoginForm from "../reusable-components/login_form"
import Footer from "../footer"

function LoginPage() {
  return (
    <>
        <Navigation />
        <Navigation />
        <JumbotronBackground />
        <LoginForm />
        <Footer />
    </>
  )
}

export default LoginPage