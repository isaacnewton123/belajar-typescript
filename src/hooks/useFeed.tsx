import { useFeedsContext } from "@/contexts/feed/useFeedContext";
import { feedAPI } from "@/services/api";
import { useLoadingContext } from "@/contexts/useLoadingContext";
import { useCallback } from "react";

export const useFeed = () => {
    const { setFeeds } = useFeedsContext()
    const { setLoading } = useLoadingContext()

    const getFeeds = useCallback(async (page = 1, limit = 10, reset = false) => {
        setLoading(true)
        try {
            const response = await feedAPI.getFeed(page, limit)
            if (reset) {
                setFeeds(response)
            } else {
                setFeeds((prev) => {
                    if (!prev) return null

                    return {
                        posts: [...prev.posts, ...response.posts],
                        hasMore: response.hasMore,
                        totalPosts: response.totalPosts
                    }
                })
            }
        } catch (error) {
            console.error('cannot get feed', error)
        } finally {
            setLoading(false)
        }
    }, [setLoading, setFeeds])

    return {
        getFeeds
    }
}