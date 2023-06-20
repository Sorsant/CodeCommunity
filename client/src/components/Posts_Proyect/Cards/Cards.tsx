import React from "react";
import PosteoCard from "../Card/Card";
import posteos from "../../../assets/infoHomePost";


const PosteoCards: React.FC = (): JSX.Element => {

    return (
        <div>
            {
                posteos?.map((post) => {
                    return (
                        <div key={post.id} >
                            <PosteoCard
                                id={post.id}
                                nickname={post.nickname}
                                user_imagen={post.user_imagen}
                                titulo={post.titulo}
                                description={post.description}
                                imagen={post.imagen}
                                likes={post.likes}
                                createDate={post.createDate}
                                gitHub={post.gitHub}
                            />
                        </div>
                    )
                })
            }
        </div >
    )
}

export default PosteoCards;