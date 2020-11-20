import './post.css'

const Post = (props) => {
    return (
        <div className='PostList'>
            <div className='Postpar'>
                <div className='post'>
                    <img className='postImg' src={props.src} />
                    <div className='postName'>{props.name}</div>
                </div>
            </div>
            <div>
                <div className="poststyle">
                    {props.message}
                    <img className='postcontentsrc' src={props.contentsrc} />
                </div>
                <div className='poststat'>{props.likes}Like</div>
            </div>
        </div>

    )
}

export default Post;