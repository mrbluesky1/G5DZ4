import {useSelector, useDispatch} from "react-redux";
import {useState} from "react";

export default function Calculator() {
    const dispatch = useDispatch()
    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")

    const {result} = useSelector(state => state)

    const plus = () => {
        dispatch({
            type: "NUMBER_PLUS",
            payload: {num1: Number(num1), num2: Number(num2)}
        })
    }

    const minus = () => {
        dispatch({
            type: "NUMBER_MINUS",
            payload: {num1: Number(num1), num2: Number(num2)}
        })
    }
    const multiplication = () => {
        dispatch({
            type: "NUMBER_MULTIPLICATION",
            payload: {num1: Number(num1), num2: Number(num2)}
        })
    }
    const division = () => {
        dispatch({
            type: "NUMBER_DIVISION",
            payload: {num1: Number(num1), num2: Number(num2)}
        })
    }

    return(
        <div>
            <div>
                <input type="number" onChange={(event) => setNum1(event.target.value)}/>
                <input type="number" onChange={(event) => setNum2(event.target.value)}/>
                <button onClick={plus}>+</button>
                <button onClick={minus}>-</button>
                <button onClick={multiplication}>*</button>
                <button onClick={division}>/</button>
            </div>
            <div>
                <span>{result}</span>
            </div>
        </div>
    )
}