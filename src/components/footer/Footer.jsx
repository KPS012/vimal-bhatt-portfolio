import React from 'react'
import Content from './Content';

export default function Footer() {
  return (
    <div 
      className='bg-[#1d1e21] relative h-[800px]'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      <div className='relative h-[calc(100vh+800px)] -top-[100vh]'>
          <div className='h-[800px] sticky top-[calc(100vh-800px)] flex justify-center items-center'>
              <Content />
          </div>
      </div>
    </div>    
  )
}
