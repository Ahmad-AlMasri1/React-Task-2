import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './MainLayout';
import Home from './pages/home/Home';
import Users from './src/components/user/Users.jsx';
import UserDetails from './src/components/user/UserDetails.jsx';
const router = createBrowserRouter(
    [
        {
            path: "/",
            element:<MainLayout />,
            children:[
                {
                    index:true,
                    element:<Home />
                },
                {
                    path: 'users',
                    element:<Users />
                },
                {
                    path:'user/:id',
                    element:<UserDetails />
                }
            ]

        },
    ]
    
);

export default router