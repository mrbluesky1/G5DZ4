import {isElementOfType} from "react-dom/test-utils";

const initialState = {
    result: []
}

export function reducer(state = initialState, action) {
    if  (action.type === "NUMBER_PLUS") {
        if (action.payload.num1 === 0 || action.payload.num2 === 0) {return {...state, result: "Введите оба числа"}}
        return {...state, result: action.payload.num1 + action.payload.num2}
    }
    else if (action.type === "NUMBER_MINUS") {
        if (action.payload.num1 === 0 || action.payload.num2 === 0) {return {...state, result: "Введите оба числа"}}
        return {...state, result: action.payload.num1 - action.payload.num2}
    }
    else if (action.type === "NUMBER_MULTIPLICATION") {
        if (action.payload.num1 === 0 || action.payload.num2 === 0) {return {...state, result: "Введите оба числа"}}
        return {...state, result: action.payload.num1 * action.payload.num2}
        }
    else if (action.type === "NUMBER_DIVISION") {
        if (action.payload.num1 === 0 || action.payload.num2 === 0) {return {...state, result: "Введите оба числа"}}
        else if (action.payload.num2 === 0) {
            return {...state, result: "на ноль делить нельзя"}
        }
        return {...state, result: action.payload.num1 / action.payload.num2}
    }
    return state
}