import React from 'react'
import Hero from './component/Homepage/Hero'
import Features from './component/Homepage/Features'
import { RevealBento } from './component/Homepage/Grid'
import { HoverImageLinks } from './component/Homepage/HoverLinks'
import { TextParallaxContentExample } from './component/Homepage/Content'

const page = () => {
  return (
    <div>
      <Hero/>
      <RevealBento/>
      <HoverImageLinks/>
      <TextParallaxContentExample/>
    </div>
  )
}

export default page