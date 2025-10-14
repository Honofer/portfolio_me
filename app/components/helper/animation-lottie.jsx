"use client"

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// Import Lottie dynamiquement pour éviter l'erreur "document is not defined"
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationPath, width }) => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    }
  };

  // Ne rendre Lottie que côté client
  if (!isMounted) {
    return <div style={{ width: '95%', height: '300px' }}></div>;
  }

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;