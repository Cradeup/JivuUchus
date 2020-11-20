import MyPosts from './MyPosts/MyPosts'
import './profile.css'

const Profile = (props) => {
  return (
    <div>
      <img className='profileimg' src='https://img5.goodfon.ru/wallpaper/nbig/3/bc/tropical-flowers-pattern-tekstura-fon-background-pattern-flo.jpg' />
      <MyPosts PostsData={props.profilePage.postsdata} newPostText={props.profilePage.newPostText} dispatch={props.dispatch} />
    </div>
  )
}

export default Profile;