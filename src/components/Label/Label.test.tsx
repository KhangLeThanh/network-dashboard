import { render, screen } from "@testing-library/react";
import Label from "./Label";

describe("Label Component", () => {
  it("renders the correct text", () => {
    const text = "Hello World!";
    render(<Label text={text} />);
    const labelElement = screen.getByText(text);
    expect(labelElement).toBeInTheDocument();
  });
});
