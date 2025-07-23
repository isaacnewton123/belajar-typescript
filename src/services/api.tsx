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
    (respose) => {
        return respose
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


interface AuthResponse {
    token: string;
}


export const authApi = {

}


export const register = async (userData: UserData) => {
    const response = await apiClient.post('/auth/register', userData)
    return response
}


export const login = async (credential: Credential): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>('/auth/login', credential)
    if (response.data.token) {
        localStorage.setItem('token', response.data.token)
    }
    return response.data
}

