import React from "react";
export default function Cards(props) {

let options = props.options;
let prizeOptions = Object.keys(options);


  return (
    <div>
      <div>
        {" "}
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img src={props.imgSrc} className="card-img-top" alt="..." style={{height:"150px" ,objectFit:"fill"}} />
          <div className="card-body">
            <h5 className="card-title">{props.foodName}</h5>
            <p className="card-text">Some quick example text to build on.</p>
            <div className="container w-100">
              <select className="m-2  rounded h-100 bg-success">
                {Array.from(Array(6), (e, i) => {
                  return <option value="i+1"> {i + 1}</option>;
                })}
              </select>
              <select className="m-2  rounded h-100 bg-success">
                    {prizeOptions.map((data)=>{
                      return  <option key={data} value={data}> { data} </option>
                    })}
              </select>
              <div className="d-inline fs-5 ">Total Prize</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
