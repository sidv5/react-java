import Root from "./root";
import ErrorPage from "./error-page";
import State from "../../react/state/State";
import UI from "../../react/ui/UI";
import App from "../../App";
import { createBrowserRouter } from 'react-router-dom'
import AdditionalNotes from "../../react/additional/AdditionalNotes";
import Forms from "../../react/forms/Forms";
import Ref from "../../react/ref/Ref";
import Effect from "../../react/effect/Effect";

const PathRouter = createBrowserRouter([
    {
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <App />
            },
            {
                path: "ui",
                element: <UI />
            },
            {
                path: "state",
                element: <State />
            },
            {
                path: "forms",
                element: <Forms />
            },
            {
                path: "ref",
                element: <Ref />
            },
            {
                path: "effect",
                element: <Effect />
            },
            {
                path: "additionalNotes",
                element: <AdditionalNotes />
            }
        ],
    },
]);

export default PathRouter