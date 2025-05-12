import React from 'react';

import {Post} from '../Post/model'
import { transPostsToArchives } from './ctrl'
import type {Archives} from './ctrl'

interface ArchiveProps {
  posts: Post[];
  currentPage: number;
  totalPages: number;
}

const istestEnv = true;

const Archive: React.FC<ArchiveProps> = ({ posts, currentPage, totalPages }) => {

  const [archives, setArchives] = React.useState<Archives[]>([]);

  React.useEffect(() => {
    const archivesData = transPostsToArchives(posts);
    setArchives(archivesData);
  }, [posts]);


  return (
    <div id="archive">
      <ul className="post-list">
        {archives.map(item => (
          <React.Fragment key={item.year}>
            <li className="post-year">
              <h2>{item.year}</h2>
            </li>
            {item.posts.map(post => (
              <li key={post.slug} className="post-item">
                <div className="meta">
                  <time 
                    dateTime={String(post.created_at)} 
                    className="dt-published" 
                    itemProp="datePublished"
                  >
                    {new Date(post.created_at).toLocaleDateString()}
                  </time>
                </div>
                <span>
                  <a className="" href={`\\post\\${post.slug}`}>
                    {post.title}
                  </a>
                </span>
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      
      <div className="pagination">
        <span className="page-number">
          Page {currentPage} of {totalPages}
        </span>
        {currentPage < totalPages && (
          <a href={`/archives/page/${currentPage + 1}/`}>
            <i className="fa-solid fa-angle-right"></i>
          </a>
        )}
      </div>
    </div>
  );
};

const ArchivesPage: React.FC = () => {
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(20);
  React.useEffect(() => {
    if(!istestEnv){
      fetch('/api/archives')
      .then(response => response.json())
      .then(data => {
        setPosts(data.posts);
        setCurrentPage(data.currentPage);
        setTotalPages(data.totalPages);
      });
    } else {
      const mockPosts: Post[] = Array.from({ length: 10 }, (_, index) => {
        const currentDate = new Date();
        if (index > 0 && index % 4 === 0) {
          currentDate.setMonth(currentDate.getMonth() + 12);
      }
        return {
        id: index + 1,
        title: `Post Title ${index + 1}`,
        content: `This is the content of post ${index + 1}. It can be a long description about the post.`,
        slug: `post-slug-${index + 1}`,
        created_at: new Date(currentDate),
        updated_at: new Date(currentDate),
        deleted_at: null,
    }});
      setPosts(mockPosts);
      setCurrentPage(1);
      setTotalPages(20);
    }
  }, [])
  return (
  <Archive  
    posts={posts}
    currentPage={currentPage}
    totalPages={totalPages}
  />
  );
};

export default ArchivesPage;
