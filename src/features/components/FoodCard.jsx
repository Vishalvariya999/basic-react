import React from 'react'

const FoodCard = ({ foodLists }) => {
    return (
        <>
            <div className="d-flex flex-wrap mx-5 mt-3">
                {
                    foodLists.map((data, i) => {
                        const { image, name, desc, category } = data;
                        return (
                            <div className="card mx-2 mb-3" key={i} style={{ width: '18rem' }}>
                                <img src={image} className="card-img-top" alt={'logo'} style={{ height: '200px', width: '100%' }} />
                                <div className="card-body">
                                    <h5 className="card-title">{name}</h5>
                                    <p className="card-text">{desc}</p>
                                    <span href="#" className="card-link text-danger fw-bold">{category}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default FoodCard