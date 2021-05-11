import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { portfolio } from '../../static/variables.js'
import { internet } from '../../static/internet.svg';

export default function PortfolioItemDetail(){
  const [pItem, setPItem ] = useState({})
  const { id } = useParams();

  function getPortfolioItem(){
    let base = axios.create({baseURL: portfolio.baseURL});
    base.get(portfolio.itemPath(id), { withCredentials: true })
    .then( res => {
      setPItem(eval(`res.${portfolio.itemResponse}`));
    })
    .catch(e => {
      console.error(e);
    })
  }

  function shortenUrl(url) {
    if(url){
      let exp = /^https:\/\/(?:www\.)?([^\/]*)([^\?]*)(.*)$/;
      return exp.exec(url).length > 1 ? exp.exec(url)[1] : '';
    }
  }

  useEffect(() => {
    getPortfolioItem();
  },[])

  return (
    <div className='portfolio-detail-container'>
      <div className='portfolio-detail-header'>
        <img className='portfolio-detail-banner' src={pItem.banner_image_url} alt={`${pItem.name} banner`} />
        <img className='portfolio-detail-logo' src={pItem.logo_url} alt={`${pItem.name} logo`}/>
        <h1 className='portfolio-detail-name'>{pItem.name}</h1>
      </div>
      <p className='portfolio-detail-desc'>{pItem.description}</p>
      <div>
        <img src={internet} alt="" />
        <a className='portfolio-detail-url' href={pItem.url} target="_blank">{shortenUrl(pItem.url)}</a>
      </div>
    </div>
  );
}

// banner_image_url
// description
// id
// logo_url
// name
// position
// thumb_image_url
// url