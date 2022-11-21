import { render, screen } from "@testing-library/react";
import FaqHero from "./FaqHero";
import FaqGetInTouch from "./FaqGetInTouch";
import FaqNewsletter from "./FaqNewsletter";

describe("App", () => {
  it("Should render FaqHero", () => {
    render(<FaqHero />);
    const heading = screen.getByTestId("heading");
    expect(heading).toHaveTextContent("Frequently Asked Questions");
  });

  it("H3 Should Read", () => {
    render(<FaqGetInTouch />);
    const h3 = screen.getByTestId("h3");
    expect(h3).toHaveTextContent("Still have a question?");
  });

  it("Subheading should read", () => {
    render(<FaqGetInTouch />);
    const subheading = screen.getByTestId("subheading");
    expect(subheading).toHaveTextContent(
      "Can't find the answer you are looking for?"
    );
  });

  it("Newsletter title should read", () => {
    render(<FaqNewsletter />);
    const newsletter = screen.getByTestId("subscribe");
    expect(newsletter).toHaveTextContent(
      "Subscribe to our newsletter for info for new avatar scenes, blogs and updates"
    );
  });
});
