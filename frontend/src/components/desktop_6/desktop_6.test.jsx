import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Frame from './Frame_4.jsx';
import Images from './image.jsx';
import {BrowserRouter as Router} from 'react-router-dom';


describe('Dashboard_6', () =>{

    test(' renders corrrectly', () => {
        render(
            <Router>
                <Frame />
            </Router>,
        );
        const textElement= screen.getByText('Your Avatars are Ready')
        expect(textElement).toBeInTheDocument()
    });

    test('Images renders corrrectly', () => {
        render(
            <Images src='../../../public/images/Frame_0.png' />
        );
        // const textElement= screen.getByText('Your Avatars are Ready')
        // expect(textElement).toBeInTheDocument()
    });


});
