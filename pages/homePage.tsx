import React, {useState, useEffect} from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'
import Button from './Button';


interface Props {
  data:  any[];
}

const PosterSection: React.FC<Props> = ({data}) => {
  /* useState's for data && for input element*/
  const [items, setItems] = useState(data);
 
  /* Check the lowest and biggest price from the (data) list */
  const lowestPrice = data.map((item) => item.price).reduce((acc, val) => acc < val ? acc : val)
  const bigestPrice = data.map((item) => item.price).reduce((acc, val) => acc > val ? acc : val)
  /* useState's for filtering function */
  const [actionType, setActionType] = useState('')
  const [rooms, setRooms] = useState(0)
  const [city, setCity] = useState('')
  const [surface, setSurface] = useState({from: 0, to: 0})
  const [price, setPrice] = useState({lowPrice: lowestPrice, bigPrice: bigestPrice})
  
  /* Filter actions */
  const applyFilter = () => {
    let updateList = data;

    if(actionType !== '') {
      updateList = updateList.filter((item) => item.type === actionType)
    }

    if(city !== '') {
      updateList = updateList.filter((item) => item.city === city)
    }

    if(rooms !== 0) {
      updateList = updateList.filter((item) => item.rooms === rooms)
    }
    if(surface.from !== 0 && surface.to !== 0) {
      updateList = updateList.filter((item) => item.surface >= surface.from && item.surface <= surface.to)
    }

    const minPrice = price.lowPrice;
    const maxPrice = price.bigPrice;
  
    updateList = updateList.filter((item) => item.price >= minPrice && item.price <= maxPrice)  

    setItems(updateList)
    if(price.lowPrice > price.bigPrice) {
      alert('The lower price selected is bigger then second price')
    }


  }

  useEffect(() => {
    applyFilter()
  }, [rooms, city, price, actionType, surface])


  return (
    <div className='relative'>
        <div className='w-full h-96 relative block flex justify-center bg-poster bg-no-repeat bg-cover' >
           <h1 className='mt-12 absolute text-center text-4xl md:text-5xl text-secondary font-bold'>Choose Your Home Today</h1>
        </div>
        <div id="services" className='absolute w-full flex justify-center -translate-y-16'>
            <Button size='large' className='rounded-l-lg bg-dark text-white hover:rounded hover:bg-white hover:text-cyan font-semibold' onClick={() => setActionType('Buy')}>Buy</Button>
            <Button size='large' className='bg-dark text-white hover:rounded hover:bg-white hover:text-cyan font-semibold' onClick={() => setActionType('Rent')}>Rent</Button> 
            <Button size='large' className='bg-dark text-white hover:rounded hover:bg-white hover:text-cyan font-semibold' onClick={() => setActionType('Sold')}>Sold</Button> 
            <Button size='large' className='rounded-r-lg bg-dark text-white hover:rounded hover:bg-white hover:text-cyan font-semibold' onClick={() => setActionType('')}>All</Button> 
        </div>
        <div id="navigate" className={`grid grid-cols-4 text-center text-2xl bg-gray p-6`}>
            <div>Rooms</div>
            <div>Surface m<sup>2</sup></div>
            <div>Price</div>
            <div>Location</div>
        </div>
      <div className='w-full flex flex-col xl:grid xl:grid-cols-4 bg-gray'>
      <div className={`text-center md:hidden font-semibold`}>Rooms</div>
         <div className='w-full h-10 flex items-center justify-center justify-around'>
          <Button color='blue' className="rounded pl-5 pr-5 pt-2 pb-2 text-white font-medium hover:bg-white hover:text-dark"  onClick={() => setRooms(1)}>1</Button>
          <Button color='blue' className="rounded pl-5 pr-5 pt-2 pb-2 text-white font-medium hover:bg-white hover:text-dark"  onClick={() => setRooms(2)}>2</Button>
          <Button color='blue' className="rounded pl-5 pr-5 pt-2 pb-2 text-white font-medium hover:bg-white hover:text-dark"  onClick={() => setRooms(3)}>3</Button>
          <Button color='blue' className="rounded pl-5 pr-5 pt-2 pb-2 text-white font-medium hover:bg-white hover:text-dark"  onClick={() => setRooms(4)}>4</Button>
          <Button color='blue' className="rounded pl-5 pr-5 pt-2 pb-2 text-white font-medium hover:bg-white hover:text-dark"  onClick={() => setRooms(0)}>All</Button>
         </div>
         <div className={`text-center md:hidden font-semibold`}>Surface</div>
         <div className='flex justify-center'>
          <input type="text" maxLength={3} placeholder="from" className='border w-32 h-10 self-center rounded align-center text-center font-semibold bg-gray-50 border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' onChange={(e) => setSurface({...surface, from: parseInt(e.target.value)})}/>
          <input type="text" maxLength={3} placeholder='to' className='border w-32 h-10 self-center rounded align-center text-center font-semibold bg-gray-50 border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' onChange={(e) => setSurface({...surface, to: parseInt(e.target.value)})}/>
         </div>
         <div className={`text-center md:hidden font-semibold -translate-y-4`}>Price</div>
         <div className='flex justify-center'>
          <div className='flex justify-center'>
            <select className='w-32 h-10 border align-center text-center font-semibold bg-gray-50 border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' onChange={(e) => setPrice({...price, lowPrice: parseInt(e.target.value)})}>
              <option value='none' selected disabled hidden>starting from</option>              
              <option value={`${77000}`}>77.000 $</option>
              <option value={`${150000}`}>150.000 $</option>
              <option value={`${200000}`}>200.000 $</option>
            </select>
          </div>
          <div className='flex justify-center'>
            <select className='w-32 h-10 border border align-center text-center font-semibold bg-gray-50 border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' onChange={(e) => setPrice({...price, bigPrice: parseInt(e.target.value)})}>
            <option value='none' selected disabled hidden>to</option>              
              <option value={`${151000}`}>151.000 $</option>
              <option value={`${200000}`}>200.000 $</option>
              <option value={`${300000}`}>300.000 $</option>
            </select>
         </div>
         </div>

         <div className='flex justify-center'>
            <select id="data" className='w-80 h-10 border align-center text-center font-semibold bg-gray-50 border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' onChange={(e) => setCity(e.target.value)}>
              <option value="Indianapolis, Indiana">Indianapolis, Indiana</option>
              <option value="Albany, New York">Albany, New York</option>
              <option value="New York, New York">New York, New York</option>
              <option value="Baltimore, Maryland">Baltimore, Maryland</option>
              <option value="Philadelphia, Pensylvania">Philadelphia, Pensylvania</option>
              <option value="Sacramento, California">Sacramento, California</option>
            </select>
         </div>
      </div>
      
      {items.length ? <div className='w-full grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pt-6 pr-4 pl-4 pb-6 bg-gray'>
      {items.map((item) => 
        <div className='w-full h-80 flex flex-col shadow-lg relative'>
          <div className='h-64 bg-no-repeat bg-cover relative' style={{backgroundImage: `url(${item.image})`, opacity: `${item.type === 'Sold' ? '0.5' : ''}`}}></div>
            <div className='grid grid-cols-2'>
              <h6 className='text-dark font-bold text-2xl ml-2'>{item.price} $ </h6>
              <div className='grid grid-cols-3'>
                <div className='flex flex-row'>
                <img src="/bedroom.svg" alt="bedroom" width={25}/>
                <h6 className='font-medium flex mt-1 ml-1'>{item.rooms}</h6>
                </div>
                <div className='flex flex-row'>
                <img src="/bathroom.svg" alt="bathroom" width={25}/>
                <h6 className='font-medium flex mt-1 ml-1'>{item.bath}</h6>
                </div>
                <h6 className='font-medium flex mt-1'>{item.surface} m</h6>
              </div>
            </div>
            <div className='text-purple font-bold pl-2'>{item.city}</div>
            {item.type === 'Sold' ?
            <div className='absolute translate-x-40 md:translate-x-32 translate-y-20 text-3xl font-semibold'><Image width={100} height={100} src={'/sold.svg'} className=''/></div>              
             : ''}      
          </div>
      )}
      </div> : <Link href="#navigate"><img src={`/no-results.svg`} alt="no-result" /></Link>}
    </div>
  )
}

export default PosterSection;