import React from "react";

export default function Cards() {
  return (
    <div>
      <div>
        {" "}
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img src="https://honehealth.com/wp-content/uploads/2023/06/high-protein-fast-food-1.webp" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on.</p>
            <div className="container w-100">
              <select className="m-2  rounded h-100 bg-success">
                {Array.from(Array(6), (e, i) => {
                  return <option value="i+1"> {i + 1}</option>;
                })}
              </select>
              <select className="m-2  rounded h-100 bg-success">
                <option value="Half">Half</option>
                <option value="Full">Full</option>
              </select>
              <div className="d-inline fs-5 ">Total Prize</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
