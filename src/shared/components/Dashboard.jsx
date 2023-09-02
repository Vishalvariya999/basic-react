import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Apitest from '../../features/components/Apitest'
import Home from '../../features/components/Home'

const Dashboard = () => {
    return (
        <>
            <Routes>
                <Route path='' element={<Home />} />
                <Route path='/api-test' element={<Apitest />} />
            </Routes>
        </>
    )
}

export default Dashboard