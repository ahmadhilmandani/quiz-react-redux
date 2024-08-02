import Home from '../pages/home/Home.jsx';
import Quiz from '../pages/Quiz/Quiz.jsx';
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
      },
      {
        path: "/quiz",
        element: <Quiz />,
      }
    ]
  },
]);


export default router 