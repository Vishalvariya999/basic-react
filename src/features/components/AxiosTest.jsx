import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosTest = () => {
    const [getProductData, getData] = useState([]);
    useEffect(() => {
        getProducts();
    }, [])
    const getProducts = () => {
        axios.get(`https://dummyjson.com/products`).then((res) => {
            getData(res.data.products);
        }).catch((err) => {
            console.log('err', err);
        });
    }
    return (
        <>
            <div className="mt-4">
                <div className="d-flex flex-wrap mx-5">
                    {
                        getProductData.map((data, i) => {
                            return (
                                <div className="card mx-2 mb-3" key={i} style={{ width: '18rem' }}>
                                    <img src={data?.images[0]} className="card-img-top" alt={data?.title} style={{ height: '200px', width: '100%' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{data?.title}</h5>
                                        <p className="card-text">{data?.description}.</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div >
        </>
    )
}

export default AxiosTest;