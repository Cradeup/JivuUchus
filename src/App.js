import './App.css';
import Header from './components/Header/Header';
import Nav from './components/nav/nav';
import Profile from './components/profile/profile';
import { BrowserRouter, Route } from "react-router-dom";
import Dialogs from './components/Dialogs/Dialogs';
import './components/profile/wrapper-content.css'
import FriendList from './components/friends/friends';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Nav />
        <div className='main'>
          <Route path='/dialogs' render={() => <Dialogs store={props.store} state={props.state.messagesPage} />} />
          <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>} />
          <Route path='/friends' render={() => <FriendList state={props.state.frinedsList} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;