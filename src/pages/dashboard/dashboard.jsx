import React, { useEffect, useState } from 'react'
import './dashboard.scss'

import axios from 'axios'

import Article from '../../components/article/article'

export default function Dashboard() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const recup = async () => {
    try {
      const response = await axios.get('http://localhost:8000/articles/1');
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

  const deleteArticle = async (id) => {
    await axios.delete('http://localhost:8000/articles/' + id)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
    recup();
  }

  const editArticle = async (id) => {
    await axios.put('http://localhost:8000/articles/' + id)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
    recup();
  }

  return (
    <main className="dashboard">
        <h2 className='titleDashboard'>Dashboard</h2>
        <div className="articles">
            {loading ? (
                <p>Chargement...</p>
              ) : (
                articles.map((article) => (
                  <Article key={article.id} title={article.title} author={article.author} content={article.content} date={article.created_at} />
                ))
            )}        
        </div>
    </main>
  )
}
