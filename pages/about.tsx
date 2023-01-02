import React from 'react'
import Header from './header'
import Footer from './footer'
import Image from 'next/image'

export default function About() {


  return (
    <div className='bg-gray'>
      <Header/>
      <div className='w-full bg-about h-60 md:h-96 bg-no-repeat bg-contain md:bg-center lg:bg-cover'></div>
      <div className='flex flex-col justify-center bg-gray'>
        <h2 className='font-bold text-4xl text-center mt-16'>Welcome, to <span className='text-blue'>WorldHouse</span><span className='text-purple'>Estate</span></h2>
        <span className='w-40 flex m-auto border-b-4 mt-4 mb-16'></span>
        <div className='flex justify-center'>
            <div className='w-full lg:w-2/3 h-60 md:h-80 bg-about2 bg-no-repeat'></div>
        </div>
        <div className='flex w-2/4 m-auto h-min mt-8 mb-8'>
            <div className='font-semibold text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <span className='text-danger'>Necessitatibus quod cumque, aliquam modi</span> corporis error tempora eaque quo rem, qui quisquam illum praesentium iure aliquid impedit rerum sapiente! Incidunt, tenetur? modi corporis error tempora eaque quo rem, qui quisquam illum praesentium iure aliquid impedit rerum sapiente! Incidunt, tenetur?</div>
        </div>
        <div className='flex justify-center'>
                <div className='w-full lg:w-2/3 h-60 md:h-80 bg-about3 bg-no-repeat relative'></div>
        </div>
      </div>
      <h2 className='font-bold text-4xl text-center mt-16'>Our Team</h2>
      <div className='flex justify-center h-60 bg-gray mt-6 mb-6'>
        <div className='w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 text-center font-semibold'>
        <div className='rounded bg-white border-2 flex flex-col'>
            <div className='h-4/5 bg-human1 bg-no-repeat bg-center hover:-translate-y-6 mt-2'></div>
            <h3 className='mt-2 bg-gray'>Nicolas Porter</h3>
        </div>
        <div className='rounded bg-white border-2 flex flex-col'>
            <div className='h-4/5 bg-human2 bg-no-repeat bg-center hover:-translate-y-6 mt-2'></div>
            <h3 className='mt-2 bg-gray'>Jason Anderson</h3>
        </div>
        <div className='rounded bg-white border-2 flex flex-col'>
            <div className='h-4/5 bg-human3 bg-no-repeat bg-center hover:-translate-y-6 mt-2'></div>
            <h3 className='mt-2 bg-gray'>Emily Smith</h3>
        </div>
        <div className='rounded bg-white border-2 flex flex-col'>
            <div className='h-4/5 bg-human4 bg-no-repeat bg-center hover:-translate-y-6 mt-2'></div>
            <h3 className='mt-2 bg-gray'>Sharon Davis</h3>
        </div>
        <div className='rounded bg-white border-2 flex flex-col'>
            <div className='h-4/5 bg-human5 bg-no-repeat bg-center hover:-translate-y-6 mt-2'></div>
            <h3 className='mt-2 bg-gray'>Ashley Walles</h3>
        </div>
        {/* <div className='border bg-darkblack'>6</div> */}
      </div>
      </div>

      <Footer/>
    </div>
  )
}
