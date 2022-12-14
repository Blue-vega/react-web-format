import React from 'react'
import { NavLink } from "react-router-dom";
import soop from "./image/soop.jpg"
const card = () => {
  return (
    <>
  <div className="cards">
    <div className="card" style={{ width: "18rem" }}>
      <img src={soop} className="card-img-top" alt="home" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <NavLink to="/dinner" className="btn btn-success">
          Buy Now
        </NavLink>
      </div>
    </div>
  </div>
</>
  )
}

export default card