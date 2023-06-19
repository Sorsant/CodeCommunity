import React from "react";
import PosteoCard from "../Card/Card";
import { useSelector } from "react-redux";



const PosteoCards: React.FC = (): JSX.Element => {

    const posteos = useSelector((state: any) => state.posts);

    return (
        <div>
            {
                posteos?.map((post: any) => {
                    return (
                        <div key={post.id} >
                            <PosteoCard
                                id={post.id ? post.id : 1}
                                title={post.title ? post.title : ""}
                                description={post.description}
                                image={post.image ? post.image : ""}
                                created={post.created ? post.created : ""}
                            />
                        </div>
                    )
                })
            }
        </div >
    )
}

export default PosteoCards;