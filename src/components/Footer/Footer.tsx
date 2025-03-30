import { FunctionComponent } from 'react';



import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 px-4 flex flex-col justify-center items-center">
            <div>
                <div className="container max-md:text-sm mx-auto text-center mb-6">
                    <h1 className="font-bold mb-4">DineshTravels!</h1>
                    <p className="mb-4 text-[rgba(255,255,255,0.9)] text-center">"Where Journys made easy"</p>
                </div>
            </div>
            <div className="container mx-auto text-center mb-6">
                <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
                <div className="flex justify-center max-md:d space-x-4 mb-4">
                    <i className="fa-solid fa-file-import"></i>
                    <a href="#" className="text-gray-400 hover:text-gray-300">Twitter</a>
                    <a href="#" className="text-gray-400 hover:text-gray-300">Instagram</a>
                    <a href="#" className="text-gray-400 hover:text-gray-300">LinkedIn</a>
                </div>
            </div>
            <div className="container mx-auto text-center">
                <p className="text-sm">© 2023 Your Company Name. All rights reserved.</p>
                <p className="text-sm">Privacy Policy | Terms of Service</p>
            </div>
        </footer>
    )
}

export default Footer