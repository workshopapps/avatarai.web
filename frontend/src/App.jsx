import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Aboutus from "./components/aboutus/AboutUs";
import ApiPage from "./components/api-page/ApiPage";
import Avatar from "./components/createAvatar/Welcome";
import Chat from "./components/chat/ChatPage";

import LandingPage from "./components/landing-page/LandingPageC";

import CheckEmail from "./components/LoginPage/CheckEmail";
import CourseDetail from "./components/courses/CourseDetail";
import Courses from "./components/courses/CoursePage";
import Desktop4 from "./components/desktop_4/DD4";
import Desktop2 from "./components/desktop_2/DD2";
import Desktop5 from "./components/desktop_5/Desktop5";
import Desktop3 from "./components/Desktop_3/Desktop3";
import Desktop6 from "./components/desktop_6/Desktop6";
import DesktopEye from "./components/Desktop_1/DesktopEye";
import FAQ from "./components/faq/index";
import ForgotPassword from "./components/LoginPage/ForgotPassword";
import Four404 from "./components/404page/404";

import LoadingImages from "./components/createAvatar/LoadingImages";
import Login from "./components/LoginPage/Login";
import Opt_fi from "./components/sign-up/sign-up_fi";
import Opt_first from "../src/components/sign-up/sign-up_first";
import Opt_for from "../src/components/sign-up/sign-up_for";
import Opt_sec from "../src/components/sign-up/sign-up_sec";
import Opt_thi from "../src/components/sign-up/sign-up_thi";
import Payment from "./components/paymentflow-1/payment";
import Paymentauth from "./components/paymentFlow-1.1/paymentFlow1.1";
import Preview from "./components/generatedAvatars/Preview";
import Pricing from "./components/pricingPage/Pricing";
import Profile from "./components/profile_page/profile_page.component";
import React from "react";
import ReadArticle from "./components/read article/ReadArticle";

import Review from "./components/Review/Review";
import SetPassword from "./components/LoginPage/PasswordReset";
import ResetPassword from "./components/LoginPage/ResetPassword";
import PasswordReset from "./components/LoginPage/PasswordReset";
import Terms from "./components/TermsPage/Terms";
import Ttilp from "./components/TTILP/Ttilp";


import DD2 from "./components/desktop_2/DD2";

// import PaymentFlow12 from './components/paymentFlow-1.2/paymentFlow1.2';
// import './App.css';

// import PaymentFlow11 from './components/paymentFlow-1.1/paymentFlow1.1';

// import React from "react";

// import CareerPage from './components/careers-page/careerPage';

export default function App() {
  return (
    <Router>
      <Routes>
        {/*
          !!!IMPORTANT INFORMATION
          !!!IMPORTANT INFORMATION
          !!!IMPORTANT INFORMATION
          !!!IMPORTANT INFORMATION
          !!!IMPORTANT INFORMATION
          add the path on your page to the live link so yoU can submit 
          e.g. http://noxus.hng.tech/example
          you can find the path to your page in the links below
          DO NOT EDIT ANYTHING HERE JUST COPY THE PATH TO YOUR PAGE
           */}

        {/*  Landing Page */}
        <Route path="/LandingPage" element={<LandingPage />} exact />

        {/* Text to image landing page */}
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/ttilp" element={<Ttilp />} exact />

        {/* Signup components */}
        <Route path="/signupfirst/" element={<Opt_first />} />
        <Route path="/Opt_sec" element={<Opt_sec />} />
        <Route path="/Opt_thi" element={<Opt_thi />} />
        <Route path="/Opt_for" element={<Opt_for />} />
        <Route path="/Opt_fi" element={<Opt_fi />} />

        {/* Navbar components */}
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/FAQ" element={<FAQ />} />

        {/* Terms and conditions */}
        <Route path="/Terms" element={<Terms />} />

        {/* Payment modals */}
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Paymentauth" element={<Paymentauth />} />

        {/* Pricing Component */}
        <Route path="/Pricing" element={<Pricing />} />

        {/* Course Page */}

        {/* Desktop 2 (when the create-avatar link is being clicked from the sidebar)*/}
        <Route path="/Avatar" element={<Avatar />} />

        {/* Desktop 3 */}
        <Route path="/LoadingImages" element={<LoadingImages />} />

        {/* Desktop 4  (Generate Avatar)*/}
        <Route path="/GenerateAvatar" element={<Preview />} />

        <Route path="/Courses" element={<Courses />} />
        <Route path="/details/:detailId" element={<CourseDetail />} />

        {/* 404 Page */}
        <Route path="/Four404" element={<Four404 />} />

        {/* Course Page */}
        <Route path="/Courses" element={<Courses />} />
        {/* <Route path ="/CourseDetail" element={<CourseDetail /> } /> */}

        {/* Profile Page */}
        <Route path="/Profile" element={<Profile />} />

        {/* Readarticle Page */}
        <Route path="/Readarticle" element={<ReadArticle />} />

        {/* ApiPage */}
        <Route path="/ApiPage" element={<ApiPage />} />

        {/* login */}

        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/set-password" element={<SetPassword />} />
        <Route path="password-reset" element={<PasswordReset />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/check-email" element={<CheckEmail />} />

        {/* chat */}
        <Route path="/Chat" element={<Chat />} />

        {/* Career Page */}
        {/* <Route path="/CareerPage" element={<CareerPage />} />*/}

        {/* desktop_1 */}
        <Route path="/Dashboard" element={<DesktopEye />} />

        <Route path="/Dashboard_2" element={<Desktop2 />} />

        {/* desktop_3 */}
        <Route path="/Dashboard_3" element={<Desktop3 />} />

        {/* desktop_4 */}
        <Route path="/Dashboard_4" element={<Desktop4 />} />

        {/* desktop_5 */}
        <Route path="/Dashboard_5" element={<Desktop5 />} />

        {/* desktop_6 */}
        <Route path="/Dashboard_6" element={<Desktop6 />} />
        {/* Feedback page Review */}
        <Route path="/Review" element={<Review />} />

        {/* Feedback page Review */}
        <Route path="/DD2" element={<DD2 />} />
      </Routes>
    </Router>
  );
}
