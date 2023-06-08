import React,{useState} from 'react'
import "./Registeration.css"
import { useNavigate } from 'react-router-dom'



function Registeration() {
const navigate = useNavigate();
 const[name,setName] = useState('')
 const[email,setEmail] = useState('')
 const[pass,setPass] = useState('')
 //to store value in local storage
const handleSubmit=(e)=>{
        e.preventDefault();
         localStorage.setItem('name',name);
         localStorage.setItem('email',email);
         localStorage.setItem('pass',pass);
         navigate("/login")
}        


  return (
   <section className='vh-100 bg-image' style={{backgroundImage: "url('https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_1280.jpg')",}}>
            
            <div className='mask d-flex align-items-center h-100 gradient-custom-3'>
               <div className='container p-3 bg white'>
               
                            <h3 className='text-uppercase text-center mb-5'>
                                Create an acount
                            </h3>
                        <form onSubmit={handleSubmit}>
                              <div className='wraper'>
                              <div className="form-outline mb-4 ">
                                     <label className="form-label">Enter Name</label>
                                     <input name="name" value={name} onChange={(e)=>setName(e.target.value)} className="form-control form-control-lg" type='text' id="exampleInputName"  placeholder ='Enter Your Name'/><i className="fa fa-user"></i>
                            </div>
                            <div className="form-outline mb-4 ">
                                    <label  className="form-label">Email address</label>
                                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control form-control-lg" id="exampleInputEmail"   placeholder ='Enter Your Email'/><i className="fa fa-envelope"></i>
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-4">
                                    <label className="form-label">Password</label>
                                    <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)} className="form-control" id="exampleInputPassword1"  placeholder ='Enter Your Password'/><i className="fa fa-eye"></i>
                            </div>
                            <div className="mb-4 form-check">
                                    <input type="checkbox" className="form-check-input " />
                                    <label className="form-check-label">Check me out</label>
                            </div>
                            <div className="mb-4 form-check">
                            <button type="submit" className="btn btn-dark">Submit</button>
                            </div>
                              </div>
                            
                            
                       </form>
                    
               </div>
       
                   
            </div>
                

   </section>
  )
}

export default Registeration


