import React from 'react'
import { ContactContainer, ContactScreen } from './contactSection'

import contactTab from '../../resources/media/contactTab.png'

const ContactSection = () => {
  return (
    <>
      <ContactContainer>
        <ContactScreen src={contactTab} />
      </ContactContainer>
    </>
  )
}

export default ContactSection
