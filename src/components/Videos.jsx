import React from 'react'
import {Stack,Box} from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({videos,direction}) => {
  console.log(videos)
  if(!videos?.length) return "Loading..."
  return (
      <Stack direction={direction || "row" }flexWrap="wrap" justifyContent="start" gap={2}>
        {
          videos.map((video,index)=>(
            <Box key={index}>
              {video.id.videoId && <VideoCard video={video}/>}   {/*//checking if we are getting the videos */}
              {video.id.channelId && <ChannelCard channelDetail={video}/>}  {/*cheking if we get tha channel name there is only one channel card in ur API and rest are videos card */} 
            </Box>
          ))
        }
      </Stack>
  )
}

export default Videos