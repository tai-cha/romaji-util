export const VOWELS = ['A', 'E', 'I', 'O', 'U']

export const replaceChar = (target, position, char) => {
    return target.slice(0, position) + char + target.slice(position + 1)
}
export const removeChar = (target, position) => {
    return target.slice(0, position) + target.slice(position + 1)
}