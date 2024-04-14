import LogginForm from "./LogginForm";
import UserInfo from "./UserInfo";

const Profile = () => {
    const isLoggedIn=true;
  return (
    <div>
        {isLoggedIn ? <UserInfo/> : <LogginForm/>}
    </div>
  )
}

export default Profile