import { postAPI } from "@/services/api";
import { usePostContext } from "@/contexts/posts/usePostContext";
import type { FormPost } from "@/services/types";
import { toast } from "react-toastify";
import { useLoadingContext } from "@/contexts/useLoadingContext";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useFeedsContext } from "@/contexts/feed/useFeedContext";

export const usePost = () => {
    const { setPosts, setSinglePost } = usePostContext()
    const { setFeeds } = useFeedsContext()

    const { setLoading } = useLoadingContext()

    const navigate = useNavigate()

    const fetchPost = useCallback(async (pages = 1, limit = 10, reset = false) => {
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
    }, [setLoading, setPosts])

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

    const deletePost = useCallback(async (postId: string) => {
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
            navigate('/home')
        } catch (error) {
            console.error('cannot Delete Post', error)
            toast.error('Cannot Delete Post , Please Try Again Later')
        } finally {
            setLoading(false)

        }
    }, [navigate, setLoading, setPosts])

    const likePost = useCallback(async (postId: string) => {
        setPosts((prev) => {
            if (!prev) return null

            const updatePost = prev.posts.map((post) => {
                if (post.id !== postId) {
                    return post
                }

                return {
                    ...post,
                    isLiked: true,
                    likesCount: post.likesCount + 1
                }
            })
            return {
                ...prev,
                posts: updatePost
            }
        })

        setFeeds((prev) => {
            if (!prev) return null

            const updatePost = prev.posts.map((post) => {
                if (post.id !== postId) {
                    return post
                }

                return {
                    ...post,
                    isLiked: true,
                    likesCount: post.likesCount + 1
                }
            })
            return {
                ...prev,
                posts: updatePost
            }
        })

        setSinglePost((prev) => {
            if (!prev) {
                return null
            }

            return {
                ...prev,
                isLiked: true,
                likesCount: prev.likesCount + 1
            }
        })

        try {
            await postAPI.likePost(postId)

        } catch (error) {
            console.error('cannot like post', error)
            toast.error('cannot like post , please try again later')
            setPosts((prev) => {
                if (!prev) return null

                const updatePost = prev.posts.map((post) => {
                    if (post.id !== postId) {
                        return post
                    }

                    return {
                        ...post,
                        isLiked: false,
                        likesCount: post.likesCount - 1
                    }
                })
                return {
                    ...prev,
                    posts: updatePost
                }
            })
            setFeeds((prev) => {
                if (!prev) return null

                const updatePost = prev.posts.map((post) => {
                    if (post.id !== postId) {
                        return post
                    }

                    return {
                        ...post,
                        isLiked: false,
                        likesCount: post.likesCount - 1
                    }
                })
                return {
                    ...prev,
                    posts: updatePost
                }
            })

            setSinglePost((prev) => {
                if (!prev) return null

                return {
                    ...prev,
                    isLiked: false,
                    likesCount: prev.likesCount - 1
                }
            })
        }
    }, [setFeeds, setPosts, setSinglePost])

    const unlikePost = useCallback(async (postId: string) => {
        setPosts((prev) => {
            if (!prev) return null

            const updatePost = prev.posts.map((post) => {
                if (post.id !== postId) {
                    return post
                }

                return {
                    ...post,
                    isLiked: false,
                    likesCount: post.likesCount - 1
                }
            })

            return {
                ...prev,
                posts: updatePost
            }
        })
        setFeeds((prev) => {
            if (!prev) return null

            const updatePost = prev.posts.map((post) => {
                if (post.id !== postId) {
                    return post
                }

                return {
                    ...post,
                    isLiked: false,
                    likesCount: post.likesCount - 1
                }
            })

            return {
                ...prev,
                posts: updatePost
            }
        })

        setSinglePost((prev) => {
            if (!prev) return null

            return {
                ...prev,
                isLiked: false,
                likesCount: prev.likesCount - 1
            }
        })
        try {
            await postAPI.unlikePost(postId)

        } catch (error) {
            console.error('cannot unlike post', error)
            toast.error('cannot unLike Post, please try again later')
            setPosts((prev) => {
                if (!prev) return null

                const updatePost = prev.posts.map((post) => {
                    if (post.id !== postId) {
                        return post
                    }

                    return {
                        ...post,
                        isLiked: true,
                        likesCount: post.likesCount + 1
                    }
                })

                return {
                    ...prev,
                    posts: updatePost
                }
            })
            setFeeds((prev) => {
                if (!prev) return null

                const updatePost = prev.posts.map((post) => {
                    if (post.id !== postId) {
                        return post
                    }

                    return {
                        ...post,
                        isLiked: true,
                        likesCount: post.likesCount + 1
                    }
                })

                return {
                    ...prev,
                    posts: updatePost
                }
            })

            setSinglePost((prev) => {
                if (!prev) return null

                return {
                    ...prev,
                    isLiked: true,
                    likesCount: prev.likesCount + 1
                }
            })

        }
    }, [setFeeds, setPosts, setSinglePost])

    const getPost = useCallback(async (postId: string) => {
        setLoading(true);
        try {
            const singlePost = await postAPI.getPost(postId);
            setSinglePost(singlePost)
        } catch (error) {
            console.error('cannot get post', error)
            toast.error('cannot get post , please try again later')
        } finally {
            setLoading(false)
        }
    }, [setLoading, setSinglePost])

    const revwieSinglePost = useCallback((postId: string) => {
        navigate(`/post/${postId}`)
    }, [navigate])

    return {
        createPost,
        deletePost,
        getPost,
        likePost,
        revwieSinglePost,
        unlikePost,
        fetchPost
    }
}