import React, {useEffect} from 'react';
import styled from "styled-components";



const wsChanel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

type messagePropsType = {
    userId: number,
    userName: string,
    message: string,
    photo: string
}

export const ChatMessages = () => {

    const [messages, setMessages] = React.useState<messagePropsType[]>([])

    useEffect(() => {
        wsChanel.addEventListener('message', (e) => {
            const newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        })
    }, [])


    return (
        <ChatWrapper>
            samuraiChat
            {messages.map((el,index) => <div key={index}>{el.message}</div>)}
        </ChatWrapper>
    );
};

const ChatWrapper = styled.div`
  flex: 0 0 30%; /* Занимает 30% ширины родительского блока */
  flex-flow: column;
  background-color: #61dafb;
  display: flex;
  justify-items: center;
  align-items: center;
`