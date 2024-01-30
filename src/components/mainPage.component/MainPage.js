import React from 'react'
import '../mainPage.component/MainPage.css'
import SideBar from './sideBar'
import Submain from '../submain.component/Submain'

function MainPage() {
  return (
    <div className='MainPage'>
      <SideBar />
      <Submain/>   
    </div>
  )
}

export default MainPage