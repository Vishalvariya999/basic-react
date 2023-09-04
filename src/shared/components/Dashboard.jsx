import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Apitest from '../../features/components/Apitest'
import Home from '../../features/components/Home'
import AxiosTest from '../../features/components/AxiosTest'
import FormsEx from '../../features/components/FormsEx'
import UserDashboard from '../../features/components/UserDashboard'
import FoodList from '../../features/components/FoodList'
import UseStateEx from '../../features/components/UseStateEx'
import UseEffectEx from '../../features/components/UseEffectEx'
import UseRedu from '../../features/components/UseRedu'

const Dashboard = () => {
    return (
        <>
            <Routes>
                <Route path='' element={<Home />} />
                <Route path='/api-test' element={<Apitest />} />
                <Route path='/axios-test' element={<AxiosTest />} />
                <Route path='/forms-test' element={<FormsEx />} />
                <Route path='/props-test' element={<UserDashboard />} />
                <Route path='/food-test' element={<FoodList />} />
                <Route path='/usestate-test' element={<UseStateEx />} />
                <Route path='/useEffect-test' element={<UseEffectEx />} />
                <Route path='/reducer-test' element={<UseRedu />} />
            </Routes>
        </>
    )
}

export default Dashboard