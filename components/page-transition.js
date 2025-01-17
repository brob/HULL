import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'

import Marquee from './marquee'
import Icon from './icon'

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }

const PageTransition = React.memo(() => {
  return (
    <>
      <Head>
        <title>Loading...</title>
      </Head>
      <motion.div
        key="loader"
        className="panel-swipe"
        initial={{
          clipPath: `inset(100% 0 0 0)`,
        }}
        animate={{
          clipPath: [`inset(100% 0 0 0)`, `inset(0% 0 0 0)`],
        }}
        exit={{
          clipPath: `inset(0 0 100% 0)`,
        }}
        transition={transition}
      >
        <div className="panel-swipe--content"></div>
        <div className="panel-swipe--bg"></div>
      </motion.div>
    </>
  )
})

export default PageTransition
