import { useContext, useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import { BlogContext } from './context/BlogContext'
import Login from './components/login/Login'
import CreateUser from './components/createuser/CreateUser'
import ForgetPassword from './components/forgetpassword/ForgetPassword'
import About from './components/about/About'
import { Route, Routes } from 'react-router-dom'


function App() {
  const { loginToken } = useContext(BlogContext);
  console.log(loginToken);

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/createuser' element={<CreateUser />} />
      <Route path='/forgetpassword' element={<ForgetPassword />} />
      <Route path='/about' element={<About />} />
    </Routes>
    <Footer />
    <p></p>
    </>
  )
}

export default App
