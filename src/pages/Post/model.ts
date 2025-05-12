interface Post {
    id: number;
    title: string;
    content: string;
    slug: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
}

interface Posts {
    posts: Post[];
    total: number;
}

export type { Post, Posts };