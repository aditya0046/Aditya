import React from 'react'
import  { Link } from "react-router-dom"
import logo from "../assets/images.png"
const Navbar = (props) => {

  const HandleLinks=(ans)=>{
    console.log(ans)
    props.xyz(ans)
  }
  return (
    <div>
      <nav  className="navbar navbar-expand-lg bg-dark ">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to="/" ><img style={{height:'40px'}} src={logo} alt="" /></Link>
    <button style={{color:"white",backgroundColor:"white"}} className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span style={{color:"white",backgroundColor:"white"}}  className="navbar-toggler-icon text-white" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link onClick={()=>HandleLinks('Business')} className="nav-link active text-white" aria-current="page" to="#">Business</Link>
        </li>
        <li className="nav-item">
          <Link onClick={()=>HandleLinks('Entertainment')} className="nav-link active text-white" aria-current="page" to="#">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link onClick={()=>HandleLinks('Health')} className="nav-link active text-white" aria-current="page" to="#">Health</Link>
        </li>
        <li className="nav-item">
          <Link onClick={()=>HandleLinks('Science')} className="nav-link active text-white" aria-current="page" to="#">Science</Link>
        </li>
        <li className="nav-item">
          <Link onClick={()=>HandleLinks('Sports')} className="nav-link active text-white" aria-current="page" to="#">Sports</Link>
        </li>
        <li className="nav-item">
          <Link onClick={()=>HandleLinks('technology')} className="nav-link active text-white" aria-current="page" to="#">Technology</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
