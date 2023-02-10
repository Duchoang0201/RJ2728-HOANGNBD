import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import UserDetail from './User/Detail/UserDetail'
import FormSignup from './User/Form/Formsignup'
import UserList from './User/List/UserList'


function BaseWebRouter() {
    return (

        <BrowserRouter>
            <ul className="nav nav-tabs justify-content-evenly">
                <li className="nav-item">
                    <Link className='nav-link' to={'/'}> Home</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to={'/userlist'}> UserList</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to={'/form'}> Form</Link>
                </li>
            </ul>
           
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/userlist' element={<UserList />} />
                <Route path='/detail/:id' element={<UserDetail />} />
                <Route path='/form' element={<FormSignup />} />
                <Route path='/form/:id' element={<FormSignup />} />

            </Routes>
        </BrowserRouter>
    )
}

export default BaseWebRouter