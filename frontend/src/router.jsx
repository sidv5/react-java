import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import State from "./state/State";
import UI from "./ui/UI";
import App from "./App";
import {createBrowserRouter} from 'react-router-dom'

const PathRouter =  createBrowserRouter([
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
            }
        ],
    },
]);

export default PathRouter