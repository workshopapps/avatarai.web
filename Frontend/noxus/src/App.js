import About from "./components/landing-page/about/About";
import Benefits from "./components/landing-page/benefits/Benefits";
import Cta from "./components/landing-page/cta/Cta";
import Footer from "./components/landing-page/footer/Footer";
import Header from "./components/landing-page/header/header/Header";
import Main from "./components/landing-page/main/Main";
import SocialProof from "./components/landing-page/socialproof/SocialProof";

function App() {
return(
  <div>
    <Header />
    <Main />
    <Cta />
    <Benefits />
    <SocialProof />
    <About/>
    < Footer />
  </div>
)
}

export default App;
