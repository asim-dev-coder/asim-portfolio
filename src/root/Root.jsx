import React from 'react'
import TopSection from '../components/header/TopSection'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/Footer'

function Root() {
  return (
    <>
      <TopSection />
      <div className='sticky top-0 z-10'>
        <Navbar />
      </div>
      <Outlet>
      </Outlet>
      <Footer />
    </>
  )
}

export default Root