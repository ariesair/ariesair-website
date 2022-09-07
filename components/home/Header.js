import React from 'react'

const Header = () => {
  let pageTitle = 'AriesAir'
  let openningStatement =
    'AriesAir is a licensed service provider in Kenya for all your domestic, regional and international charter requirements, passenger and cargo'

  return (
    <header className='masthead hero-image'>
      <div className='container col-xl-10 col-xxl-8 px-1 py-1'>
        <div className='row align-items-center g-lg-5 py-5'>
          <div className='col-lg-7 text-center text-lg-start'>
            <h1 className='display-4 fw-bold lh-1 mb-3'>{pageTitle}</h1>
            <p className='col-lg-10 fs-5'>{openningStatement}</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
