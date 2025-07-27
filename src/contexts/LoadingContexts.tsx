import { useState } from "react";
import type { ProviderProps } from './types'
import Loading from "@/components/ui/loading/Loading";
import { LoadingContext } from "./useLoadingContext";

export const LoadingProvider = ({ children }: ProviderProps) => {
    const [loading, setLoading] = useState(false)

    if (loading === true) {
        return (
            <Loading />
        )
    }

    const value = {
        loading,
        setLoading,
    }

    return <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
}