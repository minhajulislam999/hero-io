import React, { useEffect } from 'react'
import Navbar from '../Header/Navbar'
import { Outlet, useNavigation } from 'react-router'
import Footer from '../Footer/Footer'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'

const MainLayout = () => {
  const navigation = useNavigation();
  // const isLoading = navigation.state === "loading";
   useEffect(() =>{
    if(navigation.state === 'loading'){
      nProgress.start()
    }
    else{
      nProgress.done()
    }
   },[navigation.state])


  return (

  
    <div>

    {
      // isLoading && (
      //   <a className = "btn btn-ghost text-xl text-[#632EE3] w-110px h-40px rounded-xl">
      //     <img className='w-40px h-40px' src="https://i.ibb.co.com/wFJP7LRh/logo-D9-NHcesw-1.png" alt="" srcset="" />

      //     HERO.IO</a>
        
      // )
    }
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout
