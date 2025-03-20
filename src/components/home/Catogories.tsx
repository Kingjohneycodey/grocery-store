import React from 'react'
import CategorySlider from './CategorySlider'

const Catogories = () => {
    return (
        <div className='max-w-[95%] mx-auto'>
            <div><p className="text-2xl">Explore Categories</p></div>

            <div>
                <CategorySlider />
            </div>
        </div>
    )
}

export default Catogories