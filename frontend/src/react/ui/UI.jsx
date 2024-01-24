import BuildingBlocks from "./BuildingBlocks"
import Destructuring from './Destructuring'
import Conditional from './Conditional'
import RenderList from "./RenderList"

export default function UI() {
  return (
    <>
      <BuildingBlocks />
      <br/>
      <Destructuring />
      <br/>
      <Conditional />
      <br/>
      <RenderList />
      <br/>
    </>
  )
}