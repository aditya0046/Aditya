import React, { useEffect, useRef, useState } from 'react'
import TopHeadline from '../Component/TopHeadline';
import { Link } from 'react-router-dom';


const Home = (props) => {
  console.log(props.value)
  const [inputValue, setinputValue] = useState("bitcoin");

  const [news, setnews] = useState([]);
  

  let fetchNews = async()=>{
    let res = await fetch(`https://newsapi.org/v2/everything?q=${props.value?props.value:inputValue}&apiKey=a6e6d36ee836410891eba79c68d9123a`)
    let data = await res.json()
    // console.log(data.articles)
    setnews(data.articles)
  }

  useEffect(()=>{
    fetchNews()
  },[inputValue,props.value])

  let searchRef = useRef()


  const handleSearch =(e)=>{
    e.preventDefault()
    let inputValue = searchRef.current.value
    console.log(inputValue)
    setinputValue(inputValue)
  }
  return (
    <div>
      <form className="d-flex col-md-4 m-auto mt-3" role="search">
         <input ref={searchRef} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
         <button  onClick={handleSearch} className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className='main d-flex'>
      <div className="container-fluid d-flex mt-3">
        <div  className="row  col-md-9  d-flex gap-4 justify-content-center ">
        {news.map((ele)=>{
        return <div className="card bg-dark " style={{width: '18rem'}}>
  <img style={{height:'200px'}} src={ele.urlToImage} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-truncate text-white">{ele.title}</h5>
    <Link to={ele.url} className="btn btn-primary mt-2">Detail News</Link>
  </div>
</div>
      })}
        </div>
        <div className='col-md-3 topHeadlines  '>
        <h3 className='text-center mb-4 topHeading'>Top Headlines</h3>
       <div className='AllHeadlines'>
       <TopHeadline/>
       </div>
       
      </div>
      </div>
     
      </div>
    </div>
  )
}

export default Home
