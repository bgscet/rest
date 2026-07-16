import React, { useEffect, useState } from "react"; 
import PostCard from "./PostCard"; import "./App.css";  
function App() {    const [posts, setPosts] = useState([]);    
useEffect(() => {      fetch("https://jsonplaceholder.typicode.com/posts")       
.then((response) => response.json())       
.then((data) => setPosts(data));    }, []);    
return (     
<div className="container">        
<h1 className="heading">Posts Data</h1>        
<div className="posts-container">          
{posts.map((post) => (           
<PostCard key={post.id} post={post} />
))}       
</div>      
</div>  
);
} 
export default App; 
