import profile from '../resources/media/profile.jpg'
import kemuKupu from '../resources/media/kemuKupu.png'
import noodle from '../resources/media/noodle.png'
import uads from '../resources/media/uads.png'
import nolo from '../resources/media/nolo.png'

export const data = {
  about: {
    aboutText:
      "I'm a curious and enthusiastic software engineering undergraduate student from The University of Auckland with a keen passion for innovative solutions in the technological engineering context. I love new challenges that push me to grow, learn more and expand my skill set and experience.",
    profileImg: profile,
  },
  projects: [
    {
      image: {
        src: kemuKupu,
        isLandscape: true,
      },
    },
    {
      image: {
        src: noodle,
        isLandscape: true,
      },
    },
    {
      image: {
        src: uads,
        isLandscape: false,
      },
    },
    {
      image: {
        src: nolo,
        isLandscape: true,
      },
    },
  ],
}
