import React from 'react'
import headerAnimation from '@/assets/animations/header-animation.json';
import Lottie from 'lottie-react';

export const Navbar = () => {
  return (
    <div>
        Navbar
        <Lottie animationData={headerAnimation} loop={true} autoplay />
    </div>
  )
}
