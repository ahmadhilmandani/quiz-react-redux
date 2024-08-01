import Home from '../pages/home/Home.jsx';
import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../layout/MainLayout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  },
]);


export default router 