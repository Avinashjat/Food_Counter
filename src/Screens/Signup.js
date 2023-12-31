import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
    const [count, setCount] = useState({name:"",email:"",password:"",location:""});

    let navigate = useNavigate();

    const handlesubmit = async(e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createusers",{
            method :'POST',
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({name:count.name, email:count.email, password:count.password , location:count.location})
        });
        const json = await response.json()
        console.log(json)

        if(!json.success){
            alert("Enter valid credentials")
        }
        if(json.success){
          localStorage.setItem("userEmail",count.email);
          localStorage.setItem("authToken",json.authToken);
          console.log(localStorage.getItem("authToken"));
          navigate("/login");
        }
    }
    



    const onchange =(event)=>{
        setCount({...count,[event.target.name]:event.target.value})
    }

  return (
    <>
    <div className="container cont ">
<form onSubmit={handlesubmit} className="mx-auto">
<h2 className='text-center'>Sign Up</h2>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control frm-contr" id="exampleInputEmail1" name="name" value={count.name} onChange={onchange} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control frm-contr" id="exampleInputEmail1"  name="email" value={count.email} onChange={onchange} />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control frm-contr" id="exampleInputPassword1" name="password" value={count.password} onChange={onchange} />
  </div>
  
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Address </label>
    <input type="address" className="form-control frm-contr" id="exampleInputPassword1" name="location" value={count.location} onChange={onchange} />
  </div>
  
  <button type="submit" className=" m-3 btn btn-success">Submit</button>
  <Link to="/login" className="m-3 btn btn-danger"> Login </Link>
 
</form>
</div>
    </>
  )
}
