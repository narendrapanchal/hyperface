import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/home/homediv.css"
function HomeDiv({data}) {
  return (
    <Link to="/music" className='courses_articles'>
    <div className='colored_background' style={{"background":`${data.backgroundColor}`}}>
    </div>
    <p >{data.title}</p>
    <div className='duration'><span>{data.chapters} Chapters</span><span className='dot'></span><span>{data.time} Hours</span></div>
    </Link>
  )
}

export default HomeDiv
