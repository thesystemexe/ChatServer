import io from "socket.io-client";
import "./App.css";
import {  useState } from "react";
const socket = io.connect("http://localhost:3005");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom=()=>{
    if(username!== "" && room!==""){
      socket.emit("join_room" , room);
    }

  }


  return (
    <div className="App">
      <h3>Join a Chat</h3>
      <input
        type="text"
        placeholder="Name..."
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Room...Id"
        onChange={(e) => setRoom(e.target.value)}
      />
      <button onClick={joinRoom}> Join a Room</button>
    </div>
  );
}

export default App;
