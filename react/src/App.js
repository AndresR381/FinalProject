import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from "./components/Header"
import Footer from "./components/Footer"
import ErrorPage from "./components/ErrorPage"

import Home from './components/Home'
// import About from './components/About'
import Artists from './components/Artists'
import Bands from './components/Bands'
import Songs from './components/Songs'
import Single from './components/Single'
import UserForm from './components/UserForm'
import NewUserForm from './components/NewUserForm'

const App =()=> {

    return(
        <>
            <Header />
            <Routes>
                <Route path='/home' element={ <Home /> }></Route>
                <Route path='/artist' element={ <Artists /> }></Route>
                <Route path='/band' element={ <Bands /> }></Route>
                <Route path='/song' element={ <Songs /> }></Route>
                <Route path='*' element={ <ErrorPage /> }></Route>
                <Route path=':path/:id' element={ <Single />}></Route>
                <Route path='/userform' element={<UserForm/>}></Route>
                <Route path='/newuserform' element={<NewUserForm/>}></Route>
            </Routes>
            <Footer />
        </>
    )
}

export default App