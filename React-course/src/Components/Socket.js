import React, {useState, useEffect} from 'react';


const Sockets = ()=>{
    const socket = new WebSocket('ws://localhost:8000/ws/some_url/');
    const [socketValue, setSocket]=useState();

/*    socket.onmessage= function(event){
        var data =JSON.parse(event.data)
        //console.log(data)
        setSocket(data)
        console.log(socketValue)
        console.log(data)
    }
    */
    socket.onmessage= (event)=>{
        var data =JSON.parse(event.data)
        //console.log(data)
        setSocket(data)
        console.log(socketValue)
        console.log(data)
    }



    return(
        <div style={{margin:'10px auto'}}>
            <p>Valor del socket: {socketValue}</p>

        </div>
    );
}
export default Sockets; 
