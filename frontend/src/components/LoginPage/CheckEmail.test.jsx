import { render, screen } from "@testing-library/react"
import CheckEmail from '../LoginPage/CheckEmail';

test('should render CheckEmail', ()=>{
render(<CheckEmail />);

const labelButton = screen.getByRole('button');
expect(labelButton).toBeInTheDocument();
})