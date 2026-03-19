import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AppDetails = () => {


  const { id } = useParams()

  const [app, setApp] = useState(null)
  const [installed, setInstalled] = useState(false)

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(item => item.id === Number(id))
        setApp(found)
      })
  }, [id])

  if (!app) return <p>Loding.......</p>

  const format = (num) => {
    if (num >= 1000000000) return (num / 1000000000).toFixed(1) + "B"
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M"
    if (num >= 1000) return (num / 1000).toFixed(1) + "K"
    return num
  }
  return (
    <div className='max-w-6xl mx-auto'>
      <div >
        <div className='flex gap-6 items-center shadow-md rounded-lg p-4 mt-5 mb-20'>


          <img src={app.image} className='h-40 w-40 object-contain' />


          <div>
            <h1 className='text-2xl font-bold text-[#001931] py-2'>{app.title}</h1>
            <p className='text-gray-500'>Developed by : <span className='text-[#632EE3] text-xl font-bold'>{app.companyName} </span></p>
            <div className="divider divider-neutral"></div>

            <div className='flex flex-wrap  gap-10 items-center py-3 '>
              <div>
                <img className='w-8 h-8' src='https://i.ibb.co.com/RGVrj85T/fi-9131795.png' />
                <p>Download</p>
                <p className='text-2xl font-bold'>{format(app.downloads)}</p>
              </div>
              <div>
                <img className='w-8 h-8' src='https://i.ibb.co.com/5WWXHDH5/fi-1828884.png' />
                <p>Average Ratings</p>
                <p className='text-2xl font-bold'>{app.ratingAvg}</p>
              </div>
              <div>
                <img src='https://i.ibb.co.com/tTJxbvpB/fi-17817684.png' />
                <p>Total Reviews</p>
                <p className='text-2xl font-bold'>{format(app.reviews)}</p>
              </div>
            </div>



            <button className={`btn ${installed ? 'bg-gray-400' : 'bg-[#00C566]'}  text-white px-6  rounded-xl`} disabled={installed} onClick={() => {
              setInstalled(true)
              toast.success("App Installed Successfully!")

            }
            }

            >
              {installed ? "Installed" : "Install"}
            </button>
          </div>
        </div>
      </div>

      <div className='mb-20'>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart layout="vertical" data={app.ratings}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" />
            <Tooltip />
            <Bar dataKey="count" fill="#FF8811" />
          </BarChart>
        </ResponsiveContainer>
      </div>
        <div className="divider divider-neutral"></div>

      <div className='mb-10'>
        <h1 className='text-[#001931] text-2xl font-bold'>Description</h1>
        <p className='mt-5'>{app.description}</p>
      </div>
      <ToastContainer />
    </div>
  )
}

export default AppDetails
