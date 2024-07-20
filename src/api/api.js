import axios from "axios";


let instanceKey = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '719844e4-b798-47aa-8e67-30f6d2e04c63'
    }
});


let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true
});


export let usersApi = {
    getUsers(pageSize, currentPage) {
        return instance.get(`/users?count=${pageSize}&page${currentPage}`)
            .then((response) => {
                return response.data;
            })
    }
};

export let followApi = {
    followPost(userId) {
        return instanceKey.post(`follow/${userId}`, {},)
            .then((response) => {
                return response.data;
            })
    },

    followDelete(userId) {
        return instanceKey.delete(`follow/${userId}`)
            .then((response) => {
                return response.data;
            })
    }
};

export let authApi = {
    authMe() {
        return instance.get('auth/me')
        .then((response) => response.data)

    }
}

export let profileApi = {
    getProfileId(userId) {
        return instance.get(`profile/${userId}`)
            .then((response) => response.data)
    }
}



let instanceTest = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '719844e4-b798-47aa-8e67-30f6d2e04c63'
    }
})


export const usersApiTest = {
    getUsers(pageSize = 2, currentPage = 1) {
        return(
            instanceTest.get(`users?count=${pageSize}&page=${currentPage}`)
                .then((response) => response.data)
        )
    },

    follow(userId) {
        return (
            instanceTest.post(`/follow/${userId} `, {})
            .then((response) => response.data)
        )
    },
    
    unfollow(userId) {
        return (
            instanceTest.delete(`/follow/${userId}`)
            .then((response) => response.data)
        )
    }
};



