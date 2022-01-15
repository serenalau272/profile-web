import React, {useState} from 'react'
import AboutSection from '../components/aboutSection'
import ContactSection from '../components/contactSection'
import ExperienceSection from '../components/experienceSection'
import HeroSection from '../components/heroSection'
import Navbar from '../components/navbar'
import ProjectsSection from '../components/projectsSection'
import Sidebar from '../components/sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            {/* <Navbar toggle={toggle}/> */}
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ExperienceSection />
            <ContactSection />
        </>
    )
}

export default Home
