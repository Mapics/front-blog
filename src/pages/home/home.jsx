import React, { useEffect, useState } from "react";
import "./home.scss";
import axios from "axios";

import Article from "../../components/article/article";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const recup = async () => {
    try {
      const response = await axios.get("http://localhost:8000/articles");
      setArticles(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    recup();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <main className="home">
      <div className="titleHome">
        <h2>Articles</h2>
        <input
          type="search"
          name="search"
          className="search"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Rechercher un article"
        />
      </div>
      <div className="articles">
        {loading ? (
          <p>Chargement...</p>
        ) : (
          articles.map((article) => (
            <Article
              key={article.id}
              title={article.title}
              author={article.author}
              content={article.content}
              date={article.created_at}
            />
          ))
        )}
      </div>
    </main>
  );
}
