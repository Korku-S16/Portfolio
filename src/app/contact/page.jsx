"use client"

import React from 'react'
import {motion} from "framer-motion"
const ContactPage = () => {
  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0vh"}} transition={{duration:1}} > 
    <div className=" h-screen  flex items-center text-8xl justify-center">
      ContactPage
    </div>
    </motion.div>
  )
}

export default ContactPage
