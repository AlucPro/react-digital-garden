
import {Post} from '../Post/model'

interface Archives {
    year: number;
    posts: Post[];
}

function transPostsToArchives(posts: Post[]): Archives[] {
    console.log({posts})
    const archives: Archives[] = [];
    for (const post of posts) {
        const year = post.created_at.getFullYear();
        const index = archives.findIndex((archive) => archive.year === year);
        if (index === -1) {
            archives.push({
                year,
                posts: [post],
            });
        } else {
            archives[index].posts.push(post);
        }
    }
    console.log({archives})
    archives.sort((a, b) => (a.year < b.year ? 1 : -1))
    return archives.map((item) => {
        item.posts.sort((a, b) => (a.created_at < b.created_at ? 1 : -1))
        return item
});
}

export {transPostsToArchives}
export type {Archives}