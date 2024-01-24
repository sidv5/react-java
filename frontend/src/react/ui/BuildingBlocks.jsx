const StaticContent = () => {
    return(
        <div>
            <h3>Static Content</h3>

            <h4>• List</h4>
            <ol style={{marginLeft: 30}}>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ol>
            <br/>

            <h4>• Import & Export Component</h4>
            <p>Define a component : <span style={{fontFamily: 'monospace'}}>function FunctionName() {'{'}{'}'}</span></p>
            <p>Export a component : <span style={{fontFamily: 'monospace'}}>export default FunctionName</span></p>
            <p>Import a component : <span style={{fontFamily: 'monospace'}}>import FunctionName from './path/to/component'</span></p>
            <p>Use an imported component : <span style={{fontFamily: 'monospace'}}>{'<'}FunctionName /{'>'}</span></p>
            <br/>

            <h4>• Rendering Images</h4>
            <img style={{height: 100}}
                src="https://froala.com/wp-content/uploads/2019/11/post41.svg" alt="Javascript" />
            <br/><br/>

        </div>
    )
}

const DynamicContent = () => {
    const imgSrc = "https://froala.com/wp-content/uploads/2019/11/post41.svg";
    const imgAlt = "Javascript";
    const text = "World!";
    const a = 10;
    const b = 20;
    const now = new Date();

    const curlyObj = {
        name: 'John Doe',
        theme: {
          backgroundColor: 'black',
          color: 'pink',
          maxWidth: 200
        }
    } 
    return(
        <div>
            <h3>Rendering Dynamic Content</h3>

            <h4>• Passing values to tags with {'{'} {'}'}</h4>
            <p><b>img src: </b>{imgSrc}</p>
            <p><b>img alt: </b>{imgAlt}</p>
            <img style={{height: 100}}
                src={imgSrc} alt={imgAlt} />
            <p>Hello, {text}</p>
            <p>10 + 20 = {a+b}</p>
            <p>Timestamp: {now.toString()}</p>
            <br/>

            <h4>• Passing objects with {'{{'} {'}}'}</h4>
            <div style={curlyObj.theme}>
                <p>{curlyObj.name}</p>
            </div>
            <br/>

            
        </div>
    )
};

// without destructuring
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
        {name:"Clara", age: 30}
    ]
    return (
        <div>
            <h3>Passing Data/Properties to a Component</h3>
            <HelloProps name={names[0].name} age={names[0].age} />
            <HelloProps name={names[1].name} age={names[1].age}/>
            <HelloProps name={names[2].name} age={names[2].age}/>
        </div>
    )
}

export default function BuildingBlocks(){
    return(
        <>
            <h2>Building Blocks</h2>
            <StaticContent />
            <br/>
            <DynamicContent />
            <br/>
            <ComponentWithData />
        </>
    )
}