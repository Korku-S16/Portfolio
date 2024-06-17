"use client"

import React from 'react'
import {motion} from "framer-motion"

const Testpage = () => {

    const variants = {
        variant1:{y: 0, opacity: 1},
        variantt2 :{y: 10000, opacity: 1}
    };
  return (
   
// At the palce of animation we can also use "varaints"
//  Ise use ese krenge
//  variants={variants}
// animate="variant1"

 // we can use condtions also
    //  animate={ condition? "variant1":"variant2"}


<div className="relative w-full h-screen">
  <motion.div
    className="w-full h-full bg-red-800 rounded-r-10"
    initial={{ y: -1000 }}  // Starting position off-screen at the top
    animate={{ y: 0, opacity: 1 }}  // Ending position at the normal spot
   
   
    transition={{ delay:0.5 ,duration: 2 }}  // Animation duration

  ></motion.div>
</div>

  )
}

export default Testpage
