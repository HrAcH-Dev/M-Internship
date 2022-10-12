import React from 'react'

function Container({ children }) {
  return (
    <div className="grid grid-cols-4 px-4 gap-4 md:grid-cols-8 md:px-8 lg:gap-6 lg:grid-cols-12 lg:max-w-1468 lg:mx-auto  xl:gap-6">
      {children}
    </div>
  )
}

export default Container
