import { isValidEmail } from "../src/emailValide";

describe("Email validation", () => {
  test("valid email should return true", () => {
    expect(isValidEmail("test@example.com")).toBe(true);
  });

  test("email without @ should return false", () => {
    expect(isValidEmail("testexample.com")).toBe(false);
  });

  test("email with space should return false", () => {
    expect(isValidEmail("test @example.com")).toBe(false);
  });

  test("email without domain dot should return false", () => {
    expect(isValidEmail("test@examplecom")).toBe(false);
  });

  test("email without text before @ should return false", () => {
    expect(isValidEmail("@example.com")).toBe(false);
  });

  test("email without text after @ should return false", () => {
    expect(isValidEmail("test@")).toBe(false);
  });
});
