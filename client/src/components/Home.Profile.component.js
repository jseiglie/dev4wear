import React from 'react'

export const HomeProfileComponent = () => {
  return (
    <section className='container my-3'>
        <h2 className='bg--primary text-white'>dev4Wear.greet(user) 
            <p>Welcome, {`user`}</p></h2>
        <div className='row my-3'>
            <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                Lastest orders
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
            Lastest favorites
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
            Lastest codes

            </div>
            <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
                Something else here
            </div>
        </div>


    </section>
  )
}
