import React ,{ useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
import Carsusel from '../components/Carsusel'


export default function Home() {

  const [foodItem, setfoodItem] = useState([]);
  const [foodCategory, setfoodCategory] = useState([]);

const loadData = async ()=>{
  let response = await fetch("http://localhost:5000/api/FoodData",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    }
  });
  response = await response.json();
  setfoodItem(response[0]);
  setfoodCategory(response[1]);

  // console.log(response[0],response[1]);
}


useEffect(()=>{
  loadData();  
},[])


  return (
    <>
      <div> <NavBar  /> </div>
       <div> <Carsusel /> </div>
      <div className='container'>   
      
      {
  foodCategory && foodCategory.length !== 0 ? (
    foodCategory.map((data) => (
      <div key={data._id}>
        <div className='fs-3 m-3 '>{data.CategoryName}</div>
        <hr />
        {
          foodItem && foodItem.length !== 0 ? (
            foodItem
              .filter((item) => item.CategoryName === data.CategoryName)
              .map((filteritem) => (
                <div key={filteritem._id}>
                  <Cards></Cards>
                </div>
              ))
          ) : (
            <div>No such data found</div>
          )
        }
      </div>
    ))
  ) : (
    <div>No food categories found</div>
  )
}



      
      <Cards />
      
       </div>

      <div> <Footer/> </div>
    </>
  )
}  
