import { postAPI } from "@/services/api";
import { usePostContext } from "@/contexts/posts/usePostContext";
import type { FormPost } from "@/services/types";
import { toast } from "react-toastify";

export const usePost = () => {
    const { posts, setPosts, setLoading, fetchPost, setSinglePost } = usePostContext()

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
            const del = posts.filter((a) => a._id !== postId)
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
                if (post._id !== postId) {
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

    const unlikePost = async (postId: string) => {
        try {
            await postAPI.unlikePost(postId)
            const updatePost = posts.map((post) => {
                if (post._id !== postId) {
                    return post
                }

                return { ...post, isLiked: !post.isLiked }
            })

            setPosts(updatePost)
        } catch (error) {
            console.error('cannot unlike post', error)
            toast.error('cannot unLike Post, please try again later')
        }
    }

    const getPost = async (postId: string) => {
        setLoading(true);
        try {
            await postAPI.getPost(postId);
            const findPost = posts.find((post) => post._id === postId)
            if (findPost) {
                setSinglePost(findPost)
            } else {
                console.error('A post with that ID was not found in the local state.')
                toast.error('Post not found.')
                setSinglePost(null)
            }
        } catch (error) {
            console.error('cannot get post', error)
            toast.error('cannot get post , please try again later')
        } finally {
            setLoading(false)
        }
    }

    return {
        createPost,
        deletePost,
        getPost,
        likePost,
        unlikePost
    }
}