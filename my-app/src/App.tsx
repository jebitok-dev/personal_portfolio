import Footer from "./components/Footer"
import Form from "./components/Form"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import RecentWork from "./components/RecentWork"
import Resume from "./components/Resume"
import Skills from "./components/Skills"

export default function App() {

  return (
    <section className="flex text-white">
      <Navbar />
      <Header />
      <RecentWork />
      <Resume />
      <Skills />
      <Form />
      <Footer />
    </section>
  )
}




