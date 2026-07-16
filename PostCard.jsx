import React from "react"; import "./App.css";  
function PostCard({ post }) 
{   
return ( 
<div className="card">   
<p><span className="label">UserId:</span>
{post.userId}</p>    
<p><span className="label">Id:</span> {post.id}</p> 
<p className="title">{post.title}</p>    
<p className="body">{post.body}</p>  
</div> 
);
} 
export default PostCard; 
