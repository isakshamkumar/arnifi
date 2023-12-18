import React from 'react'
import Card from "../../components/Card"
import { Grid,Button } from '@mui/material'
import Projects1 from '../../images/Projects-1.png'
import Projects2 from '../../images/Projects-2.png'
import Projects3 from '../../images/Projects-3.png'
import Projects4 from '../../images/Projects-4.png'


const Projects = () => {
  interface Src{
    src:string
  }
    const ImageSrc = [
        {
            src : Projects1
        },
        {
            src : Projects2
        },
        {
            src : Projects3
        },
        {
            src : Projects4
        },
   
    ]

  return (
    <>
    

    <Grid container spacing={2} marginTop={"200px"}>
      {ImageSrc.map((src: Src, index: number) => (
        <Grid key={index} item xs={12} lg={6} md={6}>
          <Card src={src.src} index={index}
          
          />
          
        </Grid>
      ))}
      <Button>cvcv</Button>
    </Grid>
     
    </>
  )
}

export default Projects