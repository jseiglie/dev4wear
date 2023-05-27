import React, { useContext } from 'react'
import { PayPalComponent } from './PayPal.Component'
import { CheckAuthHelper } from './utils/CheckAuth.helper'
import { Context } from '../state/appContext'
export const CartComponent = () => {
  const {store, actions} = useContext(Context)
  return (
    <article className='container row d-flex justify-content-between mx-auto my-5 border'>
      <CheckAuthHelper/>
        <section className='col-sm-12 col-md-6 col-lg-6 col-xl-6 my-5'>
            d4v.getItems();
            {store.cart && store.cart.map()}
        </section>
        <section className='col-sm-12 col-md-6 col-lg-6 col-xl-6 my-5'>
            <PayPalComponent/>
        </section>
    </article>
  )
}
