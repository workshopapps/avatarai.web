import WhyUsCard from "./WhyUsCard";
import TeamMemberCard from "./TeamMemberCard";
import "./aboutUs.css";
import Banner from "./img/aboutBg.png";
import PolygonLeft from "./img/polygonLeft.png";
import PolygonRight from "./img/polygonRight.png";

import { WHY_US, TEAM } from "./data";

const AboutUs = () => {
    return (
        <main>
            <section className="dja_banner_section">
                <div className="dja_container">
                    <div className="dja_banner_img">
                        <img src={Banner} alt="Noxus" />
                    </div>
                    <div id="banner_title">
                        <h1>About <span>Us</span></h1>
                    </div>
                </div>
                <div className="dja_overlay"></div>
            </section>

            <section className="dja_mission_section">
                <div className="dja_container">
                    <p>We are on a mission to change the face of art creation. Creating an online identity hasn't been easy, especially if you are trying to protect your physical appearance. Most methods of art creation require skills , you have to learn and practice the skills involved or else you won't be able to experience the satisfaction of online data protection.</p>
                    <p>At Noxus , we create tools that allow anyone with an online presence - regardless of skill level - to experience the joy of having their physical appearance data protected online.</p>
                    <p>Our AI-powered avatar generator allows users to create multiple images of themselves in multiple environments and different backgrounds. Using artificial intelligence, customers can create avatars that live in a virtual setting, like a game, social network, dating app or the online world.</p>
                </div>
            </section>

            <section className="dja_story_section">
                <div className="dja_container">
                    <h2 className="dja_title">Our Story</h2>
                    <div className="dja_story_text_wrap">
                        <p>Noxus was founded by a team of creatives in November 2022, this team was founded in the year 2022 during the most powerful internship in the world (HNG). What brought the team together was a spark of ideas, and an idea to help online users to have enough physical privacy on any online forum.</p>
                        <p>Having known that AI Art has been a thing for years, the team taught "maybe we can create a software that can generate multiple images of themselves in multiple environments and different backgrounds" and the rest is history.</p>
                        <p>Now online users get to protect their physical identity on any social platform , get to create physical characters that look like them, improve their user experience , and help them to maintain anonymity in a virtual environment. <br/>"Physical Appearance Privacy Is Crucial, And Noxus Is Making It Possible."<br/> Team Tape.</p>
                    </div>
                </div>
                <div className="dja_story_design_wrap" id="dja_design_1">
                    <img src={PolygonLeft} alt="story"/>
                </div>
                <div className="dja_story_design_wrap" id="dja_design_2">
                    <img src={PolygonRight} alt="story"/>
                </div>
            </section>

            <section className="dja_why_section">
                <div className="dja_container">
                    <h2 className="dja_title">Why Us?</h2>
                    <div className="dja_why_ctn">
                        {
                            WHY_US.map(item => <WhyUsCard title={item.title} content={item.content}/>)
                        }
                    </div>
                </div>
            </section>

            <section className="dja_team_section">
                <div className="dja_container">
                    <h2 className="dja_title">Our Team</h2>
                    <div className="dja_team_ctn">
                        {
                            TEAM.map((item, i) => <TeamMemberCard name={item.name} index={i} role={item.role}/>)
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}

export default AboutUs;