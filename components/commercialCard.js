import React, { Component } from 'react';

class CommercialCard extends Component {
  render() {
    const { commercial } = this.props;
    return (
      <div className='commercial_card'>
        <a href={commercial.more_info_url}>
          <div className='comm_img_container'>
            <img src={commercial.image_url} />
          </div>
          <h5>{commercial.text1}</h5>
          <h6>{commercial.text2}</h6>
          <h6 className='lighter'>{commercial.text3}</h6>
          <div className='price'>
            <h5 className="float-right">{commercial.price}</h5>
            <h5 className="unit">{commercial.price_unit}</h5>
          </div>
        </a>

        <style jsx>
          {`
            .commercial_card {
              width: 164px;
              margin-bottom: 24px;
            }
            .comm_img_container {
              width: 164px;
              height: 96px;
            }

            .comm_img_container img {
              width: 100%;
              height: 100%;
            }

            h5 {
              color: #333;
              font-weight: 700;
            }

            h6 {
              color: #666;
              font-weight: 500;
            }

            .lighter {
              color: #999;
            }

            .unit {
              margin-right: 2px;
              display: inline-block;
            }
          `}
        </style>
      </div>
    );
  }
}

export default CommercialCard;
