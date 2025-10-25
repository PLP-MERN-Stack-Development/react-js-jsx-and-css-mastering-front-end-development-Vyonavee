import React from 'react'

export default function Footer(){
  return (
    <footer className="py-6 mt-8">
      <div className="container mx-auto text-center text-sm text-gray-600 dark:text-gray-300">
        <p>© {new Date().getFullYear()} Lovely Tasks — Built with ❤️ by Vee</p>
      </div>
    </footer>
  )
}
