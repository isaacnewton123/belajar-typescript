import axios, { AxiosError } from 'axios'
import type { AuthResponse, Comments, Feeds, FormPost, Search, UpdateProfile, UserData, Comment, Credential, UserProfile, Post, Posts, User } from './types';

// Base Url
const baseURL = import.meta.env.VITE_API_URL

const apiClient = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-type': 'application/json',
    },
});

// insert a token into every api call
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
            window.location.href = "/login";
        }
        return Promise.reject(error)
    }
)

// auth api function collection

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

// user api function collection

export const userApi = {
    getProfile: async (): Promise<User> => {
        const response = await apiClient.get<User>('/users/profile')
        return response.data
    },
    updateProfile: async (formData: FormData): Promise<UpdateProfile> => {
        const response = await apiClient.put<UpdateProfile>('/users/profile', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
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

// post api function collection

export const postAPI = {
    createPost: async (formData: FormPost): Promise<Post> => {
        const response = await apiClient.post<Post>('/posts', formData)
        return response.data
    },
    getAllPost: async (pages = 1, limit = 10): Promise<Posts> => {
        const response = await apiClient.get<Posts>(`/posts?page=${pages}&limit=${limit}`)
        return response.data
    },
    getPost: async (postId: string): Promise<Post> => {
        const response = await apiClient.get<Post>(`/posts/${postId}`)
        return response.data
    },
    deletePost: async (postId: string): Promise<void> => {
        await apiClient.delete(`/posts/${postId}`)
    },
    likePost: async (postId: string): Promise<Post> => {
        const response = await apiClient.post<Post>(`/posts/${postId}/like`)
        return response.data
    },
    unlikePost: async (postId: string): Promise<void> => {
        await apiClient.delete(`/posts/${postId}/like`)
    }
}

// comment api function collection

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

// search api function collection

export const searchAPI = {
    searchUser: async (q: string): Promise<Search> => {
        const response = await apiClient.get<Search>(`/search/users?q=${q}`)
        return response.data
    }
}

// feed api function collection

export const feedAPI = {
    getFeed: async (page = 1, limit = 10): Promise<Feeds> => {
        const response = await apiClient.get<Feeds>(`/feed?page=${page}&limit=${limit}`)
        return response.data
    }
}

export default apiClient;