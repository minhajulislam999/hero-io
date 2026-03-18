import React from 'react'

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen py-10">
  <div className="hero-content flex-col">
    <div className="w-80px h-80px text-center">
      <h1 className="text-3xl md:text-5xl font-bold">
        
        <div className='py-3'>
<div>
    <span className='text-[#001931] m-3'>
        We Build
        </span><br></br>
</div>
        <div className='py-3'>
            <span className='text-[#632EE3]'>
            Productive 
        </span>
        <span className='text-[#001931] m-4'>
            Apps
        </span>

        </div>
        </div>
        

        </h1>
      <p className="py-6 px-4 md:px-60">
        At HERO .IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>
        
      
    </div>
    <div className='flex flex-wrap gap-4 justify-center  '>
<button className="btn  bg-[#D2D2D2] rounded-xl text-xl font-bold">
    <img src='https://i.ibb.co.com/kbNygSK/Group-3.png' />
    Google Play</button>


      <button className="btn bg-[#D2D2D2] rounded-xl text-xl font-bold">
        <img src='https://i.ibb.co.com/S4m56z82/fi-5977575.png' />
        
        App Store</button>
        </div>
      <div className='py-40'>
        <img src='/hero.png' />
      </div>


  </div>



</div>


    </div>
  )
}

export default Banner
