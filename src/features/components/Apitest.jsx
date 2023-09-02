import React, { useEffect, useState } from 'react'

const Apitest = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, [])
    const getData = async () => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        const res = await data.json()
        console.log('res', res)
        setData(res)
    }
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((res, i) =>
                        <tr key={i}>
                            <th scope="row">{res.id}</th>
                            <td>{res.title}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Apitest