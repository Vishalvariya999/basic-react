import React, { useEffect, useState } from 'react'

const Apitest = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, [])
    const getData = async () => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        const res = await data.json();
        setData(res);
    }
    return (
        <div className='mt-4'>
            <h2 className='h2 text-center bg-success text-white'>Test Data</h2>
            <table className="table table-bordered">
                <thead className='table table-success'>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length ? data.map((res, i) =>
                        <tr key={i}>
                            <th scope="row">{res.id}</th>
                            <td>{res.title}</td>
                        </tr>
                    ) : <tr>
                        <td className='text-center fw-bold' colSpan={2}>No recored found</td>
                    </tr>}
                </tbody>
            </table>
        </div>
    )
}

export default Apitest