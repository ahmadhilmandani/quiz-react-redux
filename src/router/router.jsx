// import App from '../app/App.jsx'
import Home from '../pages/home/Home.jsx';
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);


export default router 