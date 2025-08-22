import capitalize from "./capitalize"

test("checking for capital first letter", () => {
    expect(capitalize('hello')).toBe('Hello')
})