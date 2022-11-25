import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Signupfirst from './sign-up_first.jsx';
import Signupsec from './sign-up_sec.jsx';
import Signupthi from './sign-up_thi.jsx';
import {BrowserRouter as Router} from 'react-router-dom';

describe('signup', () =>{
    test('first signup renders corrrectly', () => {
        render(
            <Router>
                <Signupfirst />
            </Router>,
        );
        const nameElement=screen.getByRole('textbox',{name: "First name"})
        expect(nameElement).toBeInTheDocument();
        const lastNameElement=screen.getByRole('textbox',{name: "Last name"})
        expect(lastNameElement).toBeInTheDocument();
        const emailElement=screen.getByRole('textbox',{name: "Email"})
        expect(emailElement).toBeInTheDocument();
        const textElement= screen.getByText('Get Started With A Free Account')
        expect(textElement).toBeInTheDocument()
        const submitButton=screen.getByRole('button')
        expect(submitButton).toBeInTheDocument()
    });
    test('Second signup renders corrrectly', () => {
        render(
            <Router>
                <Signupsec />
            </Router>,
        );
        const image2Element=screen.getByAltText('logo.png')
        expect(image2Element).toBeInTheDocument();
        const imageElement=screen.getByAltText('mail.png')
        expect(imageElement).toBeInTheDocument();
        const textElement= screen.getByRole('link')
        expect(textElement).toBeInTheDocument()
        const submitButton=screen.getByRole('button')
        expect(submitButton).toBeInTheDocument()
    });
    test('Third signup renders corrrectly', () => {
        render(
            <Router>
                <Signupthi />
            </Router>,
        );
        const image2Element=screen.getByAltText('logo.png')
        expect(image2Element).toBeInTheDocument();
        const imageElement=screen.getByAltText('tick.png')
        expect(imageElement).toBeInTheDocument();
        const textElement= screen.getByRole('link')
        expect(textElement).toBeInTheDocument()
        const submitButton=screen.getByRole('button')
        expect(submitButton).toBeInTheDocument()
        const textElement2= screen.getByText('Your e-mail verification was successfully. You are very close to completing your account setup.')
        expect(textElement2).toBeInTheDocument()
    });
});
