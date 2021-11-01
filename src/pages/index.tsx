import React, {useState} from 'react'
import AboutSection from '../components/aboutSection'
import HeroSection from '../components/heroSection'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <AboutSection />
        </>
    )
}

export default Home
