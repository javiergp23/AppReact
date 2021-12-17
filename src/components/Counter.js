import React, { useState } from "react";

const useCounter = () => {
    const [counter, setCounter] = useState(0);

    const increase = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter -1);
    const reset = () => setCounter(0);

    return {
        counter,
        increase,
        decrement,
        reset
    }

}

export default function App() {
    const {counter, increase, decrement, reset} = useCounter()

    return (
        <div className="contador">
            <div>{counter}</div>
            <button onClick={increase}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}