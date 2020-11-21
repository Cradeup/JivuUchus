import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        messagesPage: dialogsReducer,
        friendsReducer: friendsReducer
    }
)
let store = createStore(reducers);

export default store;