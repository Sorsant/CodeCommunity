import React from "react";
//import SmallUser from "../SmallUser/smallUser";
import { communities } from "../Community/CarpetaInfoProvisional/infoCommunities";
//import posteos from "../../assets/infoHomePost";
import { useParams } from "react-router-dom";
//import { useState } from "react";

const DetailCommunity = ({name, description, language, image, created}) => {

    //const [ communy, setCommuny ] = useState <Community | undefined> (undefined);

    const communi = communities.filter((community) => community.name === nameId);

    return (
        <div>
            {
               
            }
        </div>
    )
}

export default DetailCommunity;