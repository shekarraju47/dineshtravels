import React from 'react'
import HeroSection from '../HeroSection'
import ServicesSection from '../ServicesSection'
import AboutSection from '../AboutSection'
import TrustedBySection from '../TrustedBySection/TrustedBySection'
import Journey from '../Journey'
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

            <main className="flex flex-col max-md:mt-10 justify-center h-[919px pt-10">
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
            </main>
        </>
    )
}

export default Services