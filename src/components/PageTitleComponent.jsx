import React from 'react'

const PageTitleComponent = ({ text }) => {
  return (
    <h1 className="leading-relaxed font-primary font-extrabold text-4xl text-center text-palette-primary mt-4 py-2 sm:py-4">
      {text}
    </h1>
  )
}

export default PageTitleComponent