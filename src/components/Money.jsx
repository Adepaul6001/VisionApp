import React from 'react'
import money from "../assets/images/money.png"

const Money = () => {
  return (
    <section className='money-container'>
      <div>
        <h6>Save up to 3x when<br/> sending money<br/> abroad</h6>
        <p>Sending money shouldn't cost the<br/> earth, so we built Vision to save you<br/> money when you transfer
          and<br/> exchange internationally. We<br/> charge as little as possible: right<br/> now a tiny free, eventually free.
        </p>
      </div>
      <div className="money-img-cont">
        <img src={money} alt="" />
      </div>

    </section>
  )
}

export default Money;