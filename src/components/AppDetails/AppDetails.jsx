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
  return (
    <div>
      <div className=''>
        <div>

          <div>
            <img src={app.image} className='h-40 w-40 object-contain' />

          </div>
          <div>
            <h1>{app.title}</h1>
            <p>Developed by : {app.companyName}</p>

          </div>
        </div>


        <div className='flex flex-wrap justify-center gap-10'>
          <div>
            <img src='https://i.ibb.co.com/RGVrj85T/fi-9131795.png' />
            <p>Download</p>
            <p>{app.downloads}</p>
          </div>
          <div>
            <img src='https://i.ibb.co.com/5WWXHDH5/fi-1828884.png' />
            <p>Average Ratings</p>
            <p>{app.ratingAvg}</p>
          </div>
          <div>
            <img src = 'https://i.ibb.co.com/tTJxbvpB/fi-17817684.png' />
            <p>Total Reviews</p>
            <p>{app.reviews}</p>
          </div>
        </div>

        <button disabled ={installed} onClick={()=>{
        setInstalled(true)
                toast.success("App Installed Successfully!")

        }
      }
        
        className='btn btn-primary'>
          {installed ? "Installed" : "Install"}
        </button>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart layout="vertical" data={app.ratings}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip />
          <Bar dataKey="count" fill="#FF8811" />
        </BarChart>
      </ResponsiveContainer>
      <ToastContainer />
    </div>
  )
}

export default AppDetails
