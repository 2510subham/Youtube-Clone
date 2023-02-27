import React from 'react'
import {useState,useEffect} from 'react';
import {Box,Stack,Typography,Divider} from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos';
import { fetchFromApi } from '../utils/fetchFromApi';

//we are making the sidebar here and shows video from the API
const Feed = () => {

const [selectedCategory, setselectedCategory] = useState('New');
const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
      .then((data)=>{setVideos(data.items)})
    },[selectedCategory])

return (
    <Stack sx={{flexDirection:{sx:"column",md:"row"}}}>
      <Box sx={{height:{sx:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}>
          <Sidebar selectedCategory={selectedCategory} setselectedCategory={setselectedCategory}/>
          <Typography className="copyright" varient="body2" sx={{mt:1.5,color:"#fff"}}>
            Copyright 2022 Subham Media
          </Typography>
      </Box>
      <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
        <Typography variant="h4" fontWeight="bold" md={2} sx={{color:'white'}}>
         {selectedCategory} <span style={{color:"#F31503"}}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )

}
export default Feed