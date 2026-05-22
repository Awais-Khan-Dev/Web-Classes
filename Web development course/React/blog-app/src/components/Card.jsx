import React from 'react'

function Card({title, description,imageUrl}) {
  return (
    <div className='p-2 bg-slate-200  rounded-lg'>
        <div className='w-full h-[200px]  bg-gray-400 rounded-md overflow-hidden'>
            <img src={imageUrl} alt="" className='h-full w-full object-cover hover:scale-[2] transition-all duration-300 ease-in-out' />
        </div>

        <h2 className='text-2xl mx-d2 my-2 font-semibold text-neutral-800'>{title}</h2>
        <p className='text-lg mx-2 my-2 font-normal text-neutral-600 line-clamp-2'>{description}</p>
      
    </div>
  )
}

export default Card
