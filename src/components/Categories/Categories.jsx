import { Grid } from '@mui/material'
import React from 'react'

const Categories = (props) => {
  return (
   <Grid container>
      
            {props.categories.map((e,i)=>{
                return   <Grid item xs={12} md={4} key={i}>
                            <a href=""> {e}</a>
                         </Grid>

            })}

   </Grid>
  )
}

export default Categories
