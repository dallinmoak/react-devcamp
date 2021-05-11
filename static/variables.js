let portfolio = {
  baseURL: 'https://dallinmoak.devcamp.space',
  listPath: '/portfolio/portfolio_items',
  listResponse: 'data.portfolio_items',
  itemPath: (id) =>{
    return `/portfolio/portfolio_items/${id}`;
  },
  itemResponse: 'data.portfolio_item'
};

export {
  portfolio
}