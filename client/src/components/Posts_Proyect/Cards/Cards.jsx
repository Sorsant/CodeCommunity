import React from "react";
import PosteoCard from "../Card/Card";
import posteos from "../../../assets/infoHomePost";


const PosteoCards = () => {

<<<<<<< HEAD:client/src/components/Posts_Proyect/Cards/Cards.tsx
=======
    const posteos = useSelector((state) => state.posts);

>>>>>>> 364027fc57fcbca82f980e640e695cc7aab24f7f:client/src/components/Posts_Proyect/Cards/Cards.jsx
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