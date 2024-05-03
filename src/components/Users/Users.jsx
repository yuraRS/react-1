import styles from './Users.module.scss';
    

let Users = (props) => {

    if(props.users.length === 0) {
        props.setUsers(
            [
                {id: 1, followed: true, userUrl: 'https://mighty.tools/mockmind-api/content/human/78.jpg', foolName: 'Yura', status: 'a am boss', location: {country: 'Ukraine', city: 'Lviv'}},
                {id: 2, followed: false, userUrl: 'https://mighty.tools/mockmind-api/content/human/78.jpg', foolName: 'Ira', status: 'a am boss', location: {country: 'USA', city: 'Chicago'}},
                {id: 3, followed: false, userUrl: 'https://mighty.tools/mockmind-api/content/human/78.jpg', foolName: 'Ola', status: 'a am boss', location: {country: 'Litva', city: 'Vilnus'}},
            ]
        )
    }

    return (
        <div>
            {
                props.users.map(u => {
                    return (
                        <div className={styles.users}>
                        <div className={styles.user}>
                            <div className={styles.avatar}>
                                <img src={u.userUrl} alt="avatar" />
                            </div>
                            <div>
                                {u.followed ? <button onClick={() => {props.follow(u.id)}} className={styles.button} >Follow</button> 
                                            : <button onClick={() => {props.unfollow(u.id)}} className={styles.button} >Unfollow</button>}
                            </div>
                        </div>
                        <div className={styles.body}>
                            <div className={styles.info}>
                                <div className={styles.name}>{u.foolName}</div>
                                <div className={styles.status}>{u.status}</div>
                            </div>
                            <div className={styles.location}>
                                <div className={styles.country}>{u.location.country}</div>
                                <div className={styles.city}>{u.location.city}</div>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    );
};

export default Users;
