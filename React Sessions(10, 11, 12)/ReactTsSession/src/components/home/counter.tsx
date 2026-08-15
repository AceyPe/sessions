import { useState } from "react"
import { Button } from "../ui/button";

export default function CounterHome({text} : {text: string}) {

    // eslint-disable-next-line prefer-const
    let [counter, setCounter] = useState(0)

    function increment() {
        setCounter(counter++);
    }

    const decrement = () => {
        setCounter(counter--)
    }


    return (
        <div>
            <p>{text}</p>
        <Button onClick={() => increment()}>
            + increment
        </Button>
        <h1>{counter}</h1>
        <Button onClick={()=> decrement()}>
            - decrement
        </Button>

        </div>
    )
}