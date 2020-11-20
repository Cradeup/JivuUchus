import './friends.css'

const FriendElement = (props) => {

    return (
        <div className='friendelement'>
            <img className='friendimg' src={props.src}>
            </img>
            <a>{props.name}</a>
        </div>
    )
}

export default FriendElement;