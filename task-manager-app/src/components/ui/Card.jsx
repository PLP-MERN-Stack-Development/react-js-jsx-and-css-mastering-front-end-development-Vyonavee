import React from 'react'

export default function Card({ children, className='' }){
  return (
    <div className={`glass rounded-2xl p-6 shadow-md ${className}`}>
      {children}
    </div>
  )
}
