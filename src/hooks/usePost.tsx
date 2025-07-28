import { postAPI } from "@/services/api";
import { usePostContext } from "@/contexts/posts/usePostContext";
import type { FormPost } from "@/services/types";
import { toast } from "react-toastify";
import { useLoadingContext } from "@/contexts/useLoadingContext";
import { useNavigate } from "react-router-dom";

export const usePost = () => {
    const { setPosts, setSinglePost } = usePostContext()

    const { setLoading } = useLoadingContext()
    
    const navigate = useNavigate()

    const fetchPost = async (pages = 1, limit = 10, reset = false) => {
        setLoading(true)

        try {
            const response = await postAPI.getAllPost(pages, limit)
            if (reset) {
                setPosts(response);
            } else {
                setPosts(prev => {

                    if (!prev) return response;

                    return {
                        posts: [...prev.posts, ...response.posts],
                        hasMore: response.hasMore,
                        totalPosts: response.totalPosts
                    };
                });
            }

        } catch (error) {
            console.error("Failed to fetch posts", error)
            toast.error("Failed to fetch posts")
        } finally {
            setLoading(false)
        }
    }

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
            toast.success('Success Delete Post')
            setPosts((prev) => {
                if (!prev) return null;

                const updatedPosts = prev.posts.filter((post) => post.id !== postId);
                return {
                    ...prev,
                    posts: updatedPosts,
                    totalPosts: prev.totalPosts - 1
                }
            })
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
            setPosts((prev) => {
                if (!prev) return null

                const updatePost = prev.posts.map((post) => {
                    if (post.id !== postId) {
                        return post
                    }

                    return {
                        ...post,
                        isLiked: true,
                        likesCount: post.isLiked ? post.likesCount + 1 : post.likesCount -1
                    }
                })
                return {
                    ...prev,
                    posts: updatePost
                }
            })
        } catch (error) {
            console.error('cannot like post', error)
            toast.error('cannot like post , please try again later')
        }
    }

    const unlikePost = async (postId: string) => {
        try {
            await postAPI.unlikePost(postId)
            setPosts((prev) => {
                if (!prev) return null

                const updatePost = prev.posts.map((post) => {
                    if (post.id !== postId) {
                        return post
                    }

                    return {
                        ...post,
                        isLiked: false,
                        likesCount: post.isLiked ? post.likesCount - 1 : post.likesCount + 1
                    }
                })

                return {
                    ...prev,
                    posts: updatePost
                }
            })
        } catch (error) {
            console.error('cannot unlike post', error)
            toast.error('cannot unLike Post, please try again later')
        }
    }

    const getPost = async (postId: string) => {
        setLoading(true);
        setSinglePost(null)
        try {
            const singlePost = await postAPI.getPost(postId);
            setSinglePost(singlePost)
            navigate(`post/${postId}`)
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
        unlikePost,
        fetchPost
    }
}