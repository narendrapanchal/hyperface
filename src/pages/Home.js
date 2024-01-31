import React from 'react'
import "../styles/home.css";
import data from "../data.json";
import { Link } from 'react-router-dom';

import HomeDiv from '../components/HomeDiv';
import Authors from '../components/Authors';
function Home() {
  return (
    <div className='home'>
      <header className='header container' ><img className='hey_user' src="/images/hey_user.png" height={32} width={158}/> <img src="/images/round_man.png" height={32} width={32}/></header>
      <p className='nice_day container'>It’s a nice day to learn something new</p>
      <div className='container'>
        <div className='join_community'>
          <p>Join and help us in building AirVoice!</p>
          <a href='#'><img src="/images/icon.png" height={12} width={12}/><span >Community</span></a>
        </div>
      </div>
      <div className='description'>
        <h2>{data.coursesForYou.name}</h2>
        <p>{data.coursesForYou.description}</p>
        <div className='horizontal_scroll'>
          {data.coursesForYou.data&&data.coursesForYou.data.map((ele)=><HomeDiv key={ele.title} data={ele}></HomeDiv>)}
        </div>
      </div>
      <div className='description'>
      <h2>{data.articleReads.name}</h2>
        <p>{data.articleReads.description}</p>
        <div className='horizontal_scroll'>
          {data.articleReads.data&&data.articleReads.data.map((ele)=><HomeDiv key={ele.title} data={ele}></HomeDiv>)}
        </div>
      </div>
      <div className='description'>
      <h2>{data.tweetShort.name}</h2>
        <p>{data.tweetShort.description}</p>
        <div className='horizontal_scroll'>
          {data.tweetShort.data&&data.tweetShort.data.map((ele)=><Authors key={ele.title} data={ele}></Authors>)}
        </div>
      </div>
    </div>
  )
}

export default Home
