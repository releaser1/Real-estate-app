import React from 'react'
import Button from './Button'
import Image from 'next/image'
import Link from 'next/link'


const Header = () => {
  return (
    <div>
      <header className='w-full md:grid md:grid-cols-3 flex flex-col bg-blue'>
        <div className='flex justify-center'>
          <Image src='/logo.svg' width={95} height={140} alt="logo" className='rounded'/>
        </div>
        <div className='w-full flex justify-between p-2 text-white font-semibold'>
        <Link href="/#services"><Button size='medium' className="rounded hover:text-danger hover:bg-white">Services</Button></Link>
        <Link href="/about"><Button size='medium' className='rounded hover:text-danger hover:bg-white'>About</Button></Link>  
        <Link href={'/contacts'}><Button size='medium' className='rounded hover:text-danger hover:bg-white'>Contact</Button></Link>  
        </div>
      </header>
    </div>
  )
}

export default Header;