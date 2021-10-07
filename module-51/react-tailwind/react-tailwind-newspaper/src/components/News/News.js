import React from 'react';

const News = (props) => {
    const { title, url, description, urlToImage } = props.news
    return (
        <div className="box-border h-96 w-80 p-4 border-4 ">
            <img className="w-full h-28" src={urlToImage} alt="" />
            <h3 className="text-2xl">{title.slice(0, 30)}</h3>
            <p className="text-xl">{description ? description.slice(0, 70) : "no descirpiton"}</p>

            <a className="left-0" href={url}> <button className="border-2 left-0  text-secondary bg-yellow-800 p-2 mt-3 ">See More</button></a>

        </div>
    );
};

export default News;