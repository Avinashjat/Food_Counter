
import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import "../Screens/Login.css"





export default function Home() {

  const [search, setsearch] = useState('');
  const [foodItem, setfoodItem] = useState([]);
  const [foodCategory, setfoodCategory] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/FoodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setfoodItem(response[0]);
    setfoodCategory(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"fill !important"}}>
      <div className="carousel-inner" id='carousel' style={{maxHeight:"600px",width:"100%"}}>
        <div className="carousel-caption" style={{zIndex:"10"}}>
          <div className="d-flex justify-content-center" >
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setsearch(e.target.value)}} />
            
          </div>
        </div>
        <div className="carousel-item active">
          {/* <img src="https://source.unsplash.com/random/900×700?burger" className="d-block w-100" style={{objectFit: "fill", filter: "brightness(30%)" }} alt="Burger" /> */}
          <img src="https://img.freepik.com/free-photo/top-view-fast-food-mix-hamburger-doner-sandwich-chicken-nuggets-rice-vegetable-salad-chicken-sticks-caesar-salad-mushrooms-pizza-chicken-ragout-french-fries-mayo_141793-3997.jpg?w=2000" className="d-block w-100" style={{objectFit: "fill", filter: "brightness(30%)" }} alt="Burger" />
        </div>
        <div className="carousel-item">
          <img src="https://i.pinimg.com/originals/c9/4a/ff/c94affe6bcb9fbf7d3508ba98977a1d1.jpg" className="d-block w-100" style={{objectFit: "contain", filter: "brightness(30%)" }} alt="Pastry" />
        </div>
        <div className="carousel-item">
          <img src="https://wallpapers.com/images/hd/food-4k-1pf6px6ryqfjtnyr.jpg" className="d-block w-100" style={{objectFit: "contain", filter: "brightness(30%)"}} alt="Barbecue" />
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
    </div>

      <div className="container">
        {foodCategory && foodCategory.length !== 0 ? (
          foodCategory.map((data) => (
            <div key={data._id}>
              <div className="fs-2 m-3 ">{data.CategoryName}</div>
              <hr />
              {/* style={cardContainerStyle} */}
              <div  className="cardContainerStyle">
                {foodItem && foodItem.length !== 0 ? (
                  foodItem
                    .filter((item) => (item.CategoryName === data.CategoryName) && (item.name?.toLowerCase().includes(search.toLocaleLowerCase())))
                    .map((filteritem) => (
                      // style={cardStyle} 
                      <div key={filteritem._id} className="cardStyle">
                        <Cards foodItem={filteritem}
                        options ={filteritem.options[0]}
                        
                        ></Cards>
                      </div>
                    ))
                ) : (
                  <div>No such data found</div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div>No food categories found</div>
        )}
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
