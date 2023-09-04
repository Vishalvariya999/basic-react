import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Apitest from '../../features/components/Apitest'
import Home from '../../features/components/Home'
import AxiosTest from '../../features/components/AxiosTest'
import FormsEx from '../../features/components/FormsEx'
import UserDashboard from '../../features/components/UserDashboard'

const Dashboard = () => {
    return (
        <>
            <Routes>
                <Route path='' element={<Home />} />
                <Route path='/api-test' element={<Apitest />} />
                <Route path='/axios-test' element={<AxiosTest />} />
                <Route path='/forms-test' element={<FormsEx />} />
                <Route path='/props-test' element={<UserDashboard />} />
            </Routes>
        </>
    )
}

export default Dashboard