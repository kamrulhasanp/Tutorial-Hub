'use client'
import '../globals.css'
import NavBar from '@/components/Nav/NavBar'

export default function MainBodyLayout({children}) {
  return (
    <div className='h-screen averflow-auto'>
        <div className="">
            <NavBar />
        </div>
      
    </div>
  )
}
