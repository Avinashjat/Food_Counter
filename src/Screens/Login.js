import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'

export default function Login() {
    const [count, setCount] = useState({email:"",password:""});

    let navigate = useNavigate()

    const handlesubmit = async(e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/loginusers",{
            method :'POST',
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({ email:count.email, password:count.password })
        });
        const json = await response.json()
        console.log(json)

        if(!json.success){
            alert("Enter valid credentials")
        }
        if(json.success){
          localStorage.setItem("authToken",json.authToken);
          console.log(localStorage.getItem("authToken"));
          navigate("/")
        }
    }


    const onchange =(event)=>{
        setCount({...count,[event.target.name]:event.target.value})
    }

  return (
    <>
    <div className="container">
<form onSubmit={handlesubmit}>
 
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1"  name="email" value={count.email} onChange={onchange} />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={count.password} onChange={onchange} />
  </div>
  
  
  
  <button type="submit" className=" m-3 btn btn-success">Submit</button>
  <Link to="/createusers" className="m-3 btn btn-danger">Sign Up</Link>
 
</form>
</div>
    </>
  )
}
