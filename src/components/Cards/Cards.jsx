import {  Grid } from '@mui/material'
import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import './Cards.css'
import { useNavigate } from 'react-router-dom';


const Cards = () => {
    const [data, setData] = useState([]);
    const navigation = useNavigate();

    const navigateToDescHandler = (id) =>{
        navigation(`/products/${id+1}`)
    }

    useEffect(() => {
      getData();
    },[])
  
    const getData = async() =>{
      try{
          const apiData = await axios.get('https://fakestoreapi.com/products');
         setData(apiData.data);
         
         
         //  apiCategories = new Set(apiCategories);
         //  let apiCategories =  apiData.data.map(e=>e.category);
        // apiCategories = apiCategories.filter((e,i)=>apiCategories.indexOf(e)===i)
        //  console.log("apiCategories :", apiCategories);
        //   setCategories(apiCategories)
          // console.log("categories" , categories);
        // console.log(apiData.e.category)
        }
        catch(err){
          console.log(err)
        }
      }
    console.log(data)

    // if(!data){return}
  return ( 
    <div>
<Grid container justifyContent="center">

            {data.length && data.map((e,i)=><Grid item key={i}>
            <div className="cardDiv"> 
                <div className="cardImage">
                     <img src={e.image} alt="a" />
                </div>
                <div className='cardText'>
                    <div className='cardHeading'>
                         {e.title}
                    </div>
                    <div>
                        Rs: {e.price}
                    </div>
                    <div>
                        {e.rating.rate}/5 ({e.rating.count})    
                    </div>                   
                    <div className='cardBtn'>
                        <button>
                            Add to cart
                        </button>
                        <button onClick={()=>navigateToDescHandler(i)}>
                            Read Description
                        </button>
                    </div>
                    
                </div>
            </div>
        </Grid>
            )
            }
    </Grid>
    </div>
  )
}

export default Cards
