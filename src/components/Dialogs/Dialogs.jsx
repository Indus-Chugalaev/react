import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogsItem from "./DialogItem/DialogsItem";

const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs.map(dialog => <DialogsItem name={dialog.name} id={dialog.id}/>);
    let messageElements = props.state.messages.map(message => <Message message={message.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
}

export default Dialogs;