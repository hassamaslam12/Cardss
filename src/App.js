// import Navbar from "./components/Navbar/Navbar";
// import { useState,useEffect } from 'react';
// import axios from 'axios';
// import Categories from "./components/Categories/Categories";
// import Cards from "./components/Cards/Cards";

import { useNavigate } from "react-router-dom";
import AppRouter from "./config/AppRouter"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/FirebaseConfig/Firebaseconfig";


const App =()=>{
  // const [categories,setCategories] = useState([])

    // console.log(data);

  return(
   <AppRouter />
  )
}

export default App