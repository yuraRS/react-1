import axios from 'axios';
import styles from './Users.module.scss';
import userPhotos from '../../assets/images/user.jpg';
import React from 'react';


class Users extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then((response) => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        return (
            <div>
            {
                this.props.users.map(u => {
                    return (
                        <div key={u.id} className={styles.users}>
                        <div className={styles.user}>
                            <div className={styles.avatar}>
                                <img src={u.photos.small != null ? u.photos.small : userPhotos} alt="avatar" />
                            </div>
                            <div>
                                {u.followed ? <button onClick={() => {this.props.follow(u.id)}} className={styles.button} >Follow</button> 
                                            : <button onClick={() => {this.props.unfollow(u.id)}} className={styles.button} >Unfollow</button>}
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
    }


}

export default Users;



