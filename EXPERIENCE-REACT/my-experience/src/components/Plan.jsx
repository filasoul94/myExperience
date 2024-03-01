import React from 'react'

export const Plan = () => {
    return (
        <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
            {/* Left Side */}
            <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
                <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHRyYXZlbCUyMGFnZW5jeXxlbnwwfHwwfHx8MA%3D%3D" alt="/" />
                <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHRyYXZlbCUyMGFnZW5jeXxlbnwwfHwwfHx8MA%3D%3D" alt="/" />
                <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHRyYXZlbCUyMGFnZW5jeXxlbnwwfHwwfHx8MA%3D%3D" alt="/" />
                <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1514294393539-47d3b28b819d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHRyYXZlbCUyMGFnZW5jeXxlbnwwfHwwfHx8MA%3D%3D" alt="/" />
                <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1528493366314-e317cd98dd52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fHRyYXZlbCUyMGFnZW5jeXxlbnwwfHwwfHx8MA%3D%3D" alt="/" />
            </div>
            {/* Right Side */}
            <div className='flex flex-col h-full justify-center'>
                <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
                <p className='text-2xl py-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, dignissimos?</p>
                <p className='pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus voluptatum a voluptas amet, voluptate consectetur, earum in beatae suscipit nemo deleniti assumenda expedita eaque natus vero dolor harum totam.</p>
            
            <div>
                <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
                <button className='bg-black text-white border-black hover:shadow-xl'>Book Your Trip</button>
            </div>
            </div>
        </div>
    )
}
