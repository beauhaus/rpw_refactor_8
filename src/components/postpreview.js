import React from 'react';
import { Link } from 'gatsby'

const PostPreview = ({ post }) => {
    return (
        <article>
            <h1>something</h1>
            <h2>{post.title}</h2>
            <h3>{post.excerpt}</h3>
            <Link to={post.slug}>read more</Link>
        </article>
    )
}

export default PostPreview