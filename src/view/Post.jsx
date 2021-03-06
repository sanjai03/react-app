import axios from 'axios'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Post() {
    const[post,setPost]=useState({})
    let {id} = useParams()
    const url = "https://jsonplaceholder.typicode.com/posts/"+id;
    console.log(id)
     useEffect(()=>{
        axios.get(url)
      .then((res)=>{
        console.log(res)
        setPost(res.data)
      })
     },[])
    
return(
<div className="p-3"><h1>{post.title}</h1>
<p>{post.body}</p>
</div>
)
    
}
export default Post