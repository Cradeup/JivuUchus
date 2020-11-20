import './MyPosts.css';
import Post from './post/post';
import React from 'react'
const MyPosts = (props) => {

    let PostElement = props.PostsData
        .map(PostEL => <Post message={PostEL.message} likes={PostEL.likes} name={PostEL.name} src={PostEL.src} contentsrc={PostEL.contentsrc} />)
        let newPostElement = React.createRef();

    let addPost = () => {
        debugger;
        props.dispatch({type: 'ADP-POST'})
        
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST', postText: text})

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