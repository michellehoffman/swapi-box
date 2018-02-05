import React from 'react';
import logo from '../../images/logo.png';
import { string } from 'prop-types';
import './OpeningCrawl.css';

const OpeningCrawl = ({ title, openingCrawl, releaseDate }) => {
  return (
    <div>
      <section className="crawl">
        <article className="crawl-text">{ openingCrawl }</article>
        <p className="film-title">{ title }</p>
        <p className="release-date">Released: { releaseDate }</p>
        <img src={ logo } alt="Star Wars logo"/>
      </section>
    </div>
  )
}

OpeningCrawl.propTypes = {
  title: string.isRequired,
  openingCrawl: string,
  releaseDate: string.isRequired
}

export default OpeningCrawl;