import React from 'react'
import Navbar from '../Components/Navbar'
import Body from '../Components/Body'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className='md:mx-5 mx-auto h-screen overflow-y-auto scrollbar-none bg-primary'>
        <Navbar/>
        <Body/>
        <Footer/>
    </div>
  )
}

export default Home