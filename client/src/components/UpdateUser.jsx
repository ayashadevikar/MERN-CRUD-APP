import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios"

const UpdateUser = () => {

  const {id} = useParams()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:4000/getUsersById/${id}`)
        .then(result => {console.log(result.data)
          debugger
          setName(result.data.users.name)
          setEmail(result.data.users.email)
          setAge(result.data.users.age)
        })
        .catch(err => console.log(err))
}, [id])

   const Update = (e) => {
    e.preventDefault();
    axios.put("http://localhost:4000/editUser/"+id, {name, email, age})
    .then(result => {
      console.log(result)
      navigate('/')
    })

    .catch(err => console.log(err))
   }

  return (
    <>
        <div className='flex flex-col items-center mt-4'>
       <h1 className="text-3xl font-bold underline">
         Update User 
       </h1>
       <form onSubmit={Update} className='flex flex-col mt-4 gap-x-4 gap-y-4 items-center justify-center'>
            <div className="flex flex-col gap-y-2">
               <label className='text-xl font-bold'>Name</label>
               <input type="text"  placeholder='Enter Name' className="border-2 w-52 p-2 rounded-md h-10 form-control"
               value={name} onChange={(e)=> setName(e.target.value) }/>
            </div>
              
            <div className="flex flex-col gap-y-2">
                <label className='text-xl font-bold'>Email</label>
                <input type="email"  placeholder='Enter Email' className="border-2 w-52 p-2 rounded-md h-10"
                 value={email} onChange={(e)=> setEmail(e.target.value) }/>
            </div>  
               
            <div className="flex flex-col gap-y-2">
                <label className='text-xl font-bold'>Age</label>
                <input type="number"  placeholder='Enter Age' className="border-2 w-52 p-2 rounded-md h-10"
                  value={age} onChange={(e)=> setAge(e.target.value) }/>
            </div>  
              
            <button className='border-2 bg-green-600 font-bold text-xl text-white p-2 px-8' >Update</button>
          
       </form>
      </div>
  </>
  )
}

export default UpdateUser
