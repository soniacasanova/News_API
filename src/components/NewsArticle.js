import React from 'react';

function NewsArticle({ data }) {
  return (
  <div className="col-4 article p-4">
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <div className="info-source">
      <span className="author">{data.author}</span>
      <br></br>
      <span className="source">{data.source.name} </span>
      <span className="published">{data.publishedAt}</span>
     </div>
  </div>
  );
}

export default NewsArticle;