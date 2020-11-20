import { NavLink } from 'react-router-dom';
import ImportantFriendsList from './importantfriends';

import './nav.css';

const Nav = () => {

  return (
    <nav className="navigation">
      <div className='parnavel'>
        <NavLink className='navelement' to='/profile' activeClassName='activenavelement'><div>Моя страница</div></NavLink>
      </div>
      <div className='parnavel'>
        <NavLink className='navelement' to='dialogs' activeClassName='activenavelement' ><div>Сообщения</div></NavLink>
      </div>
      <div className='parnavel'>
        <NavLink className='navelement' to='friends' activeClassName='activenavelement'><div>Друзья</div></NavLink>
      </div>
      <div className='parnavel'>
        <a className='navelement'><div>Аудиозаписи</div></a>
      </div>
      <div className='parnavel'>
        <a className='navelement'><div>Новости</div></a>
      </div>
      <div className='parnavel'>
        <a className='navelement'><div>Видеозаписи</div></a>
      </div>
      <div className='parnavel'>
        <a className='navelement'><div>Друзья</div></a>
      </div>
      <ImportantFriendsList />
    </nav>
  )
}

export default Nav;
