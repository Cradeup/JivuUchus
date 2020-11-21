import './MyPosts.css';
import Post from './post/post';
import React from 'react'
import { addPostActionCreator, upadteNewPostActionCreator } from '../../../redux/profile-reducer';

const MyPosts = (props) => {

    let PostElement = props.PostsData
        .map(PostEL => <Post message={PostEL.message} likes={PostEL.likes} name={PostEL.name} src={PostEL.src} contentsrc={PostEL.contentsrc} />)
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = upadteNewPostActionCreator(text);
        props.dispatch(action);

    }

    return (
        <div>
            <h3>Мои записи</h3>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
            <button onClick={addPost}>Отправить</button>

            <div className='MyPosts'>
                {PostElement}
            </div>
        </div>
    )
}

export default MyPosts;