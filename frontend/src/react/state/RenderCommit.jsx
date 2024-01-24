import { Component } from 'react';

class RenderLifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    console.log('index:', this.state.index, ' - Constructor');
  }

  componentDidMount() {
    console.log('index:', this.state.index, ' - Component Mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.index !== this.state.index) {
      console.log('index:', this.state.index, ' - Component Committed');
    }
  }

  componentWillUnmount() {
    console.log('index:', this.state.index, ' - Component Unmounted');
  }

  handleStepChange = () => {
    this.setState((prevState) => ({ index: prevState.index + 1 }));
  };

  render() {
    console.log('index:', this.state.index, ' - Rendering');
    return (
      <div>
        <h4>• Render & Commit Lifecycle Demo</h4>
        <p>The lifecycle and re-rendering can be viewed on the browser console.</p>
        <p>Counter: {this.state.index}</p>
        <button onClick={this.handleStepChange}>Trigger</button>
      </div>
    );
  }
}

export default function RenderCommit(){
    return(
        <div>
            <h2>Render & Commit</h2>
            <p>“Rendering” is React calling your components.</p>
            <p>On page load, the initial render will mount the 'root' component and all associated components once</p>
            <p>Re-rendering takes place in 3 phases:</p>
            <ol style={{marginLeft: 30}}>
                <li>Trigger - begin the re-render</li>
                <li>Render - process the re-render</li>
                <li>Commit - updates the DOM with the re-rendered value</li>
            </ol>
            <br/>
            <RenderLifecycleDemo/>
        </div>
    )
}