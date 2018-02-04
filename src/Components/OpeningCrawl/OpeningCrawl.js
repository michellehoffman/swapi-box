import React from 'react';
import './OpeningCrawl.css';
import logo from '../../images/logo.png';


const OpeningCrawl = ({ title, opening_crawl, release_date }) => {
  return (
    <div>
      <section className="crawl">
        <article className="crawl-text">{ opening_crawl }</article>
        <p className="film-title">{ title }</p>
        <p className="release-date">Released: { release_date }</p>
        <img src={logo} alt="Star Wars logo"/>
      </section>
    </div>
  )
}

export default OpeningCrawl;