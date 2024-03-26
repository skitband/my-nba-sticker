import React from 'react'

const PriceComponent = ({currency, num, numSize }) => {
  return (
    <>
      {currency}<span className={numSize}>{num}</span>
    </>
  )
}

export default PriceComponent