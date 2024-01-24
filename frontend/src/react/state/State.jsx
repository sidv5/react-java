import StateHook from "./StateHook"
import EventHandling from "./EventHandling"
import ReturnFunction from "./ReturnFunction"
import RenderCommit from "./RenderCommit"

function State() {
    return (
      <>
        <ReturnFunction />
        <br/>
        
        <EventHandling />
        <br/>

        <StateHook />
        <br/>

        <RenderCommit />
      </>
    )
  }

export default State

