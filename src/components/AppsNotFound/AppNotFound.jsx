import { Link } from 'react-router'
// import { useNavigate } from 'react-router'

const AppNotFound = ({onGoBack}) => {
//   const navigate = useNavigate()
  
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center'>
      <img src='https://i.ibb.co.com/MxDkxhgp/4660853-2417235-1.png' className='w-64' />
      <h1 className='text-3xl font-bold mt-6'>OPPS!! APP NOT FOUND</h1>
      <p className='text-gray-500 mt-2'>The App you are requesting is not found on our system. please try another apps</p>
      
      <Link to='/app' onClick={onGoBack} className="btn bg-[#632EE3] text-white mt-6" >
      Go Back!
      </Link>
        
      
    </div>
  )
}

export default AppNotFound