import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/home/authors.css"
function Authors({data}) {
  return (
    <Link to="/music" className='authors'>
      <img src={data.src} width={120} height={120} style={{"background":`${data.backgroundColor}`}}  alt={data.title}/> 
      <div>
        <p className='product'>Product</p>
        <h3 className='title'>{data.title}</h3>
        <h4 className='name'>{data.name}</h4>
      </div>
    </Link>
  )
}

export default Authors
