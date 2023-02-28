import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaInstagram, FaLinkedinIn, FaGithub} from 'react-icons/fa'
import { SocialIcon } from 'react-social-icons'

const Main = () => {
  return (
    <div id='main'>
     <div className='grid h-screen place-items-center '>
       <img className='object-fill rounded-full' src="https://i.ibb.co/b2BNbcL/e876b1e2-bc28-4f0f-8e46-b7f28ec655c3.jpg" alt="my-image" />
     </div>
      
    <div className='w-full h-screen absolute top-0 left-0'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center  items-center'>
            <h1 className='sm:text-6xl text-4xl font-bold text-gray-100'>Yunus Emre Uslu</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-100'>
              <TypeAnimation
              sequence={[
              'Frontend Developer', 
              2000, 
              'Javascript Lover', 
              2000,
              'Computer Engineer',
              2000, 
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
              />
            </h2>
       <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <a href='https://www.linkedin.com/in/yunus-emre-uslu/'>
                <FaLinkedinIn className='cursor-pointer text-gray-100' size={32} />
            </a>
            <a href='https://github.com/YunusEmreUslu'>
                <FaGithub className='cursor-pointer text-gray-100' size={32}/>
            </a>
            <a href='https://www.instagram.com/yunyuslu/'>
                <FaInstagram className='cursor-pointer text-gray-100' size={32}/>
            </a>       
        </div>  
        </div>
    </div>
    </div>
  )
}

export default Main