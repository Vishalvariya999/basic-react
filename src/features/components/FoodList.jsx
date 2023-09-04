import React, { useState } from 'react'
import FoodCard from './FoodCard'
import FoodLists from './FoodArray.js'
import FoodCatList from './FoodCatList'

const FoodList = () => {
    const [foodLists, setFoodList] = useState(FoodLists)
    const uniquCatList = [...new Set(FoodLists.map((d) => {
        return d.category;
    })), "All"];

    const [updatedList, setUpadtedList] = useState(uniquCatList)
    const filterData = (cat) => {
        if (cat === "All") {
            setFoodList(FoodLists);
            return;
        }
        const updatedValue = FoodLists.filter((d) => {
            return d.category === cat;
        });
        setFoodList(updatedValue);
    }
    return (
        <>
            <h2 className="h2 border rounded p-2 text-center mt-2">Food zone</h2>
            <FoodCatList filterData={filterData} updatedList={updatedList} />
            <FoodCard foodLists={foodLists} />
        </>
    )
}

export default FoodList