import React, { useEffect, useState } from 'react'

const Apitest = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, [])
    const getData = async () => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/comments`)
        const res = await data.json();
        setData(res);
    }

    const onSearch = async (event) => {
        const searchValue = event.target.value;
        if (searchValue.trim() === '') {
            // If the search input is empty, fetch all posts
            getData();
        }
        else {
            const data = await fetch(`https://jsonplaceholder.typicode.com/comments/?postId=${searchValue}`);
            const res = await data.json();
            setData(res);
        }
    }

    return (
        <div className='mt-4'>
            <h2 className='h2 text-center bg-success text-white'>Test Data</h2>
            <div className="col-3 mb-2">
                <input type='text' className='form-control form-control-lg' placeholder='Search...' onChange={(event) => onSearch(event)} />
            </div>
            <table className="table">
                <thead className='table table-success'>
                    <tr>
                        <th scope="col">Action</th>
                        <th scope="col">#</th>
                        <th scope="col">Post Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Body</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length ? data.map((res, i) =>
                        <tr key={i}>
                            <td style={{ width: '130px' }}>
                                <button className='btn btn-sm btn-success mx-1'>Edit</button>
                                <button className='btn btn-sm btn-danger'>Delete</button>
                            </td>
                            <th scope="row">{res.id}</th>
                            <td style={{ width: '80px' }}>{res.postId}</td>
                            <td>{res.name}</td>
                            <td>{res.email}</td>
                            <td>{res.body}</td>
                        </tr>
                    ) : <tr>
                        <td className='text-center fw-bold' colSpan={5}>No recored found</td>
                    </tr>}
                </tbody>
            </table>
        </div>
    )
}

export default Apitest