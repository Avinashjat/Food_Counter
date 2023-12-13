import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';


export default function MyOrder() {

    const [orderData, setorderData] = useState({})

    const fetchMyOrder = async () => {
        console.log(localStorage.getItem('userEmail'))
        await fetch("http://localhost:5000/api/myOrderData", {
            // credentials: 'include',
            // Origin:"http://localhost:3000/login",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email:localStorage.getItem('userEmail')
            })
        }).then(async (res) => {
            let response = await res.json();
            await setorderData(response);
           
        })

    }

    useEffect(() => {
        fetchMyOrder()
    }, [])

    return (
        <div>
            
               <NavBar />
          
            <div className='container'>
                <div className='row'>

                    {orderData !== {} ? Array(orderData).map(data => {
                        return (
                            data.orderData ?
                                data.orderData.order_data.slice(0).reverse().map((item) => {
                                    return (
                                        item.map((arrayData) => {
                                            return (
                                                <div  >
                                                    {arrayData.Order_date ? <div className='m-auto mt-5'>

                                                        {data = arrayData.Order_date}
                                                        <hr />
                                                    </div> :

                                                        <div className='col-12 col-md-6 col-lg-3' >
                                                            <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                                                {/* <img src="" className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} /> */}
                                                                <div className="card-body">
                                                                    <h5 className="card-title">{arrayData.name}</h5>
                                                                    <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                                        <span className='m-1'>{arrayData.qty}</span>
                                                                        <span className='m-1'>{arrayData.size}</span>
                                                                        <span className='m-1'>{data}</span>
                                                                        <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                                                                            ₹{arrayData.price}/-
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>



                                                    }

                                                </div>
                                            )
                                        })

                                    )
                                }) : ""
                        )
                    }) : ""}
                </div>


            </div>

            <Footer />
        </div>
    )
}




// import React, { useEffect, useState } from 'react';
// import Footer from '../components/Footer';
// import NavBar from '../components/NavBar';

// export default function MyOrder() {
//     const [orderData, setOrderData] = useState([]);

//     const fetchMyOrder = async () => {
//         const userEmail = localStorage.getItem('userEmail');
//         console.log(userEmail);
//         try {
//             const res = await fetch("http://localhost:5000/api/myOrderData", {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     email: userEmail
//                 })
//             });

//             const response = await res.json();
//             setOrderData(response);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     };

//     useEffect(() => {
//         fetchMyOrder();
//     }, []);

//     return (
//         <div>

//      <NavBar />

//             <div className='container'>
//                 <div className='row'>
//                     {Array.isArray(orderData) && orderData.length !== 0 ? (
//                         orderData.map((data) =>
//                             data.orderData ? (
//                                 data.orderData.order_data.slice(0).reverse().map((item) =>
//                                     item.map((arrayData) => (
//                                         <div key={arrayData.Order_date || arrayData.name} >
//                                             {arrayData.Order_date ? (
//                                                 <div className='m-auto mt-5'>
//                                                     {arrayData.Order_date}
//                                                     <hr />
//                                                 </div>
//                                             ) : (
//                                                 <div className='col-12 col-md-6 col-lg-3'>
//                                                     <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
//                                                         <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
//                                                         <div className="card-body">
//                                                             <h5 className="card-title">{arrayData.name}</h5>
//                                                             <div className='container w-100 p-0' style={{ height: "38px" }}>
//                                                                 <span className='m-1'>{arrayData.qty}</span>
//                                                                 <span className='m-1'>{arrayData.size}</span>
//                                                                 <span className='m-1'>{arrayData.Order_date}</span>
//                                                                 <div className=' d-inline ms-2 h-100 w-20 fs-5'>
//                                                                     ₹{arrayData.price}/-
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             )}
//                                         </div>
//                                     ))
//                                 )
//                             ) : null
//                         )
//                     ) : (
//                         <h2>No orders found.</h2>
//                     )}
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// }
