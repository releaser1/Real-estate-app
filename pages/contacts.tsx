import React, {useEffect, useState} from 'react'
import Header from './header'
import Footer from './footer'
import Image from 'next/image'
import Button from './Button'
import ContactData from './contactData'




export default function Contacts() {
/* Playground for new submit form */
const [email, setEmail] = useState('');
const [name, setName] = useState('')
const [message, setMessage] = useState('')
const [emailDirty, setEmailDirty] = useState(false);
const [nameDirty, setNameDirty] = useState(false);
const [messageDirty, setMessageDirty] = useState(false);
const [emailError, setEmailError] = useState('Email can not be empty');
const [nameError, setNameError] = useState('Name can not be empty');
const [messageError, setMessageError] = useState('Message can not be empty');
const [formValid, setFormValid] = useState(false);
const [checkClick, setClick] = useState(false);


useEffect(() => {
    if(emailError || nameError || messageError) {
        setFormValid(false)
    } else {
        setFormValid(true)
    }
}, [emailError, nameError, messageError])

const emailHandler = (e: any) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(!re.test(String(e.target.value).toLocaleLowerCase())) {
        setEmailError('Uncorrect form of email')
    } else {
        setEmailError('')
    }
}

const nameHandler = (e: any) => {
    setName(e.target.value)
    if(e.target.value.length < 3 || e.target.value.length > 20) {
        setNameError('Name can not be less then 3 letters and larger then 20')
        if(!e.target.value) {
            setNameError('This field can not be empty')
        }
    } else {
        setNameError('')
    }
}

const messageHandler = (e: any) => {
    setMessage(e.target.value)
    if(e.target.value.length < 7) {
        setMessageError('Message can not be less then 7 letters')
        if(!e.target.value) {
            setMessageError('This field can not be empty')
        }
    } else {
        setMessageError('')
    }
}

const blurHandler = (e: any) => {
    switch (e.target.name) {
        case 'email':
            setEmailDirty(true)
            break
        case 'name':
            setNameDirty(true)
            break
        case 'message':
            setMessageDirty(true)
            break
    }
}


  return (
    <div>
        <Header/>
        <div className='w-full'>
            <div className='w-full h-60 bg-center md:h-96 bg-contact bg-no-repeat'></div>            
            {!checkClick ? <div className='w-full flex flex-col justify-center bg-gray'>
                <h3 className='font-bold text-2xl text-center md:mb-6'>Get in Touch</h3>
                <form  className='flex flex-col items-center'>
                    <div className='flex flex-col sm:flex-row align-center w-full md:w-3/5'>
                        <div className='mb-8 w-full md:w-1/2'>
                            <label htmlFor='name' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name*</label>
                            <input onChange={e => nameHandler(e)} value={name} onBlur={e => blurHandler(e)} name="name" type="text" placeholder="Enter Your Name"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                            {(nameDirty && nameError) && <div style={{color: 'red'}}>{nameError}</div>}
                        </div>
                        <div className='mb-8 w-full md:w-1/2 md:ml-4 '>
                            <label htmlFor='phone_number' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                            <input type="text" id="phone_number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone number"/>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row align-center w-full md:w-3/5'>
                    <div className='mb-8 w-full md:w-1/2'>
                            <label htmlFor='house_name' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">House Name or Number</label>
                            <input type="text" id="house_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="House Name"/>
                        </div>
                        <div className='mb-8 w-full md:w-1/2 md:ml-4 '>
                            <label htmlFor='postcode' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Postcode</label>
                            <input type="text" id="postcode" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="PostCode"/>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row align-center w-full md:w-3/5'>
                        <div className='mb-8 w-full md:w-1/2'>
                            <label htmlFor='email_address' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address*</label>
                            <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name="email" type="text" placeholder="Enter Your Email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                            {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
                        </div>
                        <div className='mb-8 w-full md:w-1/2 md:ml-4'>
                            <label htmlFor='home_phone' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                            <input type="text" id="home_phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="USA"/>
                        </div>
                    </div>
                    <div className='flex w-full justify-center'>
                        <div className='w-full md:w-3/5 '>
                            <label htmlFor='message' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message*</label>   
                            <textarea onChange={e => messageHandler(e)} value={message} onBlur={e => blurHandler(e)} name="message" id="message" maxLength={200} placeholder='Message' className='resize border rounded w-full'></textarea>
                            {(messageDirty && messageError) && <div style={{color: 'red'}}>{messageError}</div>}
                        </div>
                    </div>
                    <div className='flex justify-center w-full md:w-3/5 mt-6 mb-6'>
                    <Button color='red' size='medium' className='rounded hover:bg-white text-white hover:text-danger font-semibold' disabled={!formValid} type='submit' onClick={() => setClick(true)}>Submit</Button>
                    </div>
                </form>
            </div> : <ContactData name={name} email={email}/> }
            <div className='w-full flex flex-col justify-center bg-gray'>
                    <h2 className='font-bold ml-6 mb-6 text-2xl text-center'>Contact Details:</h2>
              <div className='flex flex-col items-center'>
              <div>                
                <div className='flex flex-row'>
                    <Image src={'/location.svg'} width={35} height={45} alt="adress"/>
                    <h3 className='flex items-center ml-3 font-semibold'>Civic Theatre Building 15 N Walles Dr., Suite 1500 Miami, FL 68776</h3>
                </div>
                <div className='flex flex-row'> 
                    <Image src={'/phone.svg'} width={35} height={45} alt="phone"/>
                    <h3 className='flex items-center ml-3 font-semibold'>0121 232 4900</h3>
                </div>
                  <div className='flex flex-row'>
                    <Image src={'/email.svg'} width={35} height={45} alt="email"/>
                    <h3 className='flex items-center ml-3 font-semibold'>world.house.estate1@gmail.com</h3>
                  </div>
                    <div className='flex flex-row'>
                        <Image src={'/workinghours.svg'} width={35} height={45} alt="working-hours"/>
                    <div className="flex flex-col ml-3 mb-6 font-semibold">
                        <h4>Monday to Friday: 9am - 7pm</h4>
                        <h4>Saturday: 9am - 2pm</h4>
                        <h4>Sunday: By Appointment Only</h4>
                    </div>
                  </div>
              </div>
              </div>

            </div>
        </div>
        <Footer/>
    </div>
  )
}
