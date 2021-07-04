import React from "react";
import { Sticky } from "../../styles";
import { motion, useTransform, useViewportScroll } from "framer-motion";

import { Container } from './styles'

const FirstAndSecond: React.FC = () => {
  const { scrollYProgress } = useViewportScroll()
  const frameOpacity = useTransform(scrollYProgress)
  return (
    <Sticky className="second"> 
      <motion.div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '100vh',
        borderRadius: '4px',
        border: '4px solid #fff',
        opacity: frameOpacity,
      }} />
    </Sticky>
  )
};

const First: React.FC = () => {
  return(
    <Sticky className="first">

    </Sticky>
  )
}

export default FirstAndSecond;