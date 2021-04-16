import React, { Component } from 'react';
import axios from 'axios';

import { portfolio } from '../../static/variables.js';
let [ baseURL, listPath, listResponse ] = 
[portfolio.baseURL, portfolio.listPath, portfolio.listResponse];

export default class PortfolioList extends Component {
  constructor(){
    super();
    this.state = {
      portfolioList: []
    }
    this.getPortfolioList = this.getPortfolioList.bind(this);
  }

  getPortfolioList() {
    axios.get( baseURL + listPath, { withCredentials: true })
    .then(res => {
      let pList = eval('res.' + listResponse);
      this.setState({
        portfolioList: pList
      })    
    })
  }

  printPortfolioList(){
    let pList = this.state.portfolioList;
    if(pList){
      return pList.map( item => {
        return(<div key={item.id}>{item.name}</div>)
      })
    }
  }

  componentDidMount(){
    this.getPortfolioList();
  }
  
  render() {
    return(
      <div>
        {this.printPortfolioList()}
      </div>
    );
  }
}