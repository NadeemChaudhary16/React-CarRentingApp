import React from 'react'
import{BsInstagram} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'
import {TbBrandLinkedin} from 'react-icons/tb'
import {FaXTwitter} from 'react-icons/fa6'
const Footer = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center gap-5">
        <a href="https//www.github.com/nadeemchaudhary16"><AiOutlineGithub size={30}/></a>
        <a href="https//www.linkedin.com/nadeemchaudhary"><TbBrandLinkedin size={30}/></a>
        <a href="https//www.x.com/nadeemCh100"><FaXTwitter size={30}/></a>
        <a href="https//www.instagram.com/nadeemchaudhary16"><BsInstagram size={30}/></a>
      </div>
      <div>
        <p>&#169;2023 Nadeem Chaudhary | All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
