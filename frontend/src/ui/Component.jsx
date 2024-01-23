const DynamicContent = () => {
    
    const text = "World!"
    const a = 10
    const b = 20
    const now = new Date()

    return(
        <>
            <div>
                <h3>Rendering Dynamic Content</h3>
                <p>Hello, {text}</p>
                <p>10 + 20 = {a+b}</p>
                <p>Timestamp: {now.toString()}</p>
            </div>
        </>
    )
};


const HelloProps = (props) => {
    return (
        <div>
            <p>Hello, {props.name}. You are {props.age} years old.</p>
        </div>
    )
}

const ComponentWithData = () => {
    const names = [
        {name:"Alice", age: 10}, 
        {name:"Bob",   age: 20},
        {name:"Clara", age: 30}]

    return (
        <div>
            <h3>Passing Data/Properties to a Component</h3>
            <HelloProps name={names[0].name} age={names[0].age} />
            <HelloProps name={names[1].name} age={names[1].age}/>
            <HelloProps name={names[2].name} age={names[2].age}/>
        </div>
    )
}

const AdditionalNotes = () => {
    const names = [
        {name:"Alice", age: 10}, 
        {name:"Bob",   age: 20},
        {name:"Clara", age: 30}]

    return (
        <div>
            <h3>Passing Data/Properties to a Component</h3>
            <HelloProps name={names[0].name} age={names[0].age} />
            <HelloProps name={names[1].name} age={names[1].age}/>
            <HelloProps name={names[2].name} age={names[2].age}/>
        </div>
    )
}

function Component(){

    return(
        <>
            <h2>Component</h2>
            <DynamicContent />
            <br/>
            <ComponentWithData />
        </>
    )
} 

export default Component