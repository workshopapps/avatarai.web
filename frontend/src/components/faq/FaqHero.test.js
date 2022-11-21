import { render, screen } from "@testing-library/react";
import FaqHero from "./FaqHero";

describe("App", () => {
  it("Should work as expected", () => {
    expect(1 + 1).toBe(2);
  });

  it("Should render FaqHero", () => {
    render(<FaqHero />);

    const heading = screen.getByTestId("heading");
    expect(heading).toHaveTextContent("Frequently Asked Questions");
  });
});
