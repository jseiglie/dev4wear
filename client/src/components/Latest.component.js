import React from 'react'
import tshirtWhite from "./../imgs/dev4wear-white.webp";
import tshirtBack from "./../imgs/dev4wear-black.webp";
const LatestComponent = () => {
  return (
    <article className="container-fluid latest--wrapper ">
        

    <h2 className="latest__title">dev4Wear.getLatest();</h2>
        
    <section className="latest__content">
        <img className="img-fluid" src={tshirtWhite} alt="latest item 1"/>
        <img className="img-fluid" src={tshirtBack} alt="latest item 2"/>
        <img className="img-fluid" src={tshirtWhite} alt="latest item 3"/>
        <img className="img-fluid" src={tshirtBack} alt="latest item 4"/>
    </section>
</article>
  )
}

export default LatestComponent