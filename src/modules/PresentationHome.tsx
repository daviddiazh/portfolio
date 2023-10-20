'use client';

// import Lottie from "lottie-react";
// import headerAnimation from '@/assets/animations/header-animation.json';
import { Navbar } from "@/components/Navbar";

export default function PresentationHome () {

  return (
    <div style={{height: '100vh', width: '100%'}}>
        <Navbar />
        <h1>PresentationHome</h1>
        
        {/* <Lottie animationData={headerAnimation} loop={true} autoplay style={{zIndex: 0}} /> */}
    </div>
  )
}
