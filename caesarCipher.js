export default function caesarCipher(str, shift) {
    const alphabet = '.,?!abcdefghijklmnopqrstuvwxyz0123456789'
    const CHAR_SET_LENGTH = alphabet.length
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        const lower = char.toLowerCase()
        const idx = alphabet.indexOf(lower)
        if (idx === -1) {
            // non-alphabetic characters are preserved
            newStr += char
        } else {
            // handle wrap-around and preserve case
            const shifted = alphabet[(idx + (shift % CHAR_SET_LENGTH) + CHAR_SET_LENGTH) % CHAR_SET_LENGTH]
            newStr += char === lower ? shifted : shifted.toUpperCase()
        }
    }
    return newStr
}