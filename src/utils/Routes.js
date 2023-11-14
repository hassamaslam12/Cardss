import Desc from "../screens/Desc";
import Error from "../screens/Error";
import Home from "../screens/Home";

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
        path: "*",
        element: <Error />
    }

];

export default routeList;