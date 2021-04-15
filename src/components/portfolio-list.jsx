import React, { Component } from 'react';
import axios from 'axios';

export default class PortfolioList extends Component {
  constructor(){
    super();
    this.state = {
      portfolioItems: []
    }
    this.getPortfolioList = this.getPortfolioList.bind(this);
  }

  getPortfolioList() {
    axios.get('https://dallinmoak.devcamp.space/portfolio/portfolio_items', { withCredentials: true })
    .then(res => {
      let pItems = res.data.portfolio_items;
      this.setState({
        portfolioItems: pItems
      })    })
  }

  printPortfolioList(){
    let items = this.state.portfolioItems;
    if(items){
      return items.map( item => {
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