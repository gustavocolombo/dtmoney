import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

createServer({

  models:{
    transaction: Model
  },

  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id: 1,
          title: 'Freelance de site',
          type: 'deposit',
          category: 'dev',
          amount: 6000,
          date: new Date()
        },
        {
          id: 2,
          title: 'Contas da casa',
          type: 'withdraw',
          category: 'contas da casa',
          amount: 100,
          date: new Date()
        }
      ]
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', ()=>{
      return this.schema.all('transaction')
    })
    this.post('/transactions', (schema, request)=>{
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
