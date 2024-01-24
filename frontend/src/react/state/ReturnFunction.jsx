// This is a factory that creates an Alert function 
export const createAlert = (alertText) => () => alert(alertText)

// This is a factory that creates an Console.log function
const printValue = (value) => () => console.log(value)

export default function ReturnFunction(){
    return(
        <div>
            <h2>Function that returns a function</h2>
            <button style={{margin: 5}} onClick={printValue("Hello World")}>Hello World</button>
            <button style={{margin: 5}} onClick={printValue("Hello Everyone")}>Hello Everyone</button>
            <button style={{margin: 5}} onClick={printValue("Welcome")}>Welcome</button>
        </div>
    )
}