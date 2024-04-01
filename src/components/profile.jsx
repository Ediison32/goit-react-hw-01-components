
import style from "../components/styles/profile.module.css";


export default function Profile ({user}){
    const { username, tag, location, avatar,stats}= user;
    console.log(username);
   return(
    /* <h2>{`${user.props.username}`}</h2> */
    
    <div className={style.profile}>
        <div className={style.description}>
            <img src={avatar} alt="User Avatar" className={style.avatar}/> 
            <p className={style.title}>{username}</p>
            <p className={style.info}>@{tag}</p>
            <p className={style.info}>{location}</p>

        </div>
        <ul className={style.stats}>
            <li>
                <span>Followers</span>
                <span>{stats.followers}</span>
            </li>
            <li>
                <span>Views</span>
                <span>{stats.views}</span>
            </li>
            <li>
                <span>Likes</span>
                <span>{stats.likes}</span>
            </li>
        </ul>
    </div>
    
   )
}

