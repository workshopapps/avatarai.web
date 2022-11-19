import "./aboutUs.css";
import Banner from "./img/aboutBg.png";

const AboutUs = () => {
    return (
        <main>
            <section className="dja_banner_section">
                <div className="dja_container">
                    <div className="dja_banner_img">
                        <img src={Banner} alt="Noxus" />
                    </div>
                    <div id="banner_title">
                        <h1>About Us</h1>
                    </div>
                </div>
                <div className="dja_overlay"></div>
            </section>
        </main>
    )
}

export default AboutUs;