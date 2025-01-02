import React, { useEffect, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useOptimizedAnimation } from '../hooks/useOptimizedAnimation';
import OptimizedImage from './OptimizedImage';

interface ParallaxBackgroundProps {
  imageUrl?: string;
  videoUrl?: string;
  overlayColor?: string;
  overlayOpacity?: number;
  scale?: number;
  speed?: number;
  blur?: number;
  className?: string;
  fallbackColor?: string;
  disableParallax?: boolean;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({
  imageUrl = '/background.jpg',
  videoUrl,
  overlayColor = 'rgba(0, 0, 0, 0.5)',
  overlayOpacity = 0.5,
  scale = 1.2,
  speed = 0.5,
  blur = 0,
  className = '',
  fallbackColor = '#1a1a1a',
  disableParallax = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { elementRef, animate, intensity } = useOptimizedAnimation();
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ['start start', 'end start']
  });

  const handleLoadSuccess = useCallback(() => {
    setIsLoaded(true);
    setHasError(false);
  }, []);

  const handleLoadError = useCallback(() => {
    setHasError(true);
    console.error('Failed to load background media:', videoUrl || imageUrl);
  }, [videoUrl, imageUrl]);

  const adjustedSpeed = speed * intensity;
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  
  const y = useSpring(
    useTransform(
      scrollYProgress,
      [0, 1],
      disableParallax ? ['0%', '0%'] : ['0%', `${adjustedSpeed * 100}%`]
    ),
    springConfig
  );

  const scaleProgress = useSpring(
    useTransform(
      scrollYProgress,
      [0, 1],
      disableParallax ? [scale, scale] : [scale, scale + 0.1]
    ),
    springConfig
  );

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]),
    springConfig
  );

  const blurEffect = useSpring(
    useTransform(scrollYProgress, [0, 1], [blur, blur + 2]),
    springConfig
  );

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: overlayOpacity,
      transition: { duration: 0.5 }
    }
  };

  if (hasError) {
    return (
      <div 
        className={`absolute inset-0 w-full h-full ${className}`}
        style={{ backgroundColor: fallbackColor }}
      />
    );
  }

  return (
    <div 
      ref={elementRef}
      className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          y: disableParallax ? 0 : y,
          scale: scaleProgress,
          opacity: animate ? opacity : 0,
          willChange: 'transform'
        }}
      >
        {videoUrl ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            onLoadedData={handleLoadSuccess}
            onError={handleLoadError}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
          <OptimizedImage
            src={imageUrl}
            alt="Background"
            className="w-full h-full object-cover"
            onLoad={handleLoadSuccess}
            onError={handleLoadError}
            priority={true}
            sizes="100vw"
            quality={90}
          />
        )}
        
        <motion.div
          className="absolute inset-0"
          variants={overlayVariants}
          initial="hidden"
          animate={isLoaded && animate ? "visible" : "hidden"}
          style={{
            backgroundColor: overlayColor,
            backdropFilter: `blur(${blurEffect}px)`,
          }}
        />
      </motion.div>
    </div>
  );
};

export default React.memo(ParallaxBackground);