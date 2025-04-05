import { TwitterIcon, Instagram, LinkedinIcon, MailIcon, PhoneCallIcon } from 'lucide-react';



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
                    <div className="flex flex-col items-center justify-center">
                        <TwitterIcon className="w-6 h-6 text-gray-400 hover:text-gray-300" />
                        <a href="#" className="text-gray-400 hover:text-gray-300">Twitter</a>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Instagram className="w-6 h-6 text-gray-400 hover:text-gray-300" />
                        <a href="https://www.instagram.com/dinesh_travels1/profilecard/?igsh=N3c3ODFjaGR2eGRh" target='_blank' className="text-gray-400 hover:text-gray-300">Instagram</a>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <LinkedinIcon className="w-6 h-6 text-gray-400 hover:text-gray-300" />
                        <a href="#" className="text-gray-400 hover:text-gray-300">LinkedIn</a>
                    </div>
                </div>
                <div className='flex justify-around max-sm:flex-col gap-4 items-center mb-4'>

                    <a href="mailto:info@dineshtravels.com" className="flex flex-col gap-2 items-center justify-center text-gray-400 hover:text-gray-300">
                        <MailIcon className="w-6 h-6 text-gray-400 hover:text-gray-300" />
                        info@dineshtravels.com
                    </a>

                    <a href="tel:+919912345729" className="flex flex-col gap-2 items-center justify-center text-gray-400 hover:text-gray-300">
                        <PhoneCallIcon className="w-6 h-6 text-gray-400 hover:text-gray-300" />
                        +91 9912345729</a>
                    {/* <a href="tel:+919948599101" className="text-gray-400 hover:text-gray-300 ml-4">+91 9948599101</a> */}

                </div>

            </div>
            <div className="container mx-auto text-center">
                <p className="text-sm">© 2025 Dinesh Travels. All rights reserved.</p>
                <p className="text-sm">Privacy Policy | Terms of Service</p>
            </div>
        </footer>
    )
}

export default Footer