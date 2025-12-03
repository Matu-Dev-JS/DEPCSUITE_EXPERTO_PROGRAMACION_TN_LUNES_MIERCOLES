import React, { useEffect, useState } from 'react'
import { getPosts } from '../../services/postServices'
import usePosts from '../../hooks/usePosts'



export default function PostList() {
    const {loadingPosts, posts} = usePosts()

    if (loadingPosts) {
        return (
            <span>Cargando posteos</span>
        )
    }

    return (
        <div>
            {
                posts.map(
                    (post) => {
                        return (
                            <div key={post.id}>
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                                <hr/>
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}

