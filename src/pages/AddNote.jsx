import React, { useState } from 'react'
import Topbar from '../components/Topbar'
import Sidebar from '../components/Sidebar'
import { GrArchive, GrTrash } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'

export default function AddNote() {
    /**
     * 
     * {
        id: number | string,
        title: string,
        body: string,
        archived: boolean, 
        createdAt: string,
        }
     */

    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [archived, setArchived] = useState(false)

    const handleSubmit = () => {
        const existingNoteData = sessionStorage.getItem('catatanku');
        const noteData = existingNoteData ? JSON.parse(existingNoteData) : [];
        const newData = {
            id: title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-+|-+$/g, '')
                .trim(),
            title: title,
            body: body,
            archived: archived,
            createdAt: new Date(),
        };
        noteData.push(newData);

        try {
            sessionStorage.setItem('catatanku', JSON.stringify(noteData));
            alert('Catatan Telah di Tambahkan !');
            navigate('/');
        } catch {
            alert('Catatan Gagal di Tambahkan !');
        }
    }

    return (
        <>
            <Topbar />
            <div className="container mx-auto">
                <main className="flex gap-5">
                    <Sidebar />
                    <div className='w-full'>
                        <div className="flex justify-between items-center mb-4">
                            <h1 className='font-semibold text-2xl'>Add Note / Tambah Catatan</h1>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="title" className='block text-gray-800'>Judul</label>
                                <input type="text"
                                    placeholder='Masukan judul'
                                    className='border outline-none w-full px-3 py-2 mt-2'
                                    value={title}
                                    onChange={(e) => {
                                        if (title.length < 50) {
                                            setTitle(e.target.value)
                                        }
                                    }}
                                />

                                <small className={`text-sm ${title.length < 30 ? 'text-green-500' : 'text-red-500'}`}>{50 - title.length} Karakter Tersisa</small>


                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="body" className='block text-gray-800'>Isi</label>
                                <textarea rows="8"
                                    className='border outline-none w-full px-3 py-2 mt-2'
                                    placeholder='Masukan isi catatan'
                                    onChange={(e) => setBody(e.target.value)}
                                />
                            </div>
                            <div className="form-group gap-3 flex mt-3">
                                <label htmlFor="archived" className='text-gray-800'>Archived</label>
                                <input type="checkbox"
                                    value={archived}
                                    onChange={(e) => {
                                        setArchived(e.target.checked)
                                        console.log(archived)
                                    }}
                                />
                            </div>
                            <button className='bg-yellow-200 px-4 py-2 rounded-sm mt-3' type='submit'>Simpan</button>
                        </form>
                    </div>
                </main>
            </div>
        </>
    )
}
