function ItemIfElse({ item, purchased }) {
    if (purchased) {
        return <li className="item">{item} ✔</li>;
    } else {
    return <li className="item">{item}</li>;
    }
}

function ItemTernary({ item, purchased }) {
    return <li className="item">{purchased ? item + " ✔" : item}</li>;
}

// The condition should always be put first (on the left), which renders the value if the boolean is true
function ItemLogical({ item, purchased }) {
    return <li className="item">{item} {purchased && " ✔"}</li>;
}

function ItemJSX({ item, purchased }) {
    let listContent = item;
    if(purchased) {
        listContent += " ✔";
    }
    return <li className="item">{listContent}</li>;
}

export default function Conditional(){
    const items = [
        {
            purchased: true,
            item: 'Potatoes'
        },{
            purchased: true,
            item: 'Onions'
        },{
            purchased: false,
            item: 'Tomatoes'
        }
    ];
    return(
        <div>
            <h2>Conditional Rendering</h2>

            <h4>• If/Else</h4>
            <ul style={{marginLeft: 30}}>{items.map((item) => <ItemIfElse {...item} />)}</ul>
            <br/>

            <h4>• Ternary Operator</h4>
            <ul style={{marginLeft: 30}}>{items.map((item) => <ItemTernary {...item} />)}</ul>
            <br/>

            <h4>• Logical AND Operator</h4>
            <ul style={{marginLeft: 30}}>{items.map((item) => <ItemLogical {...item} />)}</ul>
            <br/>

            <h4>• Assigning JSX to a variable</h4>
            <ul style={{marginLeft: 30}}>{items.map((item) => <ItemJSX {...item} />)}</ul>
            <br/>

            
        </div>
    )
}