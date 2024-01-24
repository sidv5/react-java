export default function AdditionalNotes(){
    return(
        <>
        <div>
            <h2>Additional Notes</h2>
            <div>
                <ul style={{marginLeft: 15}}>
                    <li>JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.</li>
                    <li>JSX markups must return a single root/parent element from a component definition</li>
                    <li>The parent element can either be {'<div></div>'} or {'<></>'}. The empty tags called Fragments and does not show up on the browser.</li>
                    <li>React Components communicate with each other using props (Properties)</li>
                    <li>First letter of React component names must be capitalized.</li>
                    <li>Browser interprets lower case as HTML tags.</li>
                    <li>React component (usually) needs to contain one root element</li>
                    <li>React components do not render objects</li>
                    <li>Don't define function within a function, their definitions must not be nested.</li>
                    <li>A file can have only one 'default' export and multiple 'named' exports.</li>
                    <li>Keys must be unique among siblings. However, it’s okay to use the same keys for JSX nodes in different arrays.</li>
                    <li>Keys must not change or that defeats their purpose! Don’t generate them while rendering.</li>
                    <li>State is local to a component instance on the screen. If you render the same component twice, each copy will have completely isolated state</li>
                    <li>Changing the State triggers a re-render</li>
                </ul>
            </div>
        </div>
        </>
    )
}