import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Footer from '../common/Footer/Footer'
import Navigation from '../common/Navigation/Navigation'
import Home from './Home/Home'
import UserDetail from './User/Detail/UserDetail'
import FormSignup from './User/Form/Formsignup'
import UserList from './User/List/UserList'

type Props = {
    setIsLogin: (value: boolean) => void; //setIsLogin(true)
}
function BaseWebRouter(props: Props) {
    const { setIsLogin } = props;
    return (

        <BrowserRouter>

            <Navigation setIsLogin={setIsLogin} />


            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/userlist' element={<UserList />} />
                <Route path='/detail/:id' element={<UserDetail />} />
                <Route path='/form' element={<FormSignup />} />
                <Route path='/form/:id' element={<FormSignup />} /> 

                
                <Route
                    path='*'
                    element={
                        <main style={{ padding: '1rem' }}>
                            <p>404 Page not found 😂😂😂</p>
                        </main>
                    }
                />
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}

export default BaseWebRouter