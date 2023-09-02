import React from 'react'
import { useRoutes } from 'react-router-dom'
import Header from '../shared/components/Header'
import Apitest from '../features/components/Apitest'

const AllRoute = () => {
    const data = useRoutes([
        {
            path: "/",
            element: <Header />,
            children: [
                {
                    path: "/api-test",
                    element: <Apitest />
                }
            ]
        }
    ])
    return data;
}

export default AllRoute