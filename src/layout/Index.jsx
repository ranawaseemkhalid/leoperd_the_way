import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import Footer from './Footer'

const Index = () => {

    const isLogin = () => {
        // add authentication requirements
        // # user can be authenticated by using token from localStorage or cookies
        // # always authenticate user by using auth verification API by sending auth token as a parameter
        // # returing false statement represents authenticated user and the false de-authenticated user

        return true
    }
    return (
        isLogin() ?
            <>
                <Header />
                <Outlet />
                <Footer />
            </> :
            // Do someting according to the requirement
            // Eiteher you can navigate the user to any other route or can also return to other component such as login or signup
            null
    )
}

export default Index