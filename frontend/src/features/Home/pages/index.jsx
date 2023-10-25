import React from 'react'
import ListFriends from '../../../components/ListCardFriends/index.jsx'
import ModalAddActivity from '../../../components/Modals/ModalAddActivity.jsx'
import BtnPlus from '../../../components/Buttons/BtnPlus.jsx'


function HomePage() {
  return (
    <div className='w-screen h-screen'>
      <ListFriends />
      <ModalAddActivity/>
      <BtnPlus/>
      
    </div>
  )
}

export default HomePage