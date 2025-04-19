import React from 'react'
import { motion } from 'framer-motion'
import TrustedBySection from '../TrustedBySection/TrustedBySection'
import TestimonialSection from '../TestimonialSection'
import ContactPage from '../ContactForm/ContactPage'
import Footer from '../Footer/Footer'
import ServicesCard from './ServicesCard'
import Navbar from '../Navbar'
import { ServicesPage } from './services/ServicesPage'
import LegacyOfTrust from '../LegacyOfTrust/LegacyOfTrust'


function Services() {
    return (
        <>

            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="flex flex-col max-md:mt-10 justify-center h-[919px pt-10">
                <div className="absolute inset-x-0 top-[40px] px-20 max-md:px-5">
                    <Navbar />
                </div>
                <ServicesCard />
                <ServicesPage />
                <LegacyOfTrust />
                <TrustedBySection title="Trusted by" />
                <TestimonialSection />
                <ContactPage />
                <Footer />
            </motion.main>
        </>
    )
}

export default Services