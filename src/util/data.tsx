import profile from '../resources/media/profile.jpg'
import kemuKupu from '../resources/media/kemuKupu.png'
import noodle from '../resources/media/noodle.png'
import uads from '../resources/media/uads.png'
import nolo from '../resources/media/nolo.png'

interface ProjectData {
  date: string
  title: string
  role: string
  description: string
  tech: string
  image: {
    src: string
    isLandscape: boolean
  }
}

interface ProfileWebData {
  about: {
    aboutText: string
    profileImg: string
  }
  projects: ProjectData[]
}

export const data: ProfileWebData = {
  about: {
    aboutText:
      "I'm a curious and enthusiastic software engineering undergraduate student from The University of Auckland with a keen passion for innovative solutions in the technological engineering context. I love new challenges that push me to grow, learn more and expand my skill set and experience.",
    profileImg: profile,
  },
  projects: [
    {
      date: 'Sept - Oct 2021',
      title: 'Kēmu Kupu',
      role: 'Frontend developer and graphic designer',
      description:
        "Multimedia educationaltool designed to help children with te reo Māori.\n\nWinner of 2021 course competition People's Choice award.",
      tech: 'Java / JavaFX, Rust',
      image: {
        src: kemuKupu,
        isLandscape: true,
      },
    },
    {
      date: 'Aug - Sept 2022',
      title: 'Nolo',
      role: 'Fullstack developer and graphic designer',
      description: '',
      tech: '',
      image: {
        src: nolo,
        isLandscape: true,
      },
    },
    {
      date: 'Aug 2021 - Apr 2022',
      title: 'UADS Project - WDCC',
      role: 'Fullstack developer',
      description:
        'Working closely with the University of Auckland Dessert Society (UADS) to develop an app that allows users to register and pay for events.',
      tech: 'MongoDB, Express, React, Node, TypeScript',
      image: {
        src: uads,
        isLandscape: false,
      },
    },
    {
      date: 'Aug 2021',
      title: 'Noodle',
      role: 'Backend developer',
      description:
        'Joke/fact/media search engine with user input dependent cat health bar. \n\nLinked with Chrome extension to redirect productive sites to the page.',
      tech: 'MongoDB, Express, React, Node, JavaScript',
      image: {
        src: noodle,
        isLandscape: true,
      },
    },
  ],
}
