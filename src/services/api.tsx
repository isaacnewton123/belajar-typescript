import axios, { AxiosError } from 'axios'
import type { AuthPost, AuthResponse, Comments, Feed, FormPost, Search, UpdateProfile, UserData, UserProfile, Comment } from './types';

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
        const response = await apiClient.put<UserProfile>('/users/profile', formData)
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
    unfollowUser: async (userId: string): Promise<void> => {
        await apiClient.delete(`/users/${userId}/follow`)
    }
}

export const postAPI = {
    createPost: async (formData: FormPost): Promise<AuthPost> => {
        const response = await apiClient.post<AuthPost>('/posts', formData)
        return response.data
    },
    getAllPost: async (pages = 1, limit = 10): Promise<AuthPost> => {
        const response = await apiClient.get<AuthPost>(`/posts?page=${pages}&limit=${limit}`)
        return response.data
    },
    getPost: async (postId: string): Promise<AuthPost> => {
        const response = await apiClient.get<AuthPost>(`/posts/${postId}`)
        return response.data
    },
    deletePost: async (postId: string): Promise<void> => {
        await apiClient.delete(`/posts/${postId}`)

    },
    likePost: async (postId: string): Promise<AuthPost> => {
        const response = await apiClient.post<AuthPost>(`/posts/${postId}/like`)
        return response.data
    },
    unlikePost: async (postId: string): Promise<void> => {
        await apiClient.delete(`/posts/${postId}/like`)
    }
}

export const commentAPI = {
    createComment: async (postId: string, content: string): Promise<Comment> => {
        const response = await apiClient.post<Comment>(`/posts/${postId}/comments`, content)
        return response.data
    },
    getComment: async (postId: string): Promise<Comments> => {
        const response = await apiClient.get<Comments>(`/posts/${postId}/comments`)
        return response.data
    },
    deleteComment: async (commentId: string): Promise<void> => {
        await apiClient.delete(`/posts/${commentId}`)
    }
}

export const searchAPI = {
    searchUser: async (query: string): Promise<Search> => {
        const response = await apiClient.get<Search>(`/search/users?q=${query}`)
        return response.data
    }
}

export const feedAPI = {
    getFeed: async (page = 1, limit = 10): Promise<Feed> => {
        const response = await apiClient.get<Feed>(`/feed?page=${page}&limit=${limit}`)
        return response.data
    }
}

export default apiClient;