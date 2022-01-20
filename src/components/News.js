import React, { useContext } from 'react';
import { NewsContext } from '../NewsContext';
import NewsArticle from './NewsArticle';

function News(props) {
    const {data} = useContext(NewsContext);

  return (
  <div className="container p-3">
      <div className="row all-articles">
      {data
      ? data.articles.map((news)=> (
        <NewsArticle data={news} key={news.url} />
      ))
    : 'Loading'}
  </div>
  </div>
  );
}

export default News;
