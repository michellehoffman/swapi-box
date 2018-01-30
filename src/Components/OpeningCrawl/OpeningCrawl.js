import React from 'react';
import './OpeningCrawl.css';

const OpeningCrawl = ({ title, opening_crawl, release_date }) => {
  return (
    <div className="crawl">
      <section>
        <article className="crawl-text">{ opening_crawl }</article>
        <h4 className="film-title">{ title }</h4>
        <h5 className="release-date">{ release_date }</h5>
      </section>
    </div>
  )
}

export default OpeningCrawl;