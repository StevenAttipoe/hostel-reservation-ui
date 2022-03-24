import React from 'react'
import background from "../img/banner.png";


export default function Home() {
  return (
      <div>
        <div class="bg-transparent w-full bg-center bg-cover h-screen" style={{ backgroundImage: `url(${background})` }} >
            <div class="bg-inherit w-screen flex flex-row items-center p-1 justify-between">
                <a href='/' class="ml-8 text-lg text-white hidden md:flex">Masere Booking</a>

                <div class="flex flex-row-reverse mr-4 ml-4 md:hidden">
                <i class="fas fa-bars"></i>
                </div >
                <div class="flex flex-row-reverse mr-8 hidden md:flex">
                    <a href='/signup' class="text-white text-center px-4 py-2 m-2">Sign Up</a>
                    <a href='/signin' class="text-white text-center px-4 py-2 m-2">Sign In</a>
                </div>
            </div>
            <div class="flex items-center justify-center w-full h-full">
                <div class="text-center">
                    <h1 class="font-semibold text-white uppercase ">
                        <span class="font-mono text-7xl">
                            Masere Hostel
                        </span>
                    </h1>
                    <h1 class="font-semibold text-white uppercase ">
                        <span class="font-mono text-2xl">
                            Unlock the view from Masere
                        </span>
                    </h1>
                    {/* <button class="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        Start project
                    </button> */}
                    
                </div>
            </div>
        </div>

      </div>

  )
}
