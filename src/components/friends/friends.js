import FriendElement from "./friendelement";
import './friends.css'


const FriendList = (props) => {
    let friendelement = props.state.friends
    .map(friendel => <FriendElement src={friendel.src} name={friendel.name}/>)
    return (
        <div className='frinedslist'>
            {friendelement}
        </div>
    )
}

export default FriendList;