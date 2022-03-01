import { validateLink } from "./validateLink";

describe("Link validation", () => {
  test("Invalid link passed", () => {
    expect(validateLink("google.com")).toBeFalsy();
    expect(validateLink("")).toBeFalsy();
  });

  test("Valid link passed", () => {
    expect(validateLink("http://google.com")).toBeTruthy();
    expect(validateLink("https://google.com")).toBeTruthy();
  });
});
