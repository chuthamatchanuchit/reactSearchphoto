import React,{useState} from 'react'
import Search from '../component/Search';
import axios from 'axios';
import Post from '../component/post';


function Home() {
    const [state , setState] = useState({
        results:[]
    })

    const onsearch = async(query)=>{
        console.log(query);
        const results = await axios.get("https://api.unsplash.com/search/photos?page=3&=",{
            params:{query,client_id:"XvbKxMT9Uzr1LkJVhrlYZsRdNI0o6PU8v_HOSdcvNy4"}
        })
   
        setState(prevState => {
            return {...prevState, results:results }   
        })
        console.log(results)
    }
    return (
        <div>
            <Search onsearch={onsearch}/>
            <Post results={state.results}/>
        </div>
    )
}

export default Home;
