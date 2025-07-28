import { useCommentsContext } from "@/contexts/comment/useCommentContext";
import { commentAPI } from "@/services/api";
import { useLoadingContext } from "@/contexts/useLoadingContext";
import { toast } from "react-toastify";


export const useComment = () => {
    const { setComments } = useCommentsContext()
    const { setLoading } = useLoadingContext()


    const getComments = async (postId: string) => {
        setLoading(true)
        try {
            const response = await commentAPI.getComment(postId)
            setComments(response)
        } catch (error) {
            console.error('cannot get comments', error)
            toast.error('cannot get comments , please try again later')
        } finally {
            setLoading(false)
        }
    }

    const createComment = async (postId: string, content: string) => {
        setLoading(true)
        try {
           await commentAPI.createComment(postId, content)
           toast.success('your comment has ben created')
           getComments(postId) 
        } catch (error) {
            console.error('cannot create comment', error)
            toast.error('cannot create comment , please try again later')
        } finally {
            setLoading(false)
        }
    }

    const deleteComment = async (commentId: string, postId: string) => {
        setLoading(true)
        try {
            await commentAPI.deleteComment(commentId)
            toast.success('your comment has ben delete')
            getComments(postId)
        } catch (error) {
            console.error('cannot delete post ', error)
            toast.error('cannot delete post , please try again later')
        } finally {
            setLoading(false)
        }
    }

    return {
        getComments,
        createComment,
        deleteComment
    }
}