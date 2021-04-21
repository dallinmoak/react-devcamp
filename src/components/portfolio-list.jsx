import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { portfolio } from '../../static/variables.js';
let [ baseURL, listPath, listResponse ] = 
[portfolio.baseURL, portfolio.listPath, portfolio.listResponse];

export default function PortfolioList(){
  const [ portfolioList, setPortfolioList ] = useState([]);
  const [ errorMsg, setErrorMsg ] = useState('');

  function getPortfolioList() {
    const base = axios.create({baseURL: baseURL});
    base.get( listPath, { withCredentials: true })
    .then(res => {
      let pList = eval('res.' + listResponse);
      setPortfolioList(pList);
    })
    .catch(e => {
      console.error(e);
      setErrorMsg("error loading portfolio list: " + e)
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
      {errorMsg? <div className='error'>{errorMsg}</div> : null}
      {printPortfolioList()}
    </div>
  );
}