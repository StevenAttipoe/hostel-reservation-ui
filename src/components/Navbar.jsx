import React from 'react'

export default function Navbar() {
  return (
    <div>
      <div class="bg-gray-800 w-screen flex flex-row items-center p-1 justify-between">
        <a href='/' class="ml-8 text-lg text-white hidden md:flex">Masere Booking</a>

        <div class="flex flex-row-reverse mr-4 ml-4 md:hidden">
        <i class="fas fa-bars"></i>
        </div >
        <div class="flex flex-row-reverse mr-8 hidden md:flex">
            <a href='/signup' class="text-white text-center px-4 py-2 m-2">Sign Up</a>
            <a href='/signin' class="text-white text-center px-4 py-2 m-2">Sign In</a>
        </div>
      </div>
    </div>
  )
}
