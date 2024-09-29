import React from "react";
import { useState } from "react";
import './home.css'
function Video({mycontent}) {
let [liked,setLiked]=useState(false)
let handleLike=()=>{
    setLiked(!liked)
}

  return (
    <div className="video-frame">
      
      <iframe
        src={`https://youtube.com/embed/${mycontent.video_url}?autoplay=0`}
        title={mycontent.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
            width: '100%',
            height: '500px' // Maintain a 16:9 aspect ratio
          }}
      ></iframe>
      <div className="description"><h2>{mycontent.title}</h2>
      <input type="button" value={liked ? "Liked" : "Like"} onClick={()=>handleLike()}/></div>
      
    </div>
  );
}

export default Video;
