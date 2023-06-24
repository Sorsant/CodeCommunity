import React from "react";
import PosteoCard from "../Card/Card";
import { useSelector } from "react-redux";


const PosteoCards = () => {

    const posteos = useSelector((state) => state.posts);

    return (
        <div>
            {
                posteos?.map((post) => {
                    return (
                        <div key={post.id} >
                            <PosteoCard
                                id={post.id}
                                title={post.title}
                                description={post.description}
                                image={post.image}
                                created={post.created}
                            />
                        </div>
                    )
                })
            }
        </div >
    )
}

export default PosteoCards;