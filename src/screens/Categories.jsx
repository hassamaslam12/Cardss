import { Grid } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar/Navbar'

const Categories = () => {
  const categories = ['mens']
  return (
    <>
  <Navbar />
   <Grid container>
      
            {categories.map((e,i)=>{
              return   <Grid item xs={12} md={4} key={i}>
                            <a href=""> {e}</a>
                         </Grid>

})}

   </Grid>
</>
  )
}

export default Categories
