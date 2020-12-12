import React,{useEffect,useState} from "react"
import "./../index.css"
import axios from "axios" //for api fetching
import CardTemp from "./CardTemp" //card template
// Importing different Material UI Components
import Grid from '@material-ui/core/Grid'; 
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
// To Scroll to top of page
import ScrollUpButton from "react-scroll-up-button";


const GetData=()=>{
    const[data,setData]=useState([]) //for holding api data
    const[counter,setCounter]=useState(10) //controlling no. of photos 
    const[isLoading,setisLoading]=useState(true) //showing loader untill data fetch
    // Get data on initial render
    useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/photos/").then((response)=>{
           filterData(response.data)
           setisLoading(false)
        }).catch((e)=>{
            console.log(e);
        })
    },[])

    // filtering data (Unique Album id and even position)
    const filterData=(result)=>{
      let sortedList= result.reduce((total,current)=>{
          const {albumId,url,title}=current;
            if(!total[albumId] && albumId%2==0)
            {
                total[albumId]={albumId:albumId,url:url,title:title}
            }
        return total
            
        },{})
        // Get only first 50 from sorted data list
        sortedList=Object.values(sortedList).slice(0,50);
        console.log(sortedList);
        setData(sortedList)
    }
    // Show More functionality
    const showMore=()=>{
        setCounter((prev)=>prev+10);
    }
    return(
        <>
        {/* Show Loader if data hasn't fetched yet other wise data */}
        {isLoading?
        <div style={{textAlign:"center"}}>
        <div class="loadingio-spinner-ellipsis-0r0loqdzi9xi"><div class="ldio-pyfl4gzymaj">
        <div></div><div></div><div></div><div></div><div></div>
        </div></div>
        </div>:
        <Grid 
         container
         direction="row"
            justify="center"
            alignItems="center"
             spacing={3}>
        {
            data.slice(0,counter).map((pic)=>{
                
                return <Grid item xs={12} sm={6} md={4} >
                    {/* Using Card as template */}
                    <CardTemp key={pic.id} props={pic}/>
                    </Grid>
                })
        }
        </Grid>
        }
        {/* If user checks all 50 posts then disable show more button */}
        <Box textAlign='right' marginTop="2%">
        {
            counter===50?<Button size="large"  disabled variant="contained" >
        Load More
      </Button>:<Button size="large" variant="contained" color="primary" onClick={showMore}>
        Load More
      </Button>
        }
        
      </Box>
      {/* Scroll to top */}
        <ScrollUpButton/>
            
        </>
    )
}
export default GetData;

