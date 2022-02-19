export interface IPost {
    id: string;
    userId: string;
    images?: string[];
    text?: string;
    createDate?: string;
    likeCount?: string;
    commitCount?: string;
    liked?: boolean
}