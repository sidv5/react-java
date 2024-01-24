import { createAlert } from "./ReturnFunction";

const buttonSpacing = {
  margin: 5
}

const CustomButton = ({ onClick, children }) => {
  return (
    <button style={buttonSpacing} onClick={e => {
      e.stopPropagation();
      onClick();
    }}>
      {children}
    </button>
  );
}

// When the state changes, the page gets re-rendered.
// The function below contains a console.log which displays the re-rendered value on the browser console.
// The counter value resets to the initial value (i.e. 0) whhen the browser page is refreshed.
export default function EventHandling() {



  return (
    <div>
      <h2>Event Handling</h2>
      <h4>• Attaching Event Handlers</h4>
      <button style={buttonSpacing} onClick={() => console.log("Printing to browser console.")}>Print to console</button>
      <button style={buttonSpacing} onClick={createAlert('Button Clicked!')}>Show Alert</button>
      <br/><br/>

      <h4>• Passing Event Handlers as Props</h4>
      <button style={buttonSpacing} onClick={createAlert('Alert One')}>Alert 1</button>
      <button style={buttonSpacing} onClick={createAlert('Alert Two')}>Alert 2</button>
      <br/><br/>

      <h4>• Adding Event Propagation</h4>
      <div onClick={createAlert('Upper Alert')}>
        <button style={buttonSpacing} onClick={createAlert('Lower Alert 3')}>Alert 3</button>
        <button style={buttonSpacing} onClick={createAlert('Lower Alert 4')}>Alert 4</button>
      </div>
      <br/>

      <h4>• Stopping Event Propagation</h4>
      <div onClick={createAlert('Upper Alert')}>
        <CustomButton onClick={createAlert('Lower Alert 5')}>Alert 5</CustomButton>
        <CustomButton onClick={createAlert('Lower Alert 6')}>Alert 6</CustomButton>
      </div>
      <br/>

      <h4>• Prevent Default Behaviour</h4>
      <div>
        <form onSubmit={createAlert('Page refreshing!')}>
          Clicking submit refreshes the page automatically with Default Behaviour
          <br/>
          <input />
          <button>Submit (Default Behaviour)</button>
        </form>
        <form onSubmit={e => {
            e.preventDefault();
            alert('Page will not refresh!');
          }}>
            <input />
            <button>Submit (Prevent Default Behaviour)</button>
          </form>
      </div>
    </div>
  );
}