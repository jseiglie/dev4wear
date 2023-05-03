import React from 'react'
import tshirtWhite from "./../imgs/wearCodeWhite.webp";
import tshirtBack from "./../imgs/wearCodeBlack.webp";
const LatestComponent = () => {
  return (
    <article className="container-fluid latest--wrapper ">
        

    <h2 className="latest__title">wearCode.getLatest();</h2>
        
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