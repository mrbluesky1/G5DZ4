import {useDispatch} from "react-redux";

export function Calc({resultInfo}) {
    const dispatch = useDispatch()

    return(
        <div className="todo">
            <span>{resultInfo}</span>
        </div>
    )
}