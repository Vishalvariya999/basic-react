import React from 'react';

const PropsEx = ({ userData }) => {
    console.log('userData', userData);
    return (
        <div className="d-flex flex-wrap mx-5">
            {
                userData.map((data, i) => {
                    return (
                        <div className="card mx-2 mb-3" key={i} style={{ width: '18rem' }}>
                            <img src={data?.image} className="card-img-top" alt={data?.age} style={{ height: '200px', width: '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">{data?.name}</h5>
                                <p className="card-text">{data?.gender}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PropsEx