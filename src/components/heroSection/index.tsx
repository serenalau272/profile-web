import React, { useEffect, useState } from 'react'
import Clock from 'react-clock'
import 'react-clock/dist/Clock.css'
import Typewriter from 'typewriter-effect'

import {
  HeroContainer,
  HeroH1,
  HeroH2,
  HeroDesk,
  HeroDeskItemsContainer,
  HeroComputer,
  HeroScreenContainer,
  HeroShelf,
  HeroBooks,
  HeroBibleVerse,
  HeroLamp,
  HeroNotePad,
  HeroMouse,
  HeroPencils,
  HeroRubiks,
  HeroShelfContainer,
  HeroClock,
} from './heroSection'

import heroComputer from '../../resources/media/heroComputer.png'
import heroDesk from '../../resources/media/desk.png'
import heroBibleVerse from '../../resources/media/bibleVerse.png'
import heroBooks from '../../resources/media/books.png'
import heroLamp from '../../resources/media/lamp.png'
import heroNotePad from '../../resources/media/notePad.png'
import heroMouse from '../../resources/media/mouse.png'
import heroPencils from '../../resources/media/pencils.png'
import heroRubiks from '../../resources/media/rubiks.png'
import heroClock from '../../resources/media/clock.png'

interface IHeroSectionProps {
  onClickScreen: () => void
}

const HeroSection: React.FC<IHeroSectionProps> = (props: IHeroSectionProps) => {
  const [value, setValue] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <HeroContainer>
      <HeroDesk src={heroDesk} />
      <HeroDeskItemsContainer>
        <HeroComputer src={heroComputer} />
        <HeroScreenContainer onClick={props.onClickScreen}>
          <HeroH1>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(100)
                  .pauseFor(700)
                  .typeString('Hello!')
                  .pauseFor(700)
                  .typeString(" I'm Serena,")
                  .pauseFor(200)
                  .typeString(' a software engineer.')
                  .start()
              }}
            />
          </HeroH1>
        </HeroScreenContainer>
        <HeroLamp src={heroLamp} />
        <HeroPencils src={heroPencils} />
        <HeroNotePad src={heroNotePad} />
        <HeroMouse src={heroMouse} />
      </HeroDeskItemsContainer>
      <HeroH2 onClick={props.onClickScreen}>• Click to zoom •</HeroH2>
      <HeroShelf />
      <HeroShelfContainer>
        <HeroBooks src={heroBooks} />
        {/* <Clock
          value={value}
          className="clock-style"
          hourHandLength={40}
          hourHandWidth={2}
          minuteHandLength={50}
          secondHandLength={60}
          renderMinuteMarks={false}
        /> */}
        <HeroClock src={heroClock} />
        <HeroBibleVerse
          src={heroBibleVerse}
          onClick={() => window.open('https://www.pcbc.nz/', '_blank')}
        />
        <HeroRubiks src={heroRubiks} />
      </HeroShelfContainer>
    </HeroContainer>
  )
}

export default HeroSection
