import React, { useContext } from 'react'
import { Context } from '../state/appContext'

export const HomeProfileComponent = () => {
    const {store, actions} = useContext(Context)
    console.log(store.user)
  return (
    <section className='container my-3'>
        <h2 className='bg--primary text-white p-3'>dev4Wear.greet(user); 
        {console.log(store.user)}
            <p className='mt-3'>// Welcome, {`${store.user.firstName ? store.user.firstName : "error getting name" }  `}</p></h2>
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
