import React from 'react';
import {messageType} from "redux/dialogs-reducer";
import styled, {StyleSheetManager} from "styled-components";
import {CheckOutlined} from "@ant-design/icons";
import {useAppSelector} from "common/hooks/selectors";
import {selectId} from "common/utils/auth-selectors";
import {selectActiveUserId, selectMessages} from "common/utils/dialogs-selectors";
import {Loader} from "common/components/loader/Loader";
import {AddMessage} from "common/components/dialogs/dialogs_components/AddMessage";


export const MessagesList = () => {

    console.log('messageList is render')

    const userIdIsActive = useAppSelector(selectActiveUserId)
    const authId = useAppSelector(selectId)
    const dialogsMessages = useAppSelector(selectMessages)

    if (!dialogsMessages[userIdIsActive!]) {
        return <Loader/>
    } else
        return (
            <>
            <StyleSheetManager shouldForwardProp={(prop) => prop !== 'senderId'}>
                <MessageWrapper >
                    {dialogsMessages[userIdIsActive!].map((message: messageType) => {

                        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                        const addedAt = new Date(message.addedAt);
                        const hours = addedAt.getHours();
                        let minutes = addedAt.getMinutes();
                        const newDate = new Date()

                        if (minutes < 10) {
                            minutes = Number(`0${minutes}`);
                        }
                        const formattedDate = `${hours.toString()}:${minutes.toString().padStart(2, '0')}`;

                        return (

                            <MessageInnerWrapper key={message.id}>
                                <Message authid={authId} senderid={message.senderId}>
                                    {message.body}
                                </Message>
                                <ViewWrapper>
                                    <>
                                        {newDate.toDateString() !== addedAt.toDateString()
                                            ? daysOfWeek[addedAt.getDay()]
                                            : formattedDate}
                                        {message.viewed && <CheckOutlined rev={''}/>}
                                    </>
                                </ViewWrapper>
                            </MessageInnerWrapper>
                        )
                    })}

                </MessageWrapper>
            </StyleSheetManager>
            </>
        )
};

const Message = styled.span<{ authid: number | null, senderid: number }>`
  background-color: ${props => props.authid === props.senderid ? '#38438c' : '#494957'};
  border-radius: ${props => props.authid === props.senderid ? '7px 7px 2px 7px' : '7px 7px 7px 2px'};
  width: max-content;
  max-width: 450px;
  height: max-content;
  padding: 10px;
  margin: 5px;
  margin-bottom: 10px;
  font-size: 14px;
  overflow: hidden;
`

const MessageInnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  margin-right: 5px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.11);
`

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const ViewWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  justify-items: end;
  align-items: end;
  height: 10px;
  font-size: 10px;
  margin-bottom: 10px;
  gap: 10px;
  color: grey;
  margin-right: 5px;
`