// This component does not contain destructuring
const Greeting = (props) => <div><p>Hello, {props.name}. You are {props.age} years old.</p></div>

// This component uses destructuring
// The property names used in the calling tags and destructured property names in the destructuring component must match
const HelloProps = ({ name, age }) => <Greeting name={name}  age={age} />
const HelloPropsWithDefault = ({ name = 'John Doe', age = 40 }) => <Greeting name={name}  age={age} />


export default function Destructuring(){
    const props = {
        name: 'Fred',
        age: 20,
      }

    return(
        <div>
            <h2>Destructuring</h2>
            <h4>• Passing values through tags</h4>
            <HelloProps name={props.name} age={props.age} />
            <br/>

            <h4>• Destructuring with Default values</h4>
            <HelloPropsWithDefault />
            <br/>

            <h4>• Destructuring with Spread syntax</h4>
            <HelloProps {...props} />

        </div>
    )
}