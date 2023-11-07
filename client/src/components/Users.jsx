import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const Users = () => {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:4000/getUsers')
            .then(result => setUsers(result.data.users))
            .catch(err => console.log(err))
    }, [])
   

    const handleDelete = (id) => {
         axios.delete('http://localhost:4000/deleteUser/'+id)
         .then(result => {
              console.log(result.data);
             
             
                axios.get('http://localhost:4000/getUsers')
                    .then(result => setUsers(result.data.users))
                    .catch(err => console.log(err))
           
            navigate('/')
        //    window.location.reload()
        })
         .catch(err => console.log(err))
    }

    return (
        <> 
            <div className=" flex flex-col justify-center items-center">
                <Link to="/create" className="bg-green-600 p-4">Add +</Link>
                <table className="w-[30%] text-center">
                    <thead >
                        <tr >
                            <th>Name</th>
                            <th >Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="p-4">
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td className="text-center p-auto">
                                    <Link to={`/update/${user._id}`} className="bg-green-600 text-white rounded-md p-2">Update</Link>
                                    <button onClick={(e) => handleDelete(user._id)} className="bg-red-600 text-white p-2 rounded-md">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
          
        </>
    )
}

export default Users
