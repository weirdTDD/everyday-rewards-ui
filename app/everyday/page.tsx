import { ArrowLeftCircleIcon, Circle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='pt-20 pb-10 min-h-screen mx-auto'>
        <div className='flex flex-col items-center justify-center gap-6'>
            <div className='absolute top-10 left-5'><ArrowLeftCircleIcon className="w-7 h-7 font-bold text-orange-500"/></div>
            <div className='pt-10'>
                <h1 className='text-2xl/5 text-orange-500 font-sans font-black'>everyday <br/> rewards</h1>
            </div>
             
            <Image
                src="/login-ui.png"
                alt="Everyday Rewards"
                width={300}
                height={300}
                className=' pt-12 px-10 pb-0 z-10'
                loading='eager'
            />

            <div className='flex flex-col items-center justify-center gap-1 mx-16 md:mx-auto mb-24 '>
                <h2 className='xs:text-lg text-2xl font-semibold text-gray-700 text-center mx-4'>Welcome to Everyday Rewards</h2>
                <p className='text-sm font-normal text-gray-500 text-center'>Unlock app-only points boosters, track your savings and access your digital Everyday day  Rewards Card</p>
            </div>

            <div >
                <ul className='flex items-center justify-center gap-2'>
                    <li className='rounded-full text-orange-500 bg-orange-500'><Circle className="w-3 h-3 p-0.5" /></li>
                    <li className='rounded-full text-gray-400 bg-gray-400'><Circle className="w-3 h-3 p-0.5" /></li>
                    <li className='rounded-full text-gray-400 bg-gray-400'><Circle className="w-3 h-3 p-0.5" /></li>
                    <li className='rounded-full text-gray-400 bg-gray-400'><Circle className="w-3 h-3 p-0.5" /></li>
                </ul>
            </div>

            {/*buttons*/}
            <Link href=""
                className=' py-3 px-16 rounded-lg bg-orange-500 hover:bg-amber-700 text-white font-normal'
            >
                Log in to Everyday Rewards
            </Link>
            <p>New to Rewards? <a href="" className='font-semibold text-orange-500'>Sign up for free</a></p>
        </div>
      
    </div>
  )
}

export default page
