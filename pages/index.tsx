import Header from './header'
import HomePage from './homePage'
import Button from './Button'
import HomeData from './data/Data'
import Footer from './footer'

export default function Home(props: [string, number]) {

 

  let width = globalThis.innerWidth


  return (
    <div className='pl-1 pr-1'>
      <Header/>
      <HomePage data={HomeData}/>
      <Footer/>      
    </div>
  )
}
