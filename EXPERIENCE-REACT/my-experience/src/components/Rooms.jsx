import React from 'react'

export const Rooms = () => {
    return (
        <div className='max-ww[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
            <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
                <h3 className='text-2xl font-bold'>Fine Interior Rooms</h3>
                <p className='pt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
                    dolorem consequuntur molestiae id quas repellat?
                </p>

            </div>
            <div className='grid grid-cols-2 col-span-2 gap-2'>
                <img
                    className='object-cover w-full h-full'
                    src="https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJvb21zfGVufDB8fDB8fHww"
                    alt="/"
                />
                <img
                    className='row-span-2 object-cover w-full h-full'
                    src="https://images.unsplash.com/photo-1586105251261-72a756497a11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJvb21zfGVufDB8fDB8fHww"
                    alt="/"
                />
                <img
                    className='object-cover w-full h-full'
                    src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJvb21zfGVufDB8fDB8fHww"
                    alt="/"
                />
            </div>
        </div>
    );
};
