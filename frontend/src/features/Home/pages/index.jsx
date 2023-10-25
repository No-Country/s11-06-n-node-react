import React from 'react'
import ListFriends from '../../../components/ListCardFriends/index.jsx'
import ModalAddActivity from '../../../components/Modals/ModalAddActivity.jsx'


function HomePage() {
  return (
    <div className='w-screen h-screen'>
      {/* <ListFriends /> */}
      <ModalAddActivity/>
      
    </div>
  )
}

export default HomePage