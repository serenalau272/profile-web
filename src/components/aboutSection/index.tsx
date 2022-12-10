import React, { useState, useEffect } from 'react'
import { FaLinkedin, FaGithubSquare, FaFacebookSquare } from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'

import {
  AboutContainer,
  WindowContainer,
  Column1,
  Column2,
  AboutP,
  ProfileImg,
  ProfileBg,
  IconsWrapper,
  LinkIcon,
  AboutScreen,
} from './aboutSection'

import profile from '../../resources/media/profile.jpg'
import BrowserPage from '../browser/browserPage'
import { Section } from '../../util/enums/Section'
const iconStyle = { color: '#6F6F6F' }

const AboutSection = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    })
  }, []) //data-aos="fade-zoom-in"

  return (
    <>
      {/* <AboutContainer>
        <AboutScreen src={aboutTab} />
        <WindowContainer>
          <Column1>
            <ProfileImg src={profile} />
            <ProfileBg />
          </Column1>
          <Column2>
            <AboutP>
              I'm a curious and enthusiastic software engineering undergraduate
              student from The University of Auckland with a keen passion for
              innovative solutions in the technological engineering context. I
              love new challenges that push me to grow, learn more and expand my
              skill set and experience.
            </AboutP>
            <IconsWrapper>
              <LinkIcon>
                <FaLinkedin
                  onClick={() =>
                    window.open(
                      'https://www.linkedin.com/in/serena-lau-2166111a0/',
                      '_blank',
                    )
                  }
                  style={iconStyle}
                />
              </LinkIcon>
              <LinkIcon>
                <FaGithubSquare
                  onClick={() =>
                    window.open('https://github.com/serenalau272', '_blank')
                  }
                  style={iconStyle}
                />
              </LinkIcon>
              <LinkIcon>
                <FaFacebookSquare
                  onClick={() =>
                    window.open(
                      'https://www.facebook.com/serena.lau.351/',
                      '_blank',
                    )
                  }
                  style={iconStyle}
                />
              </LinkIcon>
            </IconsWrapper>
          </Column2>
        </WindowContainer>
      </AboutContainer> */}
      <BrowserPage section={Section.About}>
        <WindowContainer>
          <Column1>
            <ProfileImg src={profile} />
            <ProfileBg />
          </Column1>
          <Column2>
            <AboutP>
              I'm a curious and enthusiastic software engineering undergraduate
              student from The University of Auckland with a keen passion for
              innovative solutions in the technological engineering context. I
              love new challenges that push me to grow, learn more and expand my
              skill set and experience.
            </AboutP>
            <IconsWrapper>
              <LinkIcon>
                <FaLinkedin
                  onClick={() =>
                    window.open(
                      'https://www.linkedin.com/in/serena-lau-2166111a0/',
                      '_blank',
                    )
                  }
                  style={iconStyle}
                />
              </LinkIcon>
              <LinkIcon>
                <FaGithubSquare
                  onClick={() =>
                    window.open('https://github.com/serenalau272', '_blank')
                  }
                  style={iconStyle}
                />
              </LinkIcon>
              <LinkIcon>
                <FaFacebookSquare
                  onClick={() =>
                    window.open(
                      'https://www.facebook.com/serena.lau.351/',
                      '_blank',
                    )
                  }
                  style={iconStyle}
                />
              </LinkIcon>
            </IconsWrapper>
          </Column2>
        </WindowContainer>
      </BrowserPage>
    </>
  )
}

export default AboutSection
