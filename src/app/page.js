import React from 'react'
import Hero from './component/Homepage/Hero'
import { RevealBento } from './component/Homepage/Grid'
import { HoverImageLinks } from './component/Homepage/HoverLinks'
import { TextParallaxContentExample } from './component/Homepage/Content'
import News from './component/Homepage/News'

const page = () => {
  return (
    <div>
      <Hero/>
      <RevealBento/>
      <TextParallaxContentExample/>
      <HoverImageLinks/>
      <News/>
    </div>
  )
}

export default page