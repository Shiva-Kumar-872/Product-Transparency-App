import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from "react-router-dom";

interface HeaderProps {
  logoText: string
  navItems: { label: string; path: string }[]
}

export default function Header({ logoText, navItems }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/30 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 py-4 relative flex items-center">
        {/* Logo section at far left with icon */}
        <div className="absolute left-0 flex items-center space-x-3">
          {/* Logo icon */}
          <Link to="/" className="text-xl font-bold text-gray-900 hover:text-green-600 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 text-green-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 20 7 12 12 4 7 12 2" />
            <polyline points="4 12 12 17 20 12" />
            <polyline points="4 17 12 22 20 17" />
          </svg>
</Link>


          {/* Logo Text */}
 
          <Link to="/" className="text-xl font-semibold text-green-600">
  {logoText}
</Link>

        </div>
  

        {/* Nav links centered */}
        <nav className="mx-auto flex space-x-6 text-sm font-medium text-gray-700">
          {navItems.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive ? 'text-green-600 font-semibold' : 'hover:text-green-500'
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
