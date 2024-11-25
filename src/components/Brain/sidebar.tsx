import { Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { BadgePlus } from 'lucide-react';
import { Eye } from 'lucide-react';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';
function Sidebar() {
  const navigate = useNavigate();
  const [toogleMenu, setToogleMenu] = useState(true);
  const toogle = () =>{
    setToogleMenu(!toogleMenu);
  }

  const logout= ()=>{
    localStorage.removeItem('token');
    navigate('/');
  } 

  
  return (
    <>
      <div >
      <button onClick={toogle} className=' sm:block  lg:hidden  ' >{toogleMenu ?  <X/>:<Menu/> }</button>
    {toogleMenu ?  <div className='bg-gray-900 flex flex-col font-poppins w-32 sm:w-32 md:w-52 lg:w-64 min-h-screen'>
     <div className='flex p-2 mt-1'>
      <Brain className='text-white' />
      <h1 className='  text-sm sm:text-sm md:text=xl lg:text-2xl H1'>Second Brain</h1>
      </div>
      <div className='bg-gray-800 h-0.5'></div>
      <div className='mt-10' >
        <div>
        <Link to='/brain' className=' p-2 text-sm sm:text-sm md:text=xl lg:text-2xl font-semibold text-white font-poppins flex'> Create Brain <span className='ml-1 mt-1'><BadgePlus/></span> 
        </Link>
        </div>
        <div className='mt-10'>
        <Link to='/page' className=' p-2 text-sm sm:text-sm md:text=xl lg:text-2xl font-semibold text-white font-poppins flex'> View Brain <span className='ml-1 mt-1 '><Eye/></span></Link>
        </div>
        <div className='mt-10 flex p-2'>
          <button onClick={logout} className=' p-2 text-sm sm:text-sm md:text=xl lg:text-2xl font-semibold text-white font-poppins flex '>LogOut           <span className='ml-1 mt-1 h'><LogOut className='text-white '/></span></button>
        </div>
      </div>
    </div> : <div className='bg-gray-900 flex flex-col font-poppins w-32 sm:w-32 md:w-52 lg:w-64 min-h-screen hidden'></div>}
    </div>
    </>
    
  )
}

export default Sidebar