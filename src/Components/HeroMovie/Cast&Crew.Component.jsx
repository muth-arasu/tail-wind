import React from 'react'

const CastCrew = (props) => {
  return (
    <>
      <div className='flex flex-col items-center'>
        <div className='w-20 h-20 rounded-full'>
            <img className='w-full h-full rounded-full' src={props.img} alt={props.title} />
        </div>
        <h2 className='text-lg text-grayss-700 font-bold  '> {props.name} </h2>
        <p  className='text-md text-grayss-900 '> {props.role} </p>
      </div>
    </>
  )
}

export default CastCrew

