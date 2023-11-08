import Header from "./components/Header/Header"
import Slider from "./components/Slider/Slider"
import Lead from "./components/Lead/Lead"
import ContentFiller from "./components/ContentFiller/ContentFiller"
import Footer from "./components/Footer/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="relative">
          <Slider />
          <Lead />
        </div>
        <ContentFiller />
      </main>
      <Footer />
      <></>
    </>
  )
}
