import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-32 h-32 mx-auto rounded-full shadow-md"
        />
        <h1 className="text-2xl font-bold mt-4">Jay Byeun</h1>
        <p className="text-gray-600">Fullstack Software Engineer</p>

        <div className="mt-6 space-x-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            LinkedIn
          </a>
        </div>

        <p className="mt-6 text-gray-700">
          Hi! I’m a passionate developer!
        </p>
      </div>
    </div>
  );
}
