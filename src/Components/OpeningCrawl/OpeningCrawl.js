import React from 'react';
import logo from '../../images/logo.png';
import { string } from 'prop-types';
import './OpeningCrawl.css';

const OpeningCrawl = ({ title, opening_crawl, release_date }) => {
  return (
    <div>
      <section className="crawl">
        <article className="crawl-text">{ opening_crawl }</article>
        <p className="film-title">{ title }</p>
        <p className="release-date">Released: { release_date }</p>
        <img src={ logo } alt="Star Wars logo"/>
      </section>
    </div>
  )
}

OpeningCrawl.propTypes = {
  title: string.isRequired,
  opening_crawl: string.isRequired,
  release_date: string.isRequired
}

export default OpeningCrawl;