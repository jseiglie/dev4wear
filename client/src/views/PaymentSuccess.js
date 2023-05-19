import React from 'react'
import { Link } from 'react-router-dom'
export const PaymentSuccess = () => {
  return (
    <article className='container-fluid w-75 '>
      <p className='logo my-5'>dev4Wear();</p>
        <section className='my-5 d-flex flex-column'>
            <h3 className='h3--subtitle p-3 bg--primary orange'>&#x1f913; Thanks for choosing the Geek Side! &#x1f913;</h3>

            <p className='mt-5'>
                The code related to the design you chose to wear has been added to {" "}
                <Link to={"/profile"}>
                    your profile
                </Link>
                ,{" "} check it out now!
            </p>

            <p className='text-muted pt-5 info__text--small align-self-end'>
                *Please, bear in mind that these desings are not responsive and will need of a big screen with a 1400px resolution to display it as it was design
                </p>

        </section>
    </article>
  )
}
