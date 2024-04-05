import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const TopHeadline = () => {

    const [top, settop] = useState([]);

    let fetchHeadline=async()=>{
        let res =await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=a6e6d36ee836410891eba79c68d9123a`)
        let data = await res.json()
        console.log(data.articles)
        settop(data.articles)
    }

    useEffect(()=>{
        fetchHeadline()
    },[])

  return (
    <div>
      
       {top.map((ele)=>{
        return <Link to={ele.url}>
            <h6  className='mb- p-3'>{ele.title}</h6>
        </Link>
      })}
    </div>
  )
}

export default TopHeadline
