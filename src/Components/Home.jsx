import React from 'react';
import { useNavigate } from 'react-router-dom';
import{ useContext } from 'react'; 
import { context } from '../Context/Context';
import Video from './Video';
import './home.css'
function Home(props) {
    let content= [{title:"Adobe is horrible. So I tried the alternative",video_url:"zabpcOP7H3U"},{title:"All 12 useState & useEffect Mistakes Junior React Developers Still Make in 2024",video_url:"-yIsQPp31L0"},{title:"The Easiest Way to Build Websites",video_url:"OjEg0IBR_ak",},{title:"What makes a brand iconic, scientifically",video_url:"eAiGOV1Ot70"}]
    const navigate = useNavigate()
    const{id,setId}=useContext(context)
    const {data,setData} = useContext(context);
    let handleLogout=()=>{
        navigate('/')
    }
    return (
        <div id='home'>
            <input className='logout' type="button" value="Logout" onClick={()=>navigate('/')}/>
            <h1>Welcome <span id='name'>{data[id-1].userName}</span> to your uverse account </h1>
            {content.map((mycontent,index)=>(<Video className='video' key={index} mycontent={mycontent}/>))}
        </div>
    );
}

export default Home;