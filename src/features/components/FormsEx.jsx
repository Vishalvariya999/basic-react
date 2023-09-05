import React, { useState } from 'react'

const FormsEx = () => {
    const [userReg, setRegValue] = useState({
        first_name: "",
        last_name: "",
        gender: "",
        email: "",
        mobile: "",
        address: ""
    });

    const [allRecoreds, setNewRecoreds] = useState([{
        first_name: "Vishal",
        last_name: "Variya",
        gender: "Male",
        email: "vishal@gmail.com",
        mobile: "8856544121",
        address: "Test"
    }]);

    const inputHandle = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setRegValue({ ...userReg, [name]: value });
    }

    const onSubmit = (e) => {

        e.preventDefault();
        const newRecored = { ...userReg, time: new Date() }
        console.log('newRecored', newRecored)
        setNewRecoreds([...allRecoreds, newRecored]);
        console.log('allRecoreds', allRecoreds);
        setRegValue({
            first_name: "",
            last_name: "",
            gender: "",
            email: "",
            mobile: "",
            address: "",
            time: ""
        })
    }

    const onEdit = (i) => {
        console.log('i', i)
    }

    const onDelete = (i) => {
        console.log('i', i)
    }

    return (
        <>
            <div className="row mt-3 p-3">
                <div className='col-lg-6 border rounded p-2'>
                    <h2 className='h2 border p-2 rounded text-center'>Registration Form</h2><hr />
                    <form className="row g-3" onSubmit={onSubmit}>
                        <div className="col-lg-6">
                            <label className='form-label'>First name</label>
                            <input type="text" className='form-control' value={userReg.first_name} name='first_name' onChange={inputHandle} placeholder='Enter surname' />
                            <small className='text-danger'>Please enter first name</small>
                        </div>
                        <div className="col-lg-6">
                            <label className='form-label'>Last name</label>
                            <input type="text" className='form-control' name='last_name' value={userReg.last_name} onChange={inputHandle} placeholder='Enter name' />
                            <small className='text-danger'>Please enter last name</small>
                        </div>
                        <div className="col-lg-12">
                            <label className='form-label'>Gender</label>
                            <select className="form-select" aria-label=".form-select-sm example" name='gender' onChange={inputHandle} value={userReg.gender}>
                                <option value=''>Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            <small className='text-danger'>Select gender</small>
                        </div>
                        <div className="col-lg-6">
                            <label className='form-label'>Email address</label>
                            <input type="text" className='form-control' name='email' value={userReg.email} onChange={inputHandle} placeholder='Enter email address' />
                            <small className='text-danger'>Please enter email address</small>
                        </div>
                        <div className="col-lg-6">
                            <label className='form-label'>Mobile</label>
                            <input type="number" className='form-control' onChange={inputHandle} value={userReg.mobile} name='mobile' placeholder='Enter mobile number' />
                            <small className='text-danger'>Please enter mobile number</small>
                        </div>
                        <div className="col-lg-12">
                            <label className="form-label">Address</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" value={userReg.address} onChange={inputHandle} name='address' rows="3" placeholder='Enter address'></textarea>
                            <small className='text-danger'>Please enter address</small>
                        </div>
                        <div className="col-lg-12">
                            <button type='submit' className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className='col-lg-6 mt-2'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Email</th>
                                <th scope="col">Mobile</th>
                                <th scope="col">Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allRecoreds.length ? allRecoreds.map((res, i) => {
                                    return (<tr key={i}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{res?.first_name}</td>
                                        <td>{res?.last_name}</td>
                                        <td>{res?.gender}</td>
                                        <td>{res?.email}</td>
                                        <td>{res?.mobile}</td>
                                        <td>
                                            <button className='btn btn-sm btn-success mx-1' onClick={onEdit(i)}>Edit</button>
                                            <button className='btn btn-sm btn-danger' onClick={onDelete(i)}>Delete</button>
                                        </td>
                                    </tr>)
                                }) : <tr>
                                    <td className='text-center fw-bold' colSpan={9}>No recored found</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default FormsEx