import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { FieldError } from "./FieldError";

describe("FieldError component", () => {
  test("To be null, if error text is empty", () => {
    render(<FieldError text="" />);
    const error = screen.queryByTestId("field-error-text");

    expect(error).not.toBeInTheDocument();
  });

  test("Displays error, if text is passed", () => {
    const errorText = "Some error";

    render(<FieldError text={errorText} />);
    const error = screen.queryByTestId("field-error-text");

    expect(error).toBeInTheDocument();
    expect(error).toHaveTextContent(errorText);
  });
});
