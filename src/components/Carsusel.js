
// import React from 'react'

// export default function Carsusel() {
//   return (
    
//       <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel"  >
//   <div className="carousel-inner" id='carousel' style={{maxHeight:"500px"}}>
    
//   <div className="carousel-caption" style={{zIndex:"10"}}>
//   <form class="d-flex" role="search">
//       <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//       <button className="btn btn-outline-success" type="submit">Search</button>
//     </form>
//   </div>
//     <div className="carousel-item active "  >
//       <img src="https://source.unsplash.com/random/900×700/?burger" className="d-block w-100" style={{objectFit: "contain" ,filter:"brightness(30%)"}} alt="..." />
//     </div>
//     <div className="carousel-item" >
//       <img src="https://source.unsplash.com/random/900×700/?pastry"className="d-block w-100" style={{objectFit: "contain" ,filter:"brightness(30%)"}} alt="..." />
//     </div>
//     <div className="carousel-item" >
//       <img src="https://source.unsplash.com/random/900×700/?barbeque" className="d-block w-100" style={{objectFit: "contain",filter:"brightness(30%)"}} alt="..." />
//     </div>
//   </div>
//   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button>
// </div>
   
//   )
// }

import React from 'react';

export default function Carousel() {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"cover"}}>
      <div className="carousel-inner" id='carousel' style={{maxHeight:"500px",width:"100%"}}>
        <div className="carousel-caption" style={{zIndex:"10"}}>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
        <div className="carousel-item active">
          <img src="https://source.unsplash.com/random/?burger" className="d-block w-100" style={{objectFit: "contain", filter: "brightness(30%)" }} alt="Burger" />
        </div>
        <div className="carousel-item">
          <img src="https://source.unsplash.com/random/?pastry" className="d-block w-100" style={{objectFit: "contain", filter: "brightness(30%)" }} alt="Pastry" />
        </div>
        <div className="carousel-item">
          <img src="https://source.unsplash.com/random/?barbecue" className="d-block w-100" style={{objectFit: "contain", filter: "brightness(30%)"}} alt="Barbecue" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}


