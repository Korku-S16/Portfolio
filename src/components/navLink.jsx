"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({link}) => {
const Pathname =usePathname ();
   console.log(Pathname);

  return (
    <Link href={link.url} className={`rounded p-1 ${Pathname === link.url && "bg-black text-white"}`} >{link.title}</Link>
  )
}

export default NavLink
