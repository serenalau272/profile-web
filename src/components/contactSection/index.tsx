import React from 'react'
import { ContactContainer, ContactTitle } from './contactSection'

import contactTab from '../../resources/media/contactTab.png'
import BrowserPage from '../browser/browserPage'
import { Section } from '../../util/enums/Section'

const ContactSection = () => {
  return (
    <>
      <BrowserPage section={Section.Contact}>
        <ContactContainer>
          <ContactTitle>{Section.Contact}</ContactTitle>
        </ContactContainer>
      </BrowserPage>
    </>
  )
}

export default ContactSection
