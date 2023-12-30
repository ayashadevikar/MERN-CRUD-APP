import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const CreateUser = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  const navigate = useNavigate()


   const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/createUser", {name, email, age})
    .then(result => {
      console.log(result)
      navigate('/')
    })

    .catch(err => console.log(err))
   }
  //  something
  return (
    <>
       <div className='flex flex-col items-center mt-4'>
         <h1 className="text-3xl font-bold underline ">
           Add User 
         </h1>
       <form onSubmit={Submit} className='flex flex-col mt-4 gap-x-4 gap-y-4 items-center justify-center'>
            <div className="flex flex-col gap-y-2">
               <label className='text-xl font-bold'>Name</label>
               <input type="text"  placeholder='Enter Name' className="border-2 w-52 p-2 rounded-md h-10 form-control" 
               onChange={(e) => setName(e.target.value)}/>
            </div>
              
            <div className="flex flex-col gap-y-2">
                <label className='text-xl font-bold'>Email</label>
                <input type="email"  placeholder='Enter Email' className="border-2 h-10 w-52 p-2 rounded-md" 
                 onChange={(e) => setEmail(e.target.value)}/>
            </div>  
               
            <div className="flex flex-col gap-y-2">
                <label className='text-xl font-bold'>Age</label>
                <input type="number"  placeholder='Enter Age' className="border-2 h-10 w-52 p-2 rounded-md"
                  onChange={(e) => setAge(e.target.value)}/>
            </div>  
              
            <button className='border-2 bg-green-600 font-bold text-xl text-white p-2 px-8'>Submit</button>
          
       </form>
      </div>
    </>
  )
}

export default CreateUser
