import React from 'react'
import Navber from './components/navber/navber'
import Hero from './components/Hero/Hero'
import Program from './components/Programs/Program'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Textimonials from './components/Textimonials/Textimonials'

const App = () => {
  return (
    <div>
      <Navber />
      <Hero />
      <Title subTitle="Our PROGRAM" Title="What We offer"/>
      <Program/>
      <About />
      <Title subTitle="Gallery" Title="Campus Photos"/>
      <Campus />
      <Title subTitle="TEXTIMONIALS" Title="What Student Says"/>
      <Textimonials />
    </div>
  )
}

export default App