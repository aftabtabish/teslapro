import React from 'react'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import {MdOutlineLanguage} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
export default function Header() {
  return (
    <div>
        <div className='header'>
    <a href="#tesla" ><img src="./images/logo.png" alt="" className='h-[20px]' /></a>
    <div className='hidden lg:block text-xl'>
        <a href="#vehicles" className='links'>Vehicles</a>
        <a href="#energy" className='links'>Energy</a>
        <a href="#charging" className='links'>Charging</a>
        <a href="#discover" className='links'>Discover</a>
        <a href="#shop" className='links'>Shop</a>
    </div>

    <div className='icons'>
        <a href="#support"id='sup'><AiOutlineQuestionCircle/></a>
        <a href="#" id='lang'><MdOutlineLanguage/></a>
        <a href="#" id='pro'><CgProfile /></a>
    </div>
    
</div></div>
  )
}
