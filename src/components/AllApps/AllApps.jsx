import React, { useEffect, useState } from 'react'

const AllApps = () => {
    const [apps, setApps] = useState([])

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
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>

                {

                    apps.map(app => (
                        <Link to={`/app/${app.id}`} >

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
        </div>
    )
}

export default AllApps
