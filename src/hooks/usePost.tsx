import { postAPI } from "@/services/api";
import { PostContext, usePostContext } from "@/contexts/posts/usePostContext";
import { useNavigate } from "react-router-dom";
import type { FormPost } from "@/services/types";
import { toast } from "react-toastify";

export const usePost = () => {
    const { posts, setPosts, setLoading, setHasMore, fetchPost } = usePostContext()
    const navigate = useNavigate()

    const createPost = async (formData: FormPost) => {
        setLoading(true)
        try {
            await postAPI.createPost(formData);
            toast.success('Post created successfully!')
            fetchPost(1, 10, true)
        } catch (error) {
            console.log('Cannot Create Post ', error)
            toast.error('Cannot Create Post , Please Try again later')
        } finally {
            setLoading(false)
        }
    }

    const deletePost = async (postId: string) => {
        setLoading(true)
        try {
            await postAPI.deletePost(postId)
            const del = posts.filter((a) => a.id !== postId)
            setPosts(del)
            toast.success('Success Delete Post')
        } catch (error) {
            console.error('cannot Delete Post', error)
            toast.error('Cannot Delete Post , Please Try Again Later')
        } finally {
            setLoading(false)
        }
    }

    const likePost = async (postId: string) => {
        try {
            await postAPI.likePost(postId)
            const updatePost = posts.map((post) => {
                if (post.id !== postId) {
                    return post;
                }

                return { ...post, isLiked: !post.isLiked }

            })
            setPosts(updatePost)
        } catch (error) {
            console.error('cannot like post', error)
            toast.error('cannot like post , please try again later')
        }
    }
}