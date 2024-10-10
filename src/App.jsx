import About from "./Component/About/About"
import Campus from "./Component/Campus/Campus"
import Contact from "./Component/Contact/Contact"
import Footer from "./Component/Footer/Footer"
import Hero from "./Component/Hero/Hero"
import Nav from "./Component/Nav/Nav"
import Programs from "./Component/Programs/Programs"
import Testi from "./Component/Testimonials/Testi"
import Title from "./Component/Title/Title"



function App() {


  return (
    <>
      <Nav />
      <Hero />
      <div className="container">
        <Title subTitle='Our PROGRAM' title="What We Offer" />
        <Programs />
        <About />
        <Title subTitle='Gallrey' title="Campus Photo" />
        <Campus />
        <Title subTitle="TESTIMONIALS" title="What Students Says" />
        <Testi />
        <Title subTitle="Contact Us" title="Get In Touch" />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App;
