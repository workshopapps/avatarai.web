import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PaymentFlow12 from "./paymentFlow1.2";

test("close modal display", () => {
  render(<PaymentFlow12 />);

  const buttons = screen.getAllByTestId("cancel-btn");
  const modal = screen.getByTestId("Paymentflow12");
  buttons.forEach(button => {
    fireEvent.click(button);
    expect(modal).toHaveStyle('display: none')
  })
});

test ('input feilds clear on modal toogle', ()=>{
    render(<PaymentFlow12 />);

    const buttons = screen.getAllByTestId("cancel-btn");
    const inputs = screen.getAllByTestId('input')
    
    buttons.forEach(button => {
        fireEvent.click(button);
        inputs.forEach(input => {
            expect(input).toHaveTextContent('')
        })
    })
})