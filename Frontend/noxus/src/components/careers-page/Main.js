//import Intro from './Main';
//import Subscribe from './Subscribe';
//import Footer from './Footer';
//import Navbar from './Navbar';
import img from './images/tapart2.png';

const Main = () => {
    return (
        <div>
            <p className="text-center text-3xl font-semibold mt-3 mb-8">Careers at Nexus</p>
            <div className="flex flex-row justify-evenly mb-20">
                <div id="first-div">
                    <div className="flex flex-row space-x-10 mb-6 items-center justify-between">
                        <div className="text-left">
                            <p className="text-xs text-[#808080] mb-3">TECH DEPARTMENT</p>
                            <h2 className="font-semibold mb-3">Senior software developer</h2>
                            <p className="text-emerald-500 text-xs font-semibold mb-3">NGN 600,000 - NGN 800,000</p>
                        </div>
                        <div className="items-end">
                            <span className="text-purple-500 text-sm font-semibold">Apply Now</span>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-10 mb-6 items-center justify-between">
                        <div className="text-left">
                            <p className="text-xs text-[#808080] mb-3">HR DEPARTMENT</p>
                            <h2 className="font-semibold mb-3">Talent manager</h2>
                            <p className="text-emerald-500 text-xs font-semibold mb-3">NGN 600,000 - NGN 800,000</p>
                        </div>
                        <div className="items-end">
                            <span className="text-purple-500 text-sm font-semibold">Apply Now</span>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-10 mb-6 items-center justify-between">
                        <div className="text-left">
                            <p className="text-xs text-[#808080] mb-3">DESIGN</p>
                            <h2 className="font-semibold mb-3">Senior product designer</h2>
                            <p className="text-emerald-500 text-xs font-semibold mb-3">NGN 600,000 - NGN 800,000</p>
                        </div>
                        <div className="items-end">
                            <span className="text-purple-500 text-sm font-semibold">Apply Now</span>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-10 mb-6 items-center justify-between">
                        <div className="text-left">
                            <p className="text-xs text-[#808080] mb-3">DESIGN</p>
                            <h2 className="font-semibold mb-3">Brand identity designer</h2>
                            <p className="text-emerald-500 text-xs font-semibold mb-3">NGN 600,000 - NGN 800,000</p>
                        </div>
                        <div className="items-end">
                            <span className="text-purple-500 text-sm font-semibold">Apply Now</span>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-10 mb-6 items-center justify-between">
                        <div className="text-left">
                            <p className="text-xs text-[#808080] mb-3">TECH DEPARTMENT</p>
                            <h2 className="font-semibold mb-3">Senior software developer</h2>
                            <p className="text-emerald-500 text-xs font-semibold mb-3">NGN 600,000 - NGN 800,000</p>
                        </div>
                        <div className="items-end">
                            <span className="text-purple-500 text-sm font-semibold">Apply Now</span>
                        </div>
                    </div>
                </div>
                <div id="second-div" className="text-right">
                    <p className="text-xs font-semibold text-emerald-500 mb-4">We Are Hiring</p>
                    <div>
                        <h2 className="text-xl font-bold mb-5">Pick a plan and create your AI <br/>generated Avatars</h2>
                    </div>
                    <div className="text-sm text-[#5A5A5A]">
                        <p className="mb-5">Our vision to make it easier for people to be able to envision and see<br/>
                            themselves in the different ways they can imagine one Avatar at a<br/>
                            time. We build our customers a world-class avatar systems their users<br/>
                            deserve.
                        </p>
                        <p className="mb-4">
                            Noxus help users create an avatar they can use across many virtual<br/>
                            experiences and give developers an easy-to-use tool for building<br/>
                            avatar-based experiences.<br/>
                        </p>
                    </div>
                    <div>
                        <img src={img} alt="background logo" />
                    </div>
                </div>
            </div>
            <div>
                <div class="flex flex-col justify-evenly">
                    <div className="text-left ml-[12%]">
                        <h1 className="font-bold text-2xl mb-10">Perks & Benefits</h1>
                    </div>
                    <div className="flex flex-row justify-evenly">
                        <div className="text-left">
                            <div>
                                <span></span>
                                <h2 className="font-medium text-l mb-3">Worklife balance</h2>
                                <p className="text-sm text-[#5A5A5A] mb-9">We offer an open vacation policy with a recommended 4-weeks per <br />year. Recharge whenever you need to.</p>
                            </div>
                            <div>
                                <span></span>
                                <h2 className="font-medium text-l mb-3">Health care package</h2>
                                <p className="text-sm text-[#5A5A5A] mb-9">We care about your well-being and offer dental and vision benefits for <br />you and your family. No stress on health expenses.</p>
                            </div>
                            <div>
                                <span></span>
                                <h2 className="font-medium text-l mb-3">Worklife balance</h2>
                                <p className="text-sm text-[#5A5A5A] mb-9">We help you grow in your career with ongoing mentorship, and send <br />you to events so you can build your network.</p>
                            </div>
                        </div>
                        <div className="text-left">
                            <div>
                                <span></span>
                                <h2 className="font-medium text-l mb-3">Worklife balance</h2>
                                <p className="text-sm text-[#5A5A5A] mb-9">We offer an open vacation policy with a recommended 4-weeks per <br />year. Recharge whenever you need to.</p>
                            </div>
                            <div>
                                <span></span>
                                <h2 className="font-medium text-l mb-3">Health care package</h2>
                                <p className="text-sm text-[#5A5A5A] mb-9">We care about your well-being and offer dental and vision benefits for <br />you and your family. No stress on health expenses.</p>
                            </div>
                            <div>
                                <span></span>
                                <h2 className="font-medium text-l mb-3">Worklife balance</h2>
                                <p className="text-sm text-[#5A5A5A] mb-9">We help you grow in your career with ongoing mentorship, and send <br />you to events so you can build your network.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Main;