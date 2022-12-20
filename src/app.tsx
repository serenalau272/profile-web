import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faXmark,
  faPlus,
  faArrowLeft,
  faArrowRight,
  faRotateRight,
  faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import GlobalStyle from './styling/global'
import Home from './pages'
import AboutSection from './components/aboutSection'
import ContactSection from './components/contactSection'
import ExperienceSection from './components/experienceSection'

library.add(
  faXmark,
  faPlus,
  faArrowLeft,
  faArrowRight,
  faRotateRight,
  faStar,
  faEllipsisVertical,
)

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={AboutSection} exact />
          <Route path="/experience" component={ExperienceSection} exact />
          <Route path="/contact" component={ContactSection} exact />
        </Switch>
      </Router>
    </>
  )
}

export default App
