import React from "react";
interface DataInfo {
    Title: string;
    Description: string;
    Image: string;
    Author: string;
    Category: string;
    Date: string;
    Link: string;
}

const NewsCard: React.FC <DataInfo> = ({Link, Date, Category, Author, Image, Description, Title})  => {
    return (
        <div>
                <h2>{Title}</h2>
                <h2>{Date}</h2>
                <h2>{Description}</h2>
                <img alt="Image Not Found" src={Image}></img>
                <h2>{Link}</h2>
                <h2>{Author}</h2>
                <h2>{Category}</h2>
        </div>
    )

}
export default NewsCard;