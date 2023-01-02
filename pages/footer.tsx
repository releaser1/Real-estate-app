import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className=''>
      <div className='bg-gray md:h-14 p-2'>
        <h3 className='font-semibold'><span className='text-primary'>Images on this page a created by:</span> myriammira on Freepik, macrovector_official on Freepik, Image by maniacvector on Freepik, Image by Freepik, macrovector_official on Freepik, Image by starline on Freepik, Image by studiogstock on Freepik</h3>
      </div>
      <div className='w-full md:w-full flex flex-col text-center bg-darkblack text-center md:flex md:flex-row md:justify-center text-white pt-8 pb-8'>        
        <div className='w-full text-graywhite'>
            <div>
                <span className='cursor-pointer'>Terms and conditions</span>
                <span className='m-2'>|</span>
                <span className='cursor-pointer'>Privacy Policy</span>
            </div>
            <div>
            © 1997-2022 All rights reserved. WorldEstate
            </div>
        </div>
        <div className='w-full text-graywhite'>
          <h3>Miami, Florida</h3>
          <h3>Civic Theatre Building 15 N Walles Dr., Suite 1500 Miami, FL 68776</h3>
        </div>
        <div className='w-full justify-center text-darkgray flex flex-col'>
          <div>Follow <span className='text-blue'>WorldHouse</span><span className='text-graywhite'>Estate</span> on:</div>
          <div className='flex flex-row justify-center mt-3'>
          <Image src="/facebook.svg" alt="facebook" width={30} height={120} className="cursor-pointer"/>
          <Image src="/twitter.svg" alt="twitter" width={30} height={120} className="mr-2 ml-2 cursor-pointer"/>
          <Image src="/instagram.svg" alt="instagram" width={30} height={120} className="cursor-pointer"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
