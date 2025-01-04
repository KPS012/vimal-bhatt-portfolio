import React from 'react'
import ContactForm from '@/components/emailTemp/contactform';
import WhatsApp from '@/common/RoundedButton/whatsapp';
import Image from 'next/image';


export default function Content() {
  return (
    <div className='text-[#ffff] py-8 px-12 h-full w-[80vw] flex justify-center items-center'>
        <div className="w-full flex justify-between">
            <div className="w-[35%]">
                <h3 className='text-[5vw] leading-[6vw]'>Let’s work <br />together</h3>
                <div className="w-full mt-[6vh]">      
                    <WhatsApp>
                        <a 
                        href=""
                        className="w-full flex justify-center gap-4 items-center relative z-10 cursor-pointer"
                        >
                            <Image src="/images/whatsapp.png" width={30} height={30} alt="" title="" className="" />
                            WhatsApp
                        </a>
                    </WhatsApp>
                </div>     
            </div>
            <div className="w-[35%]">
                <div className="">
                    <ContactForm />
                </div>
            </div>
        </div>
    </div>
  )
}
