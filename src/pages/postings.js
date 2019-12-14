import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import usePosts from '../hooks/use-posts'
import PostPreview from '../components/postpreview'

const PostPage = () => {
    const posts = usePosts();

    return (
        <Layout>
            <Link to={`/about`}>Link</Link>
            {posts.map((post) => (
                <PostPreview post={post}/>
            ))}
        </Layout>
    )
}

export default PostPage;