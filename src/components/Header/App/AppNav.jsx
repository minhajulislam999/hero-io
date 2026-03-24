import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import NotFound from '../../NotFount/NotFount'
import { FaSearch } from 'react-icons/fa'
import AppNotFound from '../../AppsNotFound/AppNotFound'

const AllApps = () => {
    const [apps, setApps] = useState([])
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setApps(data))
    }, [])

    const foramtDownloads = (num) => {
        if (num >= 1000000000) return (num / 1000000000).toFixed(1) + "B"
        if (num >= 1000000) return (num / 1000000).toFixed(1) + "M"
        if (num >= 1000) return (num / 1000).toFixed(1) + "K"
    }
    return (



        <div>


            <div className='text-center py-10'>
                <h1 className='text-2xl font-bold text-[#001931] m-5'>
                    Our All Applications
                </h1>
                <p>
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>
            </div>

            <div className='flex justify-between items-center px-4 py-3'>
                <div>
                    <p className='text-xl font-bold'>({apps.length}) Apps Founds</p>
                </div>
                <div className='relative'>
                    <FaSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 z-10' />
                   
                    <input
                        type='text'
                        placeholder='Search apps'
                        className='input input-bordered pl-9'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                </div>
            </div>

            {loading && <div className='flex justify-center py-10'>
                <span className="loading loading-spinner text-accent loading-xl"></span>

            </div>
            }
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>



                {

                    apps.filter(app => app.title.toLowerCase().includes(search.toLowerCase()))

                        .map(app => (
                            <Link to={`/app/${app.id} `} >

                                <div key={app.id} className="card bg-base-100 shadow p-4 flex flex-col items-center gap-2">

                                    <img className="w-full h-40 object-contain" src={app.image} />
                                    <p className='text-xl font-bold'>{app.title}</p>
                                    <div className='flex justify-between w-full'>

                                        <p className='flex gap-2'>
                                            <img src="https://i.ibb.co.com/RGVrj85T/fi-9131795.png" />
                                            {foramtDownloads(app.downloads)}</p>
                                        <p className='flex gap-2 text-[#FF8811]'>
                                            <img src='https://i.ibb.co.com/5WWXHDH5/fi-1828884.png' />
                                            {app.ratingAvg}
                                        </p>
                                    </div>

                                </div>

                            </Link>
                        ))

                }

            </div>

            {apps.filter(app => app.title.toLowerCase().includes(search.toLowerCase())).length === 0 && (
                <AppNotFound onGoBack={() => {
                    setSearch('')
                    
                }} />
            )}
        </div>

    )
}

export default AllApps
