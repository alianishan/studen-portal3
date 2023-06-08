import React,{useState} from "react"
import './Registeration.css'

function Home() {
  const[name,setName] = useState('')
  const[number,setNumber] = useState('')
  const[address,setAddress] = useState('')
  const[email,setEmail] = useState('')
  const[pass,setPass] = useState('')
 
 const handleSubmit=(event)=>{
  
                event.preventDefault();
                
                               const val = [{
                                         name,
                                         email,
                                         pass,
                                         number,
                                         address,

                                            }];
                               
                                          console.log(val)


  setName('');
  setEmail('');
  setPass('');
  setNumber('');
  setAddress('');
};





 


  return (
    <section className='vh-100 bg-image' style={{backgroundImage: "url('https://cdn.pixabay.com/photo/2016/03/26/13/09/workspace-1280538_1280.jpg')",}}>
            
    <div className='mask d-flex align-items-center h-100 gradient-custom-3'>
       <div className='container2 p-3 bg white'>
       
                    <h3 className='text-uppercase text-center mb-5'>
                       Registeration
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
                    </div>
                    <div className="mb-4">
                            <label className="form-label">Roll No</label>
                            <input type="Id" value={pass} onChange={(e)=>setPass(e.target.value)} className="form-control form-control-lg" id="exampleInputPassword1"  placeholder ='Enter Your Role Number'/><i className="fa fa-file"></i>
                    </div>
                    <div className="form-outline mb-4 ">
                             <label className="form-label">Enter Phone Number</label>
                             <input name="number" value={number} onChange={(e)=>setNumber(e.target.value)} className="form-control form-control-lg" type='number' id="exampleInputName"  placeholder ='Enter Your Number'/><i className="fa fa-phone"></i>
                    </div>
                    <div className="form-outline mb-4 ">
                             <label className="form-label">Enter Your Address</label>
                             <input name="number" value={address} onChange={(e)=>setAddress(e.target.value)} className="form-control form-control-lg" type='number' id="exampleInputName"  placeholder ='Enter Your Number'/><i className="fa fa-home"></i>
                    </div>
                    <div className="mb-4 form-check">
                    <button type="submit" className="btn btn-dark col-xs-2 margin-left">Submit</button>
                    <button type="reset" className="btn btn-dark col-xs-2 margin-left" id='btn2'>Reset</button>
                    </div>
                      </div>
                    
                    
               </form>
            
       </div>
  <div className='container3'>
    <div className='container4'><h3>Student Information</h3></div>
            
                    
  <table className="table table-striped">
    <thead>
    <tr>
      <th >Name</th>
      <th >Email</th>
      <th >Roll No</th>
      <th >Phone No</th>
      <th >Address</th>
    </tr>
            </thead>
            <tbody>
    <tr>
      <td >Name</td>
      <td >Email</td>
      <td >Roll No</td>
      <td >Phone No</td>
      <td >Address</td>
    </tr>
    <tr>
      <td >Name</td>
      <td >Email</td>
      <td >Roll No</td>
      <td >Phone No</td>
      <td >Address</td>
    </tr>
    {/*{
    val.map((key,i) => 
    
      <tr>
      <td >{key.name}</td>
      <td >{key.email}</td>
      <td >{key.pass}</td>
      <td >{key.number}</td>
      <td >{key.adress}</td>
    </tr>
    
    )
    }  */}   
           
            </tbody>
        </table>
        </div>
       

           
    </div>

    
  
    
   



    
        

</section>





  )
}

export default Home
