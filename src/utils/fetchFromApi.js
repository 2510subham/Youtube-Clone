import axios from 'axios'
// import dotenv from 'dotenv'
// dotenv.config();
// 'fa26cf10d6msh369581a02062259p175cf0jsnd6e14f7f7494'


const BaseURL='https://youtube-v31.p.rapidapi.com'
const options = {
    params: {maxResults:'50'},
    headers: {
        'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    
    }
  };

  export const fetchFromApi = async (url) => {
    try {
      const response = await axios.get(`${BaseURL}/${url}`,options)//here we are doing /baseurl/as we want to search
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }