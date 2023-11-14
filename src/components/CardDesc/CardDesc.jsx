import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { Grid } from '@mui/material';
import './CardDesc.css'

const CardDesc = () => {
    const {id} = useParams();
    // console.log(id);

    const [data,setData] = useState(null);

    useEffect(()=>{
        getData();
    },[])

    const getData = async() =>{
        try{
            let apiData = await axios.get(`https://fakestoreapi.com/products/${id}`);
            // console.log(apiData.data);
            setData(apiData.data);
        }catch(err){
            console.log(err)
        }
    }

  return (<>{data &&
   <Grid container>
         <Grid item xs={12} md={4}>
            <img src={data.image} alt="" />
        </Grid>

         <Grid item xs={12} md={8}>   
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <p><strong>Rating:</strong> {data.rating.rate}/5 ({data.rating.count})</p>     
            <button>Buy Now</button>   
        </Grid>
   </Grid>
        }
  </>
  )
}

export default CardDesc
