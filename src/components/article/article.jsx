import React from "react";
import "./article.scss";

export default function Article(props) {
    return (
        <article>
            <h2 className="title">{props.title}</h2>
            <p className="author">@{props.author}</p>
            <p className="content">{props.content}</p>
            <p className="date">{props.date}</p>
        </article>
    );
}
