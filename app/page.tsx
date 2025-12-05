import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between py-46 mt-10'>
      <div className='mx-10 lg:mx-auto mb-30'>
        <h2 className='text-6xl font-sans font-bold text-start md:text-center mb-10'>
          FOTMOB
        </h2>
        <h2 className='text-4xl text-left md:text-center mt-4 font-sans-serif font-semibold'>
          Changing how you follow football.
        </h2>

      </div>

      <div className=' space-y-7 min-h-1/3 mx-auto flex flex-col items-center '>
        <Link href="/"
          className='bg-green-500 rounded-4xl px-6 py-4 font-bold font-sans text-xl hover:bg-green-600 flex items-center justify-between gap-3 w-[300px] '
        >
          Quick Setup
          <ArrowRight />
        </Link>

        <p>Already a user? <a href="/signin" className='font-bold'>Sign in</a></p>
      </div>
    </div>
  )
}

export default page
