import React, { useState, useEffect } from 'react'
import { FaLinkedin, FaGithubSquare, FaFacebookSquare } from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'

import {
  AboutContainer,
  Column1,
  Column2,
  AboutP,
  ProfileImg,
  ProfileBg,
  IconsWrapper,
  LinkIcon,
} from './aboutSection'

import profile from '../../resources/media/profile.jpg'
import BrowserPage from '../browser/browserPage'
import { Section } from '../../util/enums/Section'
import { data } from '../../util/data'
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
      <BrowserPage section={Section.About}>
        <AboutContainer>
          <Column1>
            <ProfileImg src={data.about.profileImg} />
            <ProfileBg />
          </Column1>
          <Column2>
            <AboutP>{data.about.aboutText}</AboutP>
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
        </AboutContainer>
      </BrowserPage>
    </>
  )
}

export default AboutSection
