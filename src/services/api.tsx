import axios, { AxiosError } from 'axios'

const baseURL = process.env.VITE_API_URL

const apiClient = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-type': 'application/json',
    },
});

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
}, (error: AxiosError) => {
    return Promise.reject(error)
})

apiClient.interceptors.response.use(
    (response) => {
        return response
    },
    (error: AxiosError) => {
        if (error.response?.status === 401) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            window.location.href = "/login";
        }
        return Promise.reject(error)
    }
)

interface AuthResponse {
    token: string;
    user: {
        id: string;
        username: string;
        email: string;
        password: string;
        fullName: string;
        bio: string,
        avatar: string | null;
        followersCount: number;
        followingCount: number;
        postsCount: number;
    }
}

interface UserData {
    username: string;
    email: string;
    password: string;
    fullName: string;
}


interface Credential {
    email: string;
    password: string;
}


interface UserProfile {
    id: string;
    username: string;
    fullName: string;
    bio: string;
    avatar: string | null;
    followersCount: number;
    followingCount: number;
    postsCount: number;
    createdAt: string;
    isFollowing: boolean;
}


interface UpdateProfile {
    fullName: string;
    bio: string;
    avatar: string;
}


export const authApi = {
    register: async (userData: UserData): Promise<AuthResponse> => {
        const response = await apiClient.post<AuthResponse>('/auth/register', userData)
        return response.data
    },
    login: async (credential: Credential): Promise<AuthResponse> => {
        const response = await apiClient.post<AuthResponse>('/auth/login', credential)
        return response.data
    }
}

export const userApi = {
    getProfile: async (): Promise<UserProfile> => {
        const response = await apiClient.get<UserProfile>('/users/profile')
        return response.data
    },
    updatePofile: async (formData: UpdateProfile): Promise<UserProfile> => {
        const response = await apiClient.post<UserProfile>('/users/profile', formData)
        return response.data
    },
    searchUser: async (username: string): Promise<UserProfile> => {
        const response = await apiClient.get<UserProfile>(`/users/${username}`)
        return response.data
    },
    followUser: async (userId: string): Promise<UserProfile> => {
        const response = await apiClient.post<UserProfile>(`/users/${userId}/follow`)
        return response.data
    },
    unfollowUser: async (userId: string): Promise<UserProfile> => {
        const response = await apiClient.delete<UserProfile>(`/users/${userId}/follow`)
        return response.data
    }
}

export const postAPI = {
    // TODO: UDAH NGANTUK
}

export const commentAPI = {
    // TODO: UDAH NGANTUK
}

export const searchAPI = {
    // TODO: UDAH NGANTUK
}

export const feedAPI = {
    // TODO: UDAH NGANTUK
}