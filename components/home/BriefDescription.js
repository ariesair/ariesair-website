import Image from 'next/image'

const BriefDescription = () => {
  return (
    <section className='container'>
      <h1 className='font-weight-light text-center'>AriesAir</h1>
      <div className='row gx-4 gx-lg-5 align-items-center my-5'>
        <div className='col-lg-7'>
          <Image
            className='img-fluid rounded mb-4 mb-lg-0'
            src='https://dummyimage.com/900x400/dee2e6/6c757d.jpg'
            width={900}
            height={400}
            alt='...'
          />
        </div>
        <div className='col-lg-5'>
          <p>
            A multi-faceted aviation company offering Airline services
            worldwide, through its HQ in London, United Kingdom and satellite
            bases in Europe and Africa.
          </p>
          <button
            type='button'
            className='btn btn-secondary text-capitalize'
            data-bs-toggle='modal'
            data-bs-target='#more-details'
          >
            read more
          </button>
        </div>
      </div>

      <div
        className='modal fade'
        id='more-details'
        tabIndex={-1}
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5
                className='modal-title text-capitalize'
                id='exampleModalLabel'
              >
                about aries air
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              />
            </div>
            <div className='modal-body'>
              <p>
                A multi-faceted aviation company offering Airline services
                worldwide, through its HQ in London, United Kingdom and
                satellite bases in Europe and Africa. With a team of Licensed
                and Experienced personnel, we serve our clients by planning,
                strategizing, accommodating, and executing plans, tailored to
                each individual cliental needs, providing cost and time
                effective solutions at all times. Clients are assured of
                affordable, cost effective and versatile solutions, particularly
                for ACMI , aircraft procurement, SAR, Medevac, VIP and
                Government transportation sectors. With a host of AOCs globally,
                we can provide hospitality services to our clients with the
                ability to mobilize a team rapidly to any request, be it relief,
                search & rescue, medevac, AOG support etc. This has earned the
                company a reputation of reliability, responsibility and capable
                of undertaking and completing any task requested anywhere at
                anytime with complete client satisfaction.
              </p>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-danger'
                data-bs-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BriefDescription

BriefDescription.defaultProps = {
  description:
    'A multi-faceted aviation company offering Airline services worldwide, through its HQ in London, United Kingdom and satellite bases in Europe and Africa.',
}
