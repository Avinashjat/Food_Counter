import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
import Carsusel from '../components/Carsusel'


export default function Home() {
  return (
    <>
      <div> <NavBar  /> </div>
       <div> <Carsusel /> </div>
      <div className='m-3'> <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
       </div>

      <div> <Footer/> </div>
    </>
  )
}  
