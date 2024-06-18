"use client"

import React from 'react'
import {motion} from "framer-motion"

const AboutPage = () => {
  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0vh"}} transition={{duration:1}} > 
    {/* Container */}
    <div>
        {/* text COntainer */}
        <div className=' p-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl flex flex-col gap-24 md:gap-32 lg:gap-40 xl:gap-64'>
            {/* Biography Container */}
            <div>Biography</div>
            {/* Skills Container */}
            <div>Skills</div>
            {/* Expirence container */}
            <div>Expirence</div>

        </div>
        {/* SvG conatiner */}
        <div>

        </div>


    </div>


    
    </motion.div>
    
  )
}

export default AboutPage
