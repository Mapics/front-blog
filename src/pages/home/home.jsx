import React, { useEffect, useState } from 'react';
import './home.scss';
import axios from 'axios';

import Article from '../../components/article/article';

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const recup = async () => {
    try {
      const response = await axios.get('http://localhost:8000/articles');
      setArticles(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    recup();
  }, [])

  return (
    <main className="home">
        <h2 className='titleHome'>Home</h2>
        <div className="articles">
          {loading ? (
              <p>Chargement...</p>
            ) : (
              articles.map((article) => (
                <Article title={article.title} author={article.author} content={article.content} date={article.date} />
              ))
          )}
        </div>
    </main>
  )
}
