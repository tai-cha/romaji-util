export const VOWELS = ['A', 'E', 'I', 'O', 'U']

export const replaceChar = (target, position, char, length=1) => {
    return target.slice(0, position) + char + target.slice(position + length)
}
export const removeChar = (target, position) => {
    return target.slice(0, position) + target.slice(position + 1)
}