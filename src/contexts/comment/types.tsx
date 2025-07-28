import type { Dispatch, ReactNode, SetStateAction } from "react";

export interface CommentsProviderProps {
    children: ReactNode;
}

interface UserComment {
    id: string;
    username: string;
    fullName: string;
    avatar: string | null;
}

export interface Comment {
    id: string;
    postId: string;
    userId: string;
    content: string;
    createdAt: string;
    user: UserComment;
}

export interface CommentsData {
    comments: Comment[];
}

export interface CommentContextType {
    comments: CommentsData | null;
    setComments: Dispatch<SetStateAction<CommentsData | null>>;

}