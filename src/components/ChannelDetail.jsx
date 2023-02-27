import React from 'react'
import { useParams } from 'react-router-dom';
import {useState,useEffect} from 'react';
import {Box} from '@mui/material'
import {Videos,ChannelCard} from '../components';
import { fetchFromApi } from '../utils/fetchFromApi';




const ChannelDetail = () => {
  const [channelDetail, setchannelDetail] = useState(null)
  const [videos,setVideos]=useState([])
  // console.log(channelDetail)
  const {id}=useParams();
  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`)
    .then((data)=>setchannelDetail(data?.items[0]));

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setVideos(data?.items));
  },[id])
  return (
   <Box>
    {id}
   </Box>
  )
}

export default ChannelDetail