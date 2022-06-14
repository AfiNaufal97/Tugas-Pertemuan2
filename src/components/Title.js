import React from 'react'

export default function Title(props) {
  return (
    <div className="m-auto">
    <p className='text-black text-[25px] font-bold mb-[10px]'>
        {props.title}
    </p>
    </div>
  )
}
