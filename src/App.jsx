import React from 'react'
import Header from './components/Header/Header'
import Herosection from './components/Herosection/Herosection'
import AboutMe from './components/AboutMe/Aboutme'
import MyServices from './components/MyServices/Myservices'
import MyLatestWork from './components/MyLatestWork/Mylatestwork'
import GetInTouch from './components/GetInTouch/Getintouch'


function App() {
  return (
    <div>
      <Header />
      <Herosection />
      <AboutMe />
      <MyServices />
      <MyLatestWork />
    </div>
  )
}

export default App