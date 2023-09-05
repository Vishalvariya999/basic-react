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
import TodoList from '../../features/components/TodoList'
import Weather from '../../features/components/Weather'

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
                <Route path='/todolist-test' element={<TodoList />} />
                <Route path='/weather-test' element={<Weather />} />
            </Routes>
        </>
    )
}

export default Dashboard