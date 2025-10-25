import React from 'react'
import clsx from 'clsx'

export default function Button({ children, variant='primary', className='', ...rest }){
  const base = 'px-4 py-2 rounded-lg font-medium shadow-sm transition-transform active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2'
  const variants = {
    primary: 'bg-primary-500 text-white hover:brightness-95',
    secondary: 'bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200',
    danger: 'bg-red-500 text-white'
  }
  return (
    <button className={clsx(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  )
}
