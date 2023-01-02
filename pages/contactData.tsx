import React from 'react'
import Button from './Button'
import Link from 'next/link'

interface Props {
    name: string;
    email: string;
}

export default function ContactData(props: Props) {
    const name = props.name
    const email = props.email
  return (
    <div className='flex justify-center bg-gray'>
      <div className='w-full md:w-2/4 text-center border-4 p-10'>
      <h3 className='font-bold text-2xl'>Thank You</h3>
      <h4><span className='font-semibold'>{name}</span> we have recieved your message, and we'll be contact you on your email: <span className='font-semibold'>{email}</span>, as soon as possibile</h4>
      <Link href="/#services"><Button size='medium' color="red" className="rounded mt-2 mb-2 text-white font-semibold">BACK TO HOME PAGE</Button></Link>
      </div>
    </div>
  )
}
