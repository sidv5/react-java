const HelloProps = ({ name, age }) => {
    return (
        <div>
            <b>Hello, {name}. You are {age} years old.</b>
        </div>
    )
}

function Destructuring(){
    const props = {
        name: 'John Doe',
        age: 35,
      }

    return(
        <div>
            <h2>Destructuring</h2>
            <HelloProps name={props.name} age={props.age} />
        </div>
    )
}

export default Destructuring