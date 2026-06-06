import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './MainLayout';
import Home from './pages/home/Home';
import User from './src/components/user/User.jsx';
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
                    path: "user",
                    element:<User />
                },
                
            ]

        },
    ]
    
);

export default router