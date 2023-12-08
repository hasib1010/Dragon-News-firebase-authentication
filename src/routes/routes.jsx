import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import NewsDetails from '../pages/NewsDetails';
import PrivateRoutes from './PrivateRoutes';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
              path: "/news/:id"  ,
              element: <PrivateRoutes><NewsDetails></NewsDetails></PrivateRoutes>
            },
            {
                path: '/about',
                element: <h3>This is about page</h3>
            },
            {
                path:"/login",
                element: <Login></Login>          
              },
              {
                path: "/register",
                element: <SignUp></SignUp>
              }
        ]
    }
])

export default routes;
