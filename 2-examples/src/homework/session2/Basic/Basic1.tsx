import React from 'react';
import { IMAGES } from '../basic-images/images'

function Basic1() {
  
    return (
        <React.Fragment>
<div className="card mb-3 border-0" >
  <div className="row g-0 ">
    <div className="col-md-2">
    </div>
    <div className="border d-flex " style={{width: 700}}>
    <div className="col-md-2">
      <img src={IMAGES.LOGO1} alt="" style={{width: 200}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body " style={{paddingLeft: 100, }}>
        <h5 className="card-title">Clothing & Apparel</h5>
        <p className="card-text">Bag</p>
        <p className="card-text">Kid's fashion</p>
        <p className="card-text">Mens</p>
        
      </div>
    </div>
    </div>
  </div>
</div>
</React.Fragment>
);
}

export default Basic1;