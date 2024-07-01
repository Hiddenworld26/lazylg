import React from 'react'
import './custom.css'
import HomeScreen from './HomeScreen/HomeScreen'
import LookBook from './LookBook/LookBook'
function MainScreen() {
  return (
    <div className='MainScreen'>
      <HomeScreen/>
      {/* <LookBook/> */}
    </div>
  )
}

export default MainScreen