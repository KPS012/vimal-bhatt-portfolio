import React from 'react'
import RoundBtn from '@/common/RoundedButton/rounBtn';


export default function Content() {
  return (
    <div className='text-[#ffff] py-8 px-12 h-full w-[80vw] flex justify-center items-center'>
        <div className="w-full flex justify-between items-center">
            <div className="w-[100%] flex flex-col justify-center items-center">
                <h3 className='text-[5vw] leading-[6vw] text-center'>Let’s build something<br /> Amazing together!</h3>
                <div className="mt-8">
                    <RoundBtn>
                        <a
                        href="mailto:bhattv855@gmail.com"
                        className={`w-full relative z-10 cursor-pointer`}
                        >
                            Let's Connect
                        </a>
                    </RoundBtn>
                </div>
            </div>
        </div>
    </div>
  )
}
