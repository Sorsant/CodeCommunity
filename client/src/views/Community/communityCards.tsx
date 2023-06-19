import React from "react";
import CommunityCard from "./communityCard";
import { communities } from "./CarpetaInfoProvisional/infoCommunities";
import styles from "./communityCard.module.css";

const CommunityCards: React.FC = () : JSX.Element => {

    return (
        <div className={styles.cards}>
            {
                communities?.map((community) => {
                    return(
                        <div key={community.name} className={styles.div}>
                            <CommunityCard 
                            name={community.name}
                            description={community.description}
                            language={community.language}
                            image={community.image}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CommunityCards;