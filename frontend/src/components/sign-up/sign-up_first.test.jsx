import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Signupfirst from './sign-up_first.jsx';
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
});
