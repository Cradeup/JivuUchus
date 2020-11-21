import dialogsReducer from "./dialogs-reducer"
import friendsReducer from "./friends-reducer"
import profileReducer from "./profile-reducer"


let store = {
    _state: {

        profilePage: {
            postsdata: [
                { message: 'Beautiful weather today, isnt it?', likes: '17 ', name: 'Вартан', src: 'https://sun9-26.userapi.com/impf/jxVxBhSAPXneGHZ-Bs3UV8ks3c5lbwdR2QXbQg/FmjMAYNGPtw.jpg?size=1210x643&quality=96&proxy=1&sign=68bb0b26a3f5711c7b4f154320e0deac', contentsrc: 'https://behealthymagazine.ca/wp-content/uploads/IMG_0249-e1552330790161.jpg' },
                { message: 'Created my new profile', likes: '3 ', name: 'Луи', src: 'https://sun9-41.userapi.com/OhUQDZTn2PcEAUvtJAFM2YOWk-kqRtg9ZKY8QA/IqOX0bEq5uQ.jpg', contentsrc: '' },
            ],
            newPostText: 'Hello'
        },


        messagesPage: {
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
        },

        frinedsList: {
            friends: [
                { src: 'https://storage.vsemayki.ru/images/0/1/1222/1222117/previews/people_20_face_mask_front_black_250.jpg', name: 'Вартан' },
                { src: 'https://storage.vsemayki.ru/images/0/1/1222/1222117/previews/people_101_ski_cape_front_white_250.jpg', name: 'Игорь' },
                { src: 'https://storage.vsemayki.ru/images/0/1/1222/1222117/previews/people_2_tie_fullprint_front_white_250.jpg', name: 'Женя' },
            ]
        }

    },
    getState() {
        return this._state;
    },
    _renderEntireTree() {
    },
    Subscribe(observer) {
        this._renderEntireTree = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._renderEntireTree(this._state)


    }
}

export default store;
window.store = store;