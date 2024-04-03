import PropTypes from "prop-types";
import style from "../components/styles/friends.module.css";


export default function FriendList(friends){
    console.log(friends);
    
    return(
        <>
            <ul lassName={style.friendList}>
                {friends.friends.map(friend => (
                    <li key={friend.id} className={style.item}>
                        <span className={friend.isOnline ? style.online : style.offline}></span>
                        <img src={friend.avatar} className={style.avatar} alt="avatar" width="48"/>
                        <p className={style.name}>{friend.name}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}


FriendList.propTypes = {
    
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}


