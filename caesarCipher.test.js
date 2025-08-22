import caesarCipher from "./caesarCipher";

test("test agoth as an input string", () => {
    expect(caesarCipher('agoth', 4)).toBe('eksxl')
})

test("test non-alphanumerics", () => {
expect(caesarCipher('8.!?', 12)).toBe('gilk')
})