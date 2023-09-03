import React from 'react'
import { Link, NavLink, Routes } from 'react-router-dom';

const Header = () => {
    const routerData = [
        {
            path: 'api-test',
            lable: 'Api Test'
        },
        {
            path: 'axios-test',
            lable: 'Axios'
        },
        {
            path: 'crud',
            lable: 'Crud'
        },
    ];
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {routerData.map((res, i) => (
                                <li className="nav-item" key={i}>
                                    <NavLink className="nav-link text-dark" aria-current="page" to={res?.path}>
                                        {res?.lable}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;