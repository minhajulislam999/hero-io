import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link,  useNavigate } from 'react-router';

const TopApp = () => {
    const [apps, setApp] = useState([]);

    const foramtDownloads = (num) => {
        if (num >= 1000000000) return (num / 1000000000).toFixed(1) + "B"
        if (num >= 1000000) return (num / 1000000).toFixed(1) + "M"
        if (num >= 1000) return (num / 1000).toFixed(1) + "K"
    }

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {

                setApp(data)

            })

    }, [])

    const navigate = useNavigate()
    return (
<>
<div className='flex items-center py-5'>
    <div>
                <h1>Trending Apps</h1>

    </div>

<div>
                    <p>Explore All Trending Apps on the Market developed by us</p>

</div>
            </div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>

            
            {
                apps.sort((a, b) => b.downloads - a.downloads)
                    .slice(0, 8)
                    .map(app => (




                        <Link to = {`/app/${app.id}`} >

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

      
      
        <div className='flex justify-center'>

            <button onClick={() => navigate('/all-apps')} className='btn btn-primary rounded-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex items-center mt-6 text-white border-none'>Show All</button>
        </div>

        </>
    )
}

export default TopApp
