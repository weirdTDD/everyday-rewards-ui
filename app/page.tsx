import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-between py-16 mt-10 space-y-60 border-2 border-amber-600'>
      <div className='min-h-1/2 mx-4 pl-3 lg:mx-auto'> 

        <div className=' flex  items-center justify-start md:justify-center'>
          <Image
            src="/fotmob-logo.png"
            alt="Fotmob Logo"
            width={160}
            height={100}
            className='w-40 h-[120px] object-cover mt-16'
            loading='eager'
          />

        </div>

        
        <h2 className='xs:text-3xl text-4xl text-left md:text-center font-sans-serif font-semibold mb-10 pl-2  '>
          Changing how you follow football.
        </h2>

      </div>

      <div className=' space-y-7 flex flex-col items-center justify-center'>
        <Link href="/"
          className='bg-green-400 rounded-4xl px-6 py-4 font-semibold font-sans-serif text-2xl hover:bg-green-600 flex items-center justify-between gap-3 w-[300px] mx-20 md:mx-auto'
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
