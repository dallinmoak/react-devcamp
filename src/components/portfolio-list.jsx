import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { portfolio } from '../../static/variables.js';
import PortfolioListItem from './portfolio-list-item.jsx';

export default function PortfolioList(){
  const [ portfolioList, setPortfolioList ] = useState([]);
  const [ errorMsg, setErrorMsg ] = useState('');

  function getPortfolioList() {
    const base = axios.create({baseURL: portfolio.baseURL});
    base.get( portfolio.listPath, { withCredentials: true })
    .then(res => {
      let pList = eval('res.' + portfolio.listResponse);
      setPortfolioList(pList);
    })
    .catch(e => {
      console.error(e);
      setErrorMsg("error loading portfolio list: " + e)
    })
  }

  function printPortfolioList(){
    if(portfolioList){
      return portfolioList.map( item => {
        return(<PortfolioListItem key={item.id} item={item}/>)
      })
    }
  }
  
  useEffect(() => {
    getPortfolioList();
  })

  return (
    <div className="portfolio-list-container">
      {errorMsg? <div className='error'>{errorMsg}</div> : null}
      <div className="portfolio-list">
        {printPortfolioList()}
      </div>
    </div>
  );
}