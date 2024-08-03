import Home from '../pages/home/Home.jsx';
import Quiz from '../pages/Quiz/Quiz.jsx';
import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../layout/MainLayout.jsx';
import QUizResult from '../pages/QuizResult/QuizResult.jsx';

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
      },
      {
        path: "/quiz/result",
        element: <QUizResult />,
      }
    ]
  },
]);


export default router 