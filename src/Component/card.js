import React from 'react'
import './card.css'
import Navigation from './customNav';
const Card = ({props1,props2}) => {
    console.log(props1,props2);
  return (
    <>
    <section id="advertisers" className="advertisers-service-sec pt-5 pb-5">
  <div className="container"></div>
  
    <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
      <div className="col-3">
        <div className="service-card" onClick={Navigation(props1.path)}>
          
            <img style={{alignItems:'center',justifyContent:'center',marginLeft:'30%'}} src={props1.src} alt='' height={60} width={100}/>
         
          <h3>{props1.title}</h3>
          <p>
            {props1.text}
          </p>
        </div>
      </div>
      <div className="col-3">
        <div className="service-card" onClick={Navigation(props2.path)}>
          
            <img style={{alignItems:'center',justifyContent:'center',marginLeft:'30%'}} src={props2.src} alt='' height={60} width={100}/>
         
          <h3>{props2.title}</h3>
          <p>
           {props2.text}
          </p>
        </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default Card