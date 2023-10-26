import Friends from "../ListCardFriends/index"
import Sidebar from "../Sidebar/Sidebar"
import InfoFriend from '../InfoFriendChat/index'
// import axios from "axios"
// import io from 'socket.io-client'
// import { useState, useEffect } from 'react'



// const socket = io('http://localhost:8080')
// const url = 'url POST'

function MessageContainer() {

    // const [nameFriend, setNameFriend] = useState('')
    // const [message, setMessage] = useState('')
    // const [disable, setDisable] = useState(false)
    // const [messages, setMessages] = useState([])

    // const [storedMessages, setStoredMessages] = useState([])
    // cosnt [firstTime, setFirstTime] = useState(false)

    // useEffect(() => {
    //     const receivedMEssage = (message) => {
    //         setMessages([message, ...messages])
    //     }

    //     socket.on('message', receivedMEssage)

    //     return () => {
    //         socket.off('message', receivedMEssage)

    //     }

    // },[messages])

    // if(!firstTime) {
    //     axios.get(url + 'ruta de consulta').then(res => {
    //         setStoredMessages(res.data.messages)
    //     })
    // }


    // const SubmitName= (e) => {
    //     e.preventDefault()
    //     setNameFriend(nameFriend)
    //     setDisable(true)
    // }

    // const SubmitMessage= (e) => {
    //     e.preventDefault()
    //     if(nameFriend !== '') {
    //         socket.emit('message', message, nickname)
            
    //         const newMessage = {
    //             body: message,
    //             from: 'yo'
    //         }

    //         setMessages([newMessage, ...messages])
    //         setMessage('')


    //         axios.post(url + 'ruta de save', {
    //             message: message,
    //             from: nickname
    //         })

    //     } else {
    //         alert('Ingresa un nickmname antes de enviar un mensaje')
    //     }
    // }

  return (
    <div className=" flex h-auto">
      <div className="w-56">
            <div className='w-56'>
                <Sidebar />
            </div>
        </div>
        <div className="w-11/12   bg-greenSecundary flex  flex-col">
            <div className='w-full items-center justify-center'><InfoFriend /></div>
            <div className="mx-5 mb-2 h-4/5 grow bg-gray">
                
                {/* {messages.map((message, index) => {
                    <div key={index} className={`flex p-3 ${message.from === 'Yo'? 'justify-end': 'justify-start'}`}>
                        <div className={`bg-greenPrimary px-3 rounded-lg border-1 ${message.from ==='Yo' ? 'bg-greenSecundary' : ': bg-greenPrimary'} `}>
                            <div> <small>{message.from} : {message.body}</small></div>
                        </div>
                    </div>
                })} */}

            </div>
            <div className="w-full h-10 my-4">
                <div className='w-full flex items-center justify-center '>
                    {/* <form className='w-2/4 flex justify-center' onSubmit={SubmitName}>
                        <input type='text' className=' rounded-lg bg-white px-5 py-1 cursor-pointer' placeholder="Escribe nombre usuario" onChange={e => setNameFriend(e.target.value)} />
                        <button type='submit' className='ml-4 bg-greenPrimary px-3 rounded-lg ' >Enviar</button>
                    </form>
                    <form className='w-2/4 flex justify-center' onSubmit={SubmitMessage}>
                        <input type='text' className=' rounded-lg bg-white px-5 py-1 cursor-pointer' placeholder="Escribe un mensaje" onChange={e => setMessage(e.target.value)} value={message}/>
                        <button type='submit' className='ml-4 bg-greenPrimary px-3 rounded-lg'>Enviar</button>
                    </form> */}

                </div>
            </div>
        </div>
        <div className='w-auto'>
          <Friends/>
        </div>
    </div>
  )
}

export default MessageContainer
















         