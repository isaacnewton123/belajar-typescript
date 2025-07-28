import type { Comments } from "@/services/types";
import type { Dispatch, ReactNode, SetStateAction } from "react";

export interface CommentsProviderProps {
    children: ReactNode;
}

export interface CommentContextType {
    comments: Comments | null;
    setComments: Dispatch<SetStateAction<Comments | null>>;

}