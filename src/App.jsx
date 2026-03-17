import React from 'react'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import AboutMe from './components/AboutMe/AboutMe'
import MyServices from './components/MyServices/MyServices'
import MyLatestWork from './components/MyLatestWork/MyLatestWork'
import GetInTouch from './components/GetInTouch/GetInTouch'
import { Element } from 'react-scroll'

const App = () => {


  return (
    <div>

      <Header />


      <Element name='home'>
        <HeroSection />
      </Element>

      <Element name='aboutme'>
        <AboutMe />
      </Element>

      <Element name='services'>
        <MyServices />
      </Element>

      <Element name='portfolio'>
        <MyLatestWork />
      </Element>

      <Element name='contact'>
        <GetInTouch />
      </Element>



    </div>
  )
}

export default App