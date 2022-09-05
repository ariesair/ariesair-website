import Image from 'next/image'
import Header from '../components/home/Header'
import BriefDescription from '../components/home/BriefDescription'

export default function Home() {
  return (
    <div id='page-top'>
      <>
        <Header />
        <BriefDescription />
      </>
    </div>
  )
}
