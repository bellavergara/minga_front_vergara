import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LayoutsComponent from "../layouts/LayoutsComponent";
//aca  van mis rutas//
//path = rutas : element =  paginas  que voy a renderizar // 
let router = createBrowserRouter([
    {
        path: "/", element: <LayoutsComponent />, children: [
            { path: "/", element: <App /> },
            { path: "/mangas", element: <div>Pagina de Mangas</div> }
        ]
    }

])
export default router