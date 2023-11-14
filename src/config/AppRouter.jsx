import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar'
import routeList from '../utils/Routes'


const AppRouter = () => {
  return (
    <div>
        <Navbar />

        <BrowserRouter>
            <Routes>
                {routeList.map((e,i) =><Route path={e.path} element={e.element} key={i} />)}

            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter
