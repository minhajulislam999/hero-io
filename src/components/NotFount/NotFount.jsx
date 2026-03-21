import { useNavigate } from 'react-router'

const NotFound = () => {
  const navigate = useNavigate()
  
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center'>
      <h1 className='text-8xl font-bold text-[#632EE3]'>404</h1>
      <h2 className='text-2xl font-bold mt-4'>Oops, page not found!</h2>
      <p className='text-gray-500 mt-2'>The page you are looking for is not available.</p>
      <button 
        onClick={() => navigate('/')} 
        className='btn bg-[#632EE3] text-white mt-6'
      >
        Go Back!
      </button>
    </div>
  )
}

export default NotFound