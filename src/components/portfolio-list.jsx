import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { portfolio } from '../../static/variables.js';
let [ baseURL, listPath, listResponse ] = 
[portfolio.baseURL, portfolio.listPath, portfolio.listResponse];

export default function PortfolioList(){
  const [ portfolioList, setPortfolioList ] = useState([]);

  function getPortfolioList() {
    axios.get( baseURL + listPath, { withCredentials: true })
    .then(res => {
      let pList = eval('res.' + listResponse);
      setPortfolioList(pList);
    })
  }

  function printPortfolioList(){
    let pList = portfolioList;
    if(pList){
      return pList.map( item => {
        return(<div key={item.id}>{item.name}</div>)
      })
    }
  }
  
  useEffect(() => {
    getPortfolioList();
  })

  return (
    <div>
      {printPortfolioList()}
    </div>
  );
}