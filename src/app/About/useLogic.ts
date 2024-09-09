import React, { useState } from 'react'

export const useLogicAbout = () => {
  const [about, setAbout] = useState(
    {
      title:"About Us",
      dis:"Welcome to our company! We are a passionate team dedicated to delivering exceptional products and services. With a commitment to innovation and excellence, we strive to meet the evolving needs of our customers. Our journey began with a simple idea, and over the years, we’ve grown into a leading industry player. Our values of integrity, quality, and customer satisfaction drive everything we do. Get to know us better and discover how we can help you achieve your goals."
    }
  )
    return{about}
}