import React from 'react'
type ValueCardProps = {
    title: string
    description: string
  }
  
  export default function ValueCard({ title, description }: ValueCardProps) {
    return (
      <div className="border rounded p-4 shadow-sm bg-gray-50">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    )
  }
  