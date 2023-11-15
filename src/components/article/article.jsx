import React from "react";
import "./article.scss";

export default function Article(props) {
    const date = new Date(props.date);

    const options = {
        hour: "numeric",
        minute: "numeric",
        day: "numeric",
        month: "short",
        year: "numeric",
    };

    const formattedDate = date.toLocaleDateString("fr-FR", options);

    return (
        <article key={props.id}>
            <div className="top">
                <img src="https://img.icons8.com/?size=512&id=z-JBA_KtSkxG&format=png" alt="avatar" />
                <div className="test">
                    <h2 className="title">{props.title}</h2>
                    <p className="author">@{props.author}</p>
                </div>
            </div>
            <p className="content">{props.content}</p>
            <p className="date">{formattedDate}</p>
        </article>
    );
}
