import React, { Component } from 'react';

class StoreCard extends Component {
  render() {
    const { store } = this.props;
    return (
      <div className='store_card'>
        <div className='title'>
          <h3 className='float-right'>{store.shop_name}</h3>
          <div className='votes'>
            <span className={`vote_span float-left green`}>92%</span>
            <p className='float-left'>56 رای</p>
          </div>
        </div>
        <div>
          <h4 className='fa'>{store.persian_name}</h4>
          <h4 className='en'>{store.english_name}</h4>
        </div>
        <div className='purchase'>
          <a href={store.page_url}>
            <span className='purchase_button float-right'>خرید</span>
          </a>
          <h4 className='price float-right'>{store.price}</h4>
          <h4 className='price old'>{store.price_before_offer}</h4>
        </div>

        <style jsx>
          {`
            h3 {
              color: #333;
            }

            h4 {
              color: #666;
            }

            .fa {
              margin: 0 0 2px 0;
              line-height: 1.5;
              font-weight: 200;
            }

            .en {
              color: #999;
              line-height: 1.5;
              margin-top: 2px;
              font-weight: 200;
            }

            p {
              font-size: 12px;
              color: #808080;
              margin: 15px 0;
              line-height: 2;
            }

            .title {
              height: 32px;
            }

            .vote_span {
              margin: 16px 8px 16px 0;
              padding: 4px 8px;
              color: white;
              border-radius: 10px;
              font-size: 12px;
            }

            .purchase {
              height: 44px;
              text-align: right;
            }

            .purchase_button {
              padding: 5px 16px;
              background-color: var(--primary);
              font-size: 16px;
              color: white;
              border-radius: 4px;
              margin-left: 8px;
            }

            .green {
              background-color: green;
            }

            .yellow {
              background-color: #fba700;
            }
            .grey {
              background-color: #8897a8;
            }

            .price {
              color: #333;
              line-height: 2;
              margin: 0 0 0 12px;
            }

            .old {
              color: #999;
              text-decoration: line-through;
              margin: 0 0 0 12px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default StoreCard;
