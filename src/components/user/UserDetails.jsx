import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
export default function UserDetails() {
    const {id} = useParams();

    const getUserDetails = async ()=>{
    const response = await axios.get(`https://ums12.runasp.net/api/users/${id}`);
    return response.data.data;
    }

    const {data,isError,isLoading,error} = useQuery({
        queryKey:['users',id],
        queryFn:getUserDetails,
        staleTime:1000 * 60 * 5,
      });
    if(isLoading)return <h2>Loading...</h2>
  
    if(isError)return <h2>error..{error}</h2>  



  return (<div>
    <h1>User Details</h1>
    <p>Name: {data.name}</p>
    <p>Email: {data.email}</p>
    <p>Age: {data.age}</p>
  </div>)
}
