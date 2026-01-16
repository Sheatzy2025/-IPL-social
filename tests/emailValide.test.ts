import { isValidEmail } from "../src/emailValide";

describe('Email Validation', () => {
    test('should return false if no "@" is present', () => {
        expect(isValidEmail("toto")).toBe(false);
    });

    test('should return true for a simple valid email', () => {
        expect(isValidEmail("toto@vinci.be")).toBe(true);
    });

    test('should return false if email contains spaces', () => {
        expect(isValidEmail("toto @vinci.be")).toBe(false);
        expect(isValidEmail("toto@ vinci.be")).toBe(false);
    });

    test('should return false if there is not test after and bfore the @', () => {
        expect(isValidEmail("@vinci.be")).toBe(false);
        expect(isValidEmail("toto@")).toBe(false);
    })

});