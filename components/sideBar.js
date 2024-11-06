import React from 'react'
import { HomeIcon, ClipboardDocumentListIcon, CalendarIcon, Cog6ToothIcon, LifebuoyIcon, PhoneIcon } from '@heroicons/react/24/outline'

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-blue-600 text-white flex flex-col p-4">
    <h2 className="text-2xl font-bold mb-8">Board.</h2>
    <ul className="flex flex-col space-y-4 mb-auto">
        <li>
          <a href="#dashboard" className="flex items-center text-white hover:text-blue-200 space-x-2">
            <HomeIcon className="h-5 w-5" />
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#projects" className="flex items-center text-white hover:text-blue-200 space-x-2">
            <ClipboardDocumentListIcon className="h-5 w-5" />
            <span>Projects</span>
          </a>
        </li>
        <li>
          <a href="#tasks" className="flex items-center text-white hover:text-blue-200 space-x-2">
            <ClipboardDocumentListIcon className="h-5 w-5" />
            <span>Tasks</span>
          </a>
        </li>
        <li>
          <a href="#calendar" className="flex items-center text-white hover:text-blue-200 space-x-2">
            <CalendarIcon className="h-5 w-5" />
            <span>Calendar</span>
          </a>
        </li>
        <li>
          <a href="#settings" className="flex items-center text-white hover:text-blue-200 space-x-2">
            <Cog6ToothIcon className="h-5 w-5" />
            <span>Settings</span>
          </a>
        </li>
      </ul>

      {/* Help and Contact Us buttons */}
      <div className="mt-auto space-y-4">
        <button className="w-full flex items-center justify-start text-white hover:bg-blue-500 py-2 px-4 rounded-lg space-x-2">
          <LifebuoyIcon className="h-5 w-5" />
          <span>Help</span>
        </button>
        <button className="w-full flex items-center justify-start text-white hover:bg-blue-500 py-2 px-4 rounded-lg space-x-2">
          <PhoneIcon className="h-5 w-5" />
          <span>Contact Us</span>
        </button>
      </div>
    </div>

  )
}

export default Sidebar