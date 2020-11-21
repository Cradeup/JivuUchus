import './Dialog.css';
import { NavLink } from "react-router-dom";
import '../profile/wrapper-content.css'
import Dialog from './DialogItem/DialogItem';
import Message from './messages/messages';
import React from 'react';
import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {

    let state = props.store.getState().messagesPage;

    let messagesElements = props.state.messagedata
        .map(message => <Message text={message.message} />)

    let dialogsElements = props.state.dialogsdata
        .map(dialog =>
            <Dialog count={dialog.count} name={dialog.dialogname} />
        )

    let newMessageBody = props.state.newmessagetext;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) => {
        let text = e.target.value
        props.store.dispatch(updateNewMessageTextCreator(text));
    }
    return (
        <div className='dialogs'>
            <div className='dialogs-items'>
                {dialogsElements}
            </div>
            <div className='messages'>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea  value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;