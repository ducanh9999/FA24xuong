import React from 'react'

const layout = ({children}:{children :React.ReactNode}) => {
  return (
   <div>
     <header className='text-red-500'>Header</header>
    <div className=''>{children}</div>
    <footer>Footer</footer>
   </div>
  )
}

export default layout