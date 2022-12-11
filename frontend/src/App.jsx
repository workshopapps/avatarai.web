import * as Sentry from '@sentry/react';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Aboutus from './components/aboutus/AboutUs';
import ApiPage from './components/api-page/ApiPage';
import Avatar from './components/createAvatar/Welcome';
import Chat from './components/chat/ChatPage';

import LandingPage from './components/landing-page/LandingPageC';

import CheckEmail from './components/LoginPage/CheckEmail';
import CourseDetail from './components/courses/CourseDetail';
import Courses from './components/courses/CoursePage';
import DesktopEye from './components/Desktop_1/DesktopEye';
import FAQ from './components/faq/index';
import ForgotPassword from './components/LoginPage/ForgotPassword';
import Four404 from './components/404page/404';

import LoadingImages from './components/createAvatar/LoadingImages';
import Login from './components/LoginPage/Login';
import Opt_fi from './components/sign-up/sign-up_fi';
import Opt_first from '../src/components/sign-up/sign-up_first';
import Opt_for from '../src/components/sign-up/sign-up_for';
import Opt_sec from '../src/components/sign-up/sign-up_sec';
import Opt_thi from '../src/components/sign-up/sign-up_thi';
import Payment from './components/paymentflow-1/payment';
import Paymentauth from './components/paymentFlow-1.1/paymentFlow1.1';
import Preview from './components/generatedAvatars/Preview';
import Pricing from './components/pricingPage/Pricing';
import React from 'react';
import ReadArticle from './components/read article/ReadArticle';

import Review from './components/Review/Review';
import SetPassword from './components/LoginPage/PasswordReset';
import ResetPassword from './components/LoginPage/ResetPassword';
import PasswordReset from './components/LoginPage/PasswordReset';
import Terms from './components/TermsPage/Terms';
import Ttilp from './components/TTILP/Ttilp';
import Contact from './components/Contact_page/Contact';

import Guidelines from './components/guidelinePage/Guideline.jsx';
import { useAuth } from '../context/auth-context';
import { PrivateRoute } from './routes/PrivateRoute';
import { useEffect } from 'react';
import Profile2 from './components/Profile/Profile';

// import PaymentFlow12 from './components/paymentFlow-1.2/paymentFlow1.2';
// import './App.css';

// import PaymentFlow11 from './components/paymentFlow-1.1/paymentFlow1.1';

// import React from "react";

// import CareerPage from './components/careers-page/careerPage';

function App() {
	return (
		<Routes>
			{/*
          !!!IMPORTANT INFORMATION
          !!!IMPORTANT INFORMATION
          !!!IMPORTANT INFORMATION
          !!!IMPORTANT INFORMATION
          !!!IMPORTANT INFORMATION
          add the path on your page to the live link so yoU can submit 
          e.g. http://AvatarAI.hng.tech/example
          you can find the path to your page in the links below
          DO NOT EDIT ANYTHING HERE JUST COPY THE PATH TO YOUR PAGE
           */}
			{/* Text to image landing page */}
			<Route path="/" element={<LandingPage />} exact />
			{/* Signup components */}
			<Route path="/signup" element={<Opt_first />} />
			<Route path="/Opt_sec" element={<Opt_sec />} />
			<Route path="/Opt_thi" element={<Opt_thi />} />
			<Route path="/Opt_for" element={<Opt_for />} />
			<Route path="/Opt_fi" element={<Opt_fi />} />
			{/* Navbar components */}
			<Route path="/aboutus" element={<Aboutus />} />
			<Route path="/faq" element={<FAQ />} />
			{/* Terms and conditions */}
			<Route path="/Terms" element={<Terms />} />
			{/* Payment modals */}
			<Route path="/payment" element={<Payment />} />
			<Route path="/paymentauth" element={<Paymentauth />} />
			{/* Pricing Component */}
			<Route path="/pricing" element={<Pricing />} />
			{/* Course Page */}

			<Route path="/courses" element={<Courses />} />
			<Route path="/details/:detailId" element={<CourseDetail />} />

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
			<Route path="/Review" element={<Review />} />
			<Route path="/contact-us" element={<Contact />} />
			<Route path="/guidelines" element={<Guidelines />} />

			<Route element={<PrivateRoute />}>
				<Route path="/dashboard" element={<DesktopEye />} />
				<Route path="/profile" element={<Profile2 />} />
				<Route path="/generate-avatar" element={<Preview />} />
			</Route>

			<Route path="*" element={<Four404 />} />
		</Routes>
	);
}

// export default App;
export default Sentry.withProfiler(App);
