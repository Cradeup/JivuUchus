import './Dialog.css';
import { NavLink } from "react-router-dom";
import '../profile/wrapper-content.css'
import Dialog from './DialogItem/DialogItem';
import Message from './messages/messages';
import React from 'react';

const Dialogs = (props) => {

    let messagesElements = props.state.messagedata
        .map(message => <Message text={message.message} />)

    let dialogsElements = props.state.dialogsdata
        .map(dialog =>
            <Dialog count={dialog.count} name={dialog.dialogname} />
        )

        let newMessageElement = React.createRef();

        let addMessage = () =>{
            let text = newMessageElement.current.value;
            alert (text);
        }
    return (
        <div className='dialogs'>
            <div className='dialogs-items'>
                {dialogsElements}
            </div>
            <div className='messages'>
                {messagesElements}
            </div>
            <div>
                <textarea ref={newMessageElement}></textarea>
                <button onClick={addMessage} >Send message</button>
            </div>
        </div>
    )
}

export default Dialogs;