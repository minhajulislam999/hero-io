import React from 'react'

const Banner = () => {
    return (
        <div>
            <div className="flex flex-col items-center  mb-0 pb-0 ">
                <div className="hero-content flex-col pb-0">
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
                    <div className='pt-10'>
                        <img src='/hero.png' />


                    </div>

                   
                </div>



            </div>



            <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  h-[410px] text-white w-full py-10 mt-0 '>

                <div className='py-5'>
                    <h1 className='text-center font-bold text-2xl'>Trusted by Millions, Built for You</h1>
                </div>
                <div className='flex flex-wrap justify-center gap-10'>
                    <div className='text-center'>
                        <p>Total Downloads</p>
                        <p className='text-4xl font-bold py-4'>29.6M</p>
                        <p className='text-xs'>21% more than last month</p>
                    </div>
                    <div className='text-center'>
                        <p>Total Reviews</p>
                        <p className='text-4xl font-bold py-4'>906K</p>
                        <p className='text-xs'>46% more than last month</p>
                    </div>
                    <div className='text-center'>
                        <p>Active Apps</p>
                        <p className='text-4xl font-bold py-4'>132+</p>
                        <p className='text-xs'>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
