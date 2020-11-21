const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogsdata: [
        { count: 1, dialogname: 'кореш' },
        { count: 2, dialogname: 'Jeka' },
        { count: 3, dialogname: 'Koresh' },
        { count: 4, dialogname: 'Vrotan' },
    ],

    messagedata: [
        { message: 'кореш пососи я учу реакт' },
        { message: 'Oh, hi!' },
        { message: 'How are you' },
        { message: 'I\'m fine, u?' },
    ],

    newmessagetext: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type){
    case UPDATE_NEW_MESSAGE_TEXT:
        state.newmessagetext = action.messageText
        return state;
    case SEND_MESSAGE:
        let newMessage = {
            message: state.newmessagetext,
        };
        state.messagedata.push(newMessage)
        state.newmessagetext = '';
        return state;
        default: 
        return state;
    }
}

export const sendMessageCreator = () => {
    return {
        type: 'SEND-MESSAGE'
    }
}
export const updateNewMessageTextCreator = (text) => {

    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT', messageText: text
    }
}

export default dialogsReducer;