import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { ChevronDown, ChevronUp, HeartIcon, LayoutGrid, Search } from 'lucide-react'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <header className=''>
            <div className='flex items-center justify-between border-b p-4 lg:px-8'>
                <Image src="/logo2.png" width={100} height={100} alt='logo' className='w-28' />


                <div className='hidden md:flex ' >
                    <div className="flex gap-2 bg-[#F3F3F3] p-1 rounded-tl rounded-bl">
                        <select className='bg-transparent focus:outline-none text-sm'>
                            <option value="all">All Categories</option>
                            <option value="fruits">Fruits</option>
                            <option value="vegetables">Vegetables</option>
                            <option value="dairy">Dairy</option>
                            <option value="meat">Meat</option>
                            <option value="bakery">Bakery</option>
                        </select>
                        <div className='text-gray-400'>|</div>
                        <div>
                            <input type="text" placeholder="Search for items..." className='bg-transparent focus:outline-none text-sm' />
                        </div>
                    </div>
                    <Button className='rounded-tl-none rounded-bl-none py-2'> 
                        <Search /> 
                    </Button>
                </div>


                <div className='flex gap-1 text-sm absolute right-24 md:static' >
                    <HeartIcon/>
                   <span className='hidden md:block'> Wishlist</span>
                </div>


                <div className='relative group'>
                    <button className='flex items-center gap-2 text-sm focus:outline-none' onClick={() => setShowMenu(!showMenu)}>
                        <Image src="/profile.png" width={100} height={100} alt='profile' className='w-8' />
                        <span className='hidden md:block'>King Johney</span>
                        {showMenu ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                    {showMenu && (
                        <div className='absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg'>
                            <ul className='py-1'>
                                <li><a href="#" className='block px-4 py-2 text-gray-800 hover:bg-gray-100'>Profile</a></li>
                                <li><a href="#" className='block px-4 py-2 text-gray-800 hover:bg-gray-100'>Settings</a></li>
                                <li><a href="#" className='block px-4 py-2 text-gray-800 hover:bg-gray-100'>Logout</a></li>
                            </ul>
                        </div>
                    )}
                </div>

            </div>

            <div className='flex items-center p-4 lg:px-8'>
                <Button> <LayoutGrid /> Browse All Categories</Button>
            </div>
        </header>
    )
}

export default Header