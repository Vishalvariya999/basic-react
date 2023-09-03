import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Apitest from '../../features/components/Apitest'
import Home from '../../features/components/Home'
import AxiosTest from '../../features/components/AxiosTest'

const Dashboard = () => {
    return (
        <>
            <Routes>
                <Route path='' element={<Home />} />
                <Route path='/api-test' element={<Apitest />} />
                <Route path='/axios-test' element={<AxiosTest />} />
            </Routes>
        </>
    )
}

export default Dashboard