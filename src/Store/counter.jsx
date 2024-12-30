import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./action";

const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return(
        <div>
            <h1>Counter</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <p>{count}</p>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default Counter;