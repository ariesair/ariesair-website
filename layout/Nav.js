import Image from 'next/image'

const Nav = () => {
  return (
    <nav className='navbar navbar-expand-md navbar-light bg-light fixed-top'>
      <div className='container'>
        <a className='navbar-brand' href='#'>
          <Image
            src='/transparent-logo.png'
            width={40}
            height={40}
            alt='Aries Air Transparent Logo'
          />
        </a>
        <>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarResponsive'
            aria-controls='navbarResponsive'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            Menu
            <i className='fas fa-bars ms-1' />
          </button>
          <div className='collapse navbar-collapse' id='navbarResponsive'>
            <ul className='navbar-nav text-uppercase ms-auto py-2 py-lg-0'>
              <li className='nav-item'>
                <a className='nav-link' href='#services'>
                  Services
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#portfolio'>
                  Portfolio
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#about'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#team'>
                  Team
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#contact'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </>
      </div>
    </nav>
  )
}

export default Nav
