import React, { useState } from 'react'
import {BrowserRouter,Routes,Route, parsePath, useNavigate} from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar'
import routeList from '../utils/Routes'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './FirebaseConfig/Firebaseconfig';


const AppRouter = () => {

//  const [pathName,setPathName] = useState('');
//  setPathName(window.location.pathname)
  
  return (
    <div>
      {/* {pathName !== "/signup"? <Navbar/>:<></>} */}

        <BrowserRouter>
            <Routes>
                {routeList.map((e,i) =><Route path={e.path} element={e.element} key={i} />)}
                
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter
