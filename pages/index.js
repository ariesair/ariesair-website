import Image from 'next/image'
import Header from '../components/home/Header'
import BriefDescription from '../components/home/BriefDescription'
import MainSection from '../components/home/MainSection'
import About from '../components/home/About'

export default function Home() {
  return (
    <div id='page-top'>
      <>
        <Header />
        <BriefDescription />
        <MainSection />
        <About />
      </>
    </div>
  )
}
