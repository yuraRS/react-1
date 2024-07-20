import styles from './Users.module.scss';
import userPhotos from '../../assets/images/user.jpg';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { followApi } from '../../api/api';


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
                        <NavLink to={`/profile/${u.id}`}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhotos} alt="avatar" />
                                </NavLink>
                            </div>
                            <div>
                                {
                                    u.followed
                                        ? <button disabled={props.followingInProgress.some(id => id == u.id)} onClick={() => { 
                                            // props.toggleFollowingInProgress(true, u.id)
                                            // followApi.followDelete(u.id)
                                            // .then((data) => {
                                            //     props.toggleFollowingInProgress(false, u.id)
                                            //     props.unfollow(u.id); 
                                            // });
                                            props.unfollow(u.id)
                                        
                                        }} className={styles.button} >Unfollow</button>



                                        : <button disabled={props.followingInProgress.some(id => id == u.id)} onClick={() => { 
                                            // props.toggleFollowingInProgress(true, u.id)
                                            // followApi.followPost(u.id)
                                            // .then((data) => {
                                            //     props.toggleFollowingInProgress(false, u.id)
                                            //     props.follow(u.id);
                                            // });
                                            props.follow(u.id);
                                        
                                        }} className={styles.button} >Follow</button>

                                }

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