import React from 'react'
import { PayPalComponent } from './PayPal.Component'
import { CheckAdminHelper } from './utils/CheckAdmin.helper'

export const CartComponent = () => {
  return (
    <article className='container row d-flex justify-content-between mx-auto my-5 border'>
        
        <section className='col-sm-12 col-md-6 col-lg-6 col-xl-6 my-5'>
            Resumen del pedido
        </section>
        <section className='col-sm-12 col-md-6 col-lg-6 col-xl-6 my-5'>
            <PayPalComponent/>
        </section>
    </article>
  )
}
