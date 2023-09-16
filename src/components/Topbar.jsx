import React from 'react'

export default function Topbar() {
    return (
        <>
            <div className="container mx-auto my-4">
                <div className="flex justify-between">
                    <div className="">
                        <h1 className='font-medium text-lg'>CatatanKecilmu</h1>
                    </div>
                    <div className="flex gap-3">
                        <div className="bg-gray-500 w-10 h-10 rounded-full"></div>
                        <img src="/menu-icon.svg" className='w-10 h-10' alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
