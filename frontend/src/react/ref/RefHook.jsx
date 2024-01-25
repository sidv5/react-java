import { useRef, useState } from "react";

const RefButtonDemo = () => {
    let ref = useRef(0);

    console.log("RefButtonDemo Rendered");

    function handleClick() {
        ref.current = ref.current + 1;
        alert('You clicked ' + ref.current + ' times!');
    }
    return (
        <>
            <h4>• Adding Ref to a component</h4>
            <p>useRef does not trigger a re-render of the components.</p>
            <button onClick={handleClick}>Click me!</button>
        </>

    )
}

const Stopwatch = () => {
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);

    console.log("Stopwatch Rendered");

    function handleStart() {
        setStartTime(Date.now());
        setNow(Date.now());

        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }
    
    function handleStop() {
        clearInterval(intervalRef.current);
    }

    let secondsPassed = 0;
    if (startTime != null && now != null) {
        secondsPassed = (now - startTime) / 1000;
    }

    return (
        <>
            <h4>• Using useRef and useState together</h4>
            <p>Each interval change will trigger re-rendering with useState.</p> 
            <p>But useRef can be used to mainain the value of the current interval.</p>
            <b>Time passed: {secondsPassed.toFixed(3)}</b>
            <br/>
            <button style={{marginRight: 5}} onClick={handleStart}>
                Start
            </button>
            <button onClick={handleStop}>
                Stop
            </button>
        </>
    );
}

const ManipulatingDOMFocus = () => {

    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current.focus();
    }
  
    return (
      <>
        <h4>• Manipulating DOM with useRef</h4>
        <p>useRef can be passed to a DOM using the 'ref' attribute</p>
        <p>This reference can be used to perform actions on the DOM based on a trigger</p>
        <p>In the example below, the input box gets focused when the button is pressed</p>
        <input ref={inputRef} />
        <button onClick={handleClick}>
            Focus the input
        </button>
      </>
    );
}

export default function RefHook() {
    return (
        <>
            <h2>Ref Hooks (useRef)</h2>
            <br />
            <RefButtonDemo />
            <br /><br />
            <Stopwatch />
            <br /><br />
            <ManipulatingDOMFocus />
        </>
    )
}