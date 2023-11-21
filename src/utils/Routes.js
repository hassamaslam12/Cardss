import Categories from "../screens/Categories";
import Desc from "../screens/Desc";
import Error from "../screens/Error";
import Home from "../screens/Home";
import Signup from "../screens/Signup";
// import { apiCategoriesTosend } from "../components/Cards/Cards";

const routeList =[
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/products/:id",
        element:<Desc/>
    },
    {
        path: "/categories",
        element:<Categories />
    },
    {
        path: "/signup",
        element:<Signup/>
    },
    {
        path: "*",
        element: <Error />
    }

];

export default routeList;