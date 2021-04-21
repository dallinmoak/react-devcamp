import React from 'react';

export default function PortfolioListItem(props){
  return (
    <div className="portfolio-list-item">
    <div className="portfolio-list-item-inner">
      <img className="logo" src={props.item.logo_url} alt={props.item.name + 'logo'}/>
      <h3>{props.item.name}</h3>
      <p>{props.item.description}</p>
    </div>
    </div>
  );
}