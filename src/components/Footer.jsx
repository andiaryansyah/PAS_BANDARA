import React from 'react'
import {IoIosCall} from 'react-icons/io';

const Footer = () => {
  return (
    <div className="bg-[#182A68] text-gray-50 text-center py-6 px-16">
        <div className="flex justify-center items-center">
            <IoIosCall size={20} />
            <p className="ml-3 font-medium">Contact Person</p>
        </div>
        <p className="text-3xl mt-4">0813-5147-7225</p>
        <div className="w-full border-b mt-4"></div>
        <p className="mt-4">Jam Kerja : 07.00 - 17.00</p>
        <p className="mt-2">Alamat : Jl. Bandar Udara no. 13, Kabupaten Toli-toli, Provinsi Sulawesi Tengah - 94561</p>
        <p className="mt-2">Email : sultanbantilan@gmail.com</p>
    </div>
  )
}

export default Footer