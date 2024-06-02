import styles from './Users.module.scss';
import userPhotos from '../../assets/images/user.jpg';


let Users = (props) => {

    let pagesCount = props.totalUsersCount / props.pageSize;

    let pages = [];

    for(let i = 1; i <= pagesCount; i++) {
        i <= 9 && pages.push(i);
    };

    return (
        <div>
            <div>
                {
                    pages.map(p => {
                        return <span className={p === props.currentPage && styles.selected}
                                onClick={(e) => {props.onPagesChanged(p)}} >{p}</span>
                    })
                }
            </div>
        {
            props.users.map(u => {
                return (
                    <div key={u.id} className={styles.users}>
                    <div className={styles.user}>
                        <div className={styles.avatar}>
                            <img src={u.photos.small != null ? u.photos.small : userPhotos} alt="avatar" />
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => {props.follow(u.id)}} className={styles.button} >Follow</button> 
                                        : <button onClick={() => {props.unfollow(u.id)}} className={styles.button} >Unfollow</button>}
                        </div>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.info}>
                            <div className={styles.name}>{u.name}</div>
                            <div className={styles.status}>{u.status}</div>
                        </div>
                        <div className={styles.location}>
                            <div className={styles.country}>{/*u.location.country*/}</div>
                            <div className={styles.city}>{/*u.location.city*/}</div>
                        </div>
                    </div>
                </div>
                )
            })
        }
    </div>
    )
};


export default Users;