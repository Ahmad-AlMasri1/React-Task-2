import React from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function User() {
   const getUsers = async ()=>{
    const response = await axios.get(`https://ums12.runasp.net/api/users`);
    return response.data;
  }
  const {data,isError,isLoading,error} = useQuery({
    queryKey:['users'],
    queryFn:getUsers,
    staleTime:1000 * 60 * 5,
  });
  
  if(isLoading)return <h2>Loading...</h2>
  
  if(isError)return <h2>error..{error}</h2>

  return (
    <>  
        {
        
            data.users.map((user)=><div>
                <h2>{user.name}</h2>
            </div>)
        }

    </>
  )
  
}
