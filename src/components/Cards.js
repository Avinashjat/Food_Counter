import React, { useRef, useState } from "react";
import { useDispatchCart , useCart } from "./ContextReducer";
import { useEffect } from "react";

export default function Cards(props) {

  let dispatch = useDispatchCart();
  let data = useCart();

  const priceRef = useRef();

let options = props.options;
let prizeOptions = Object.keys(options);
const [qty ,setQty] = useState(1)
const [size ,setSize] = useState("")

const handleAddToCard = async ()=>{
  let food = []
  for (const item of data) {
    if (item.id === props.foodItem._id) {
      food = item;

      break;
    }
  }
  console.log(food)
  console.log(new Date())
  if (food.length !== 0) {
    if (food.size === size) {
      
      await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
      return
    }
    else if (food.size !== size) {
      await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
      console.log("Size different so simply ADD one more to the list")
      return
    }
    return
  }

  await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })


}




useEffect(()=>{
     setSize(priceRef.current.value)
},[])

let finalPrice = qty* parseInt(options[size]);

  return (
    <div>
      <div>
        {" "}
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img src={props.foodItem.img} className="card-img-top" alt="..." style={{height:"150px" ,objectFit:"fill"}} />
          <div className="card-body">
            <h5 className="card-title">{props.foodItem.name}</h5>
            <p className="card-text"></p>
            <div className="container w-100">
              <select className="m-2  rounded h-100 bg-success"  onChange={(e)=>{setQty(e.target.value)}}>
                {Array.from(Array(6), (e, i) => {
                  return <option key={i+1} value={i+1}> {i+1}</option>;
                })}
              </select>
              <select className="m-2  rounded h-100 bg-success" ref={priceRef} onChange={(e)=>{setSize(e.target.value)}}>
                    {prizeOptions.map((data)=>{
                      return  <option key={data} value={data}> { data} </option>
                    })}
              </select>
              <div className="d-inline fs-5 "> ₹{finalPrice}/-</div>
              <hr />
            <button className="btn btn-success justify-content-center ms-2" onClick={handleAddToCard}> Add To Card
            
            </button>
            </div>
        
          </div>
          
        </div>
      </div>
    </div>
  );
}
