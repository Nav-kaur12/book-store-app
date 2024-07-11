import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import {Link} from 'react-router-dom'

function Course() {

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white '> 
        <div className='mt-10 pt-20 items-center justify-center text-center  dark:bg-gray-900 dark:text-white' >
            <h1 className='text-2xl  md:text-4xl'>
                We're delighted to have you  <span className='text-secondary'>Here!:)</span>
            </h1>
            <p className='mt-12'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus ducimus repudiandae exercitationem recusandae corrupti culpa quas, et esse, doloribus ipsam doloremque impedit illo, cum suscipit amet! Ducimus quis commodi quia saepe ex eum debitis. Perferendis vitae accusamus modi, rem id? Distinctio perspiciatis quasi rerum cum fugiat saepe aspernatur iste facilis accusantium ullam.
            </p>           
            <Link to='/' >
             <button className='bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-secondary duration-300 mt-6'>Back</button>
            </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            list.map((item)=>(
            <Cards item={item} key={item.id}/>

          ))
 
          }
         
        </div>

        
    </div>
        

    </>
  )
}

export default Course