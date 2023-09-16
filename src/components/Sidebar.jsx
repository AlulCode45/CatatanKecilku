import React from 'react'
import { GrArchive, GrCheckboxSelected, GrHome, GrLogout } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'

export default function Sidebar({ active_tab }) {
    const navigate = useNavigate()

    return (
        <>
            <aside className="">
                <input type="text" className='border border-gray-300 h-9 rounded-sm outline-none px-2 py-2' placeholder='Masukan Kata Kunci....' />

                <div className="mt-5 bg-white ">
                    <div className="py-5">
                        <ul>
                            <li className={`py-3 px-5 hover:bg-yellow-100 ${active_tab == 1 ? 'bg-yellow-100' : ''} flex gap-2 items-center `} onClick={() => navigate('/')}>
                                <GrHome />
                                Home
                            </li>
                            <li className={`py-3 px-5 hover:bg-yellow-100 ${active_tab == 2 ? 'bg-yellow-100' : ''} flex gap-2 items-center`} onClick={() => navigate('/archived')}>
                                <GrArchive />
                                Archived</li>
                        </ul>
                    </div>
                </div>
            </aside>
        </>
    )
}
