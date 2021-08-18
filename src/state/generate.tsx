import { Task } from "./model"

export const getRandomInteger = (range: number) => Math.round(Math.random() * range)

export const chars = "abcdefghijklmnopqrstuvwxyz"
export const getRandomIndex = () => getRandomInteger(chars.length - 1)
export const getRandomChar = () => chars[getRandomIndex()]
export const getRandomString = (length: number) => {
    let str = ""
    for (let i = 0; i < length; i++) { str += getRandomChar() }
    return str
}
export const getRandomWord = (length: number) => getRandomString(getRandomInteger(length))
export const getRandomSentence = (length: number) => {
    let sentence = ""
    for (let i = 0; i < length; i++) {
        sentence += getRandomWord(getRandomInteger(20))
        if (i !== length) sentence += " "
    }
    return sentence
}
export const getRandomSentenceOfRandomLength = () => getRandomSentence(getRandomInteger(100))

export const generateTasks = (count: number) => [...Array(count)].map<Task>((v, i) => ({ id: getRandomString(20), data: getRandomSentenceOfRandomLength() }))