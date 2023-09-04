import React from 'react'

const FoodCatList = ({ filterData, updatedList }) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light mt-2">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {
                                updatedList.map((res, i) => {
                                    return (
                                        <span className="nav-link" key={i} onClick={() => filterData(res)}>{res}</span>
                                    )
                                })
                            }
                            {/* <span className="nav-link" onClick={() => filterData('lunch')}>Lunch</span> */}
                            {/* <span className="nav-link" onClick={() => filterData('dinner')}>Dinner</span> */}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default FoodCatList