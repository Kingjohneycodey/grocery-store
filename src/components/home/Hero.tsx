import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { Send } from 'lucide-react'

const Hero = () => {
    return (
        <section
                style={{
                    backgroundImage: 'url(/hero-bg.png)',
                    height: '400px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}

                className='p-4 pt-12 lg:p-8 lg:pr-0 lg:flex lg:justify-between lg:items-center lg:gap-8'
            >
                <div>
                    <h1 className="text-5xl font-bold text-[#253D4E] max-w-md">Don’t miss our daily amazing deals.</h1>

                    <p className='mt-4 text-gray-500' >Save up to 60% off on your first order</p>

                    <div className='flex mt-12' >
                        <div className='flex items-center gap-1 bg-white px-2 rounded-tl rounded-bl' >
                            <Send size="16" color='#ADADAD' />
                            <input type="text" placeholder="Enter your email address" className='bg-transparent focus:outline-none text-sm w-48 md:w-60' />

                        </div>
                        <Button className='rounded-tl-none rounded-bl-none py-2'>
                            Subscribe
                        </Button>
                    </div>
                </div>


                <div className='hidden md:flex w-[40%]'>
                    <Image src="/hero-img.png" width={100} height={100} alt='hero' className='w-full' />
                </div>
            </section>
    )
}

export default Hero