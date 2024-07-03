import React, { useEffect, useState } from "react";

const Chats = ({socket, username, room}) => {
    const[currentMessage , setCurrentMessage] = useState('');
    const [messageList, setMessageList]= useState('');
    
    const sendMessage= async()=>{
        const messageData ={
            room:room,
            arthur:username,
            message: currentMessage,
            time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
        };

        await socket.emit("send_message" , messageData)
    }


    // useEffect(()=>{

    //     socket.on("receive_message" , (data)=>{
    //         console.log(data);
    //     })

    // },[socket]);

    useEffect(()=>{
        socket.off("receive_message").on("receive_message",(data)=>{
            console.log(data);
        });
    },[socket])


  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Live chat</p>
      </div>
      <div className="chat-body"></div>
      <div className="chat-footer">
        <input type="text" placeholder="hey...." onChange={(e)=>setCurrentMessage(e.target.value)} />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
};

export default Chats;
