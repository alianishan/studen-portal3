import React,{useState} from 'react'
import "./Registeration.css"
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate();
 
 const[email,setEmail] = useState('')
 const[pass,setPass] = useState('')
 //to store value in local storage
const handleLogin=(e)=>{
        e.preventDefault();
       
         const email1= localStorage.getItem('email');
        const pwd= localStorage.getItem('pass');
         if( email === email1 && pass === pwd){
          navigate("/home")
         }
         else{
          alert("You Enter Invalid")
         }
        
} 





  return (
    <section className='vh-100 bg-image' style={{backgroundImage: "url('https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537_640.jpg')",}}>
            
            <div className='mask d-flex align-items-center h-100 gradient-custom-3'>
               <div className='container p-3 bg white'>
               
                            <h3 className='text-uppercase text-center mb-5'>
                                Login
                            </h3>
                        <form onSubmit={handleLogin}>
                              <div className='wraper'>
                              
                            <div className="form-outline mb-4 ">
                                    <label  className="form-label">Email address</label>
                                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control form-control-lg" id="exampleInputEmail"   placeholder ='Enter Your Email'/><i className="fa fa-envelope"></i>
                                    
                            </div>
                            <div className="mb-4">
                                    <label className="form-label">Password</label>
                                    <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)} className="form-control" id="exampleInputPassword1"  placeholder ='Enter Your Password'/><i className="fa fa-eye"></i>
                            </div>
                            <div className="mb-4 form-check">
                            <button type="submit" className="btn btn-dark">Login</button>
                            </div>
                              </div>
                            
                            
                       </form>
                    
               </div>
       
                   
            </div>
                

   </section>
  )
  
}

export default Login
