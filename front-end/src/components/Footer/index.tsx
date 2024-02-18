import React from 'react'

type Props = {}



const TopSectionItem = () => {
  return <div></div>
}


const Footer = (props: Props) => {
  return (
    <div className='w-[100%] bg-black_color text-white_color p-2 h-[45vh] flex items-center justify-center'>
      <div className='w-[75%] h-[75%] grid grid-cols-4 gap-2'>
        <div className='bg-white_color px-2 w-[100%] h-[100%]'></div>
        <div className='bg-black_color px-2'></div>
        <div className='bg-white_color px-2'></div>
        <div className='bg-black_color px-2'></div>
      </div>
    </div>
  )
}

export default Footer