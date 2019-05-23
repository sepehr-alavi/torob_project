import React, { Component } from 'react';

class RecommendationCard extends Component {
  constructor() {
    super();

    this.state = {
      liked: false,
      likeType: 'far fa-heart',
      likeColor: '#999',
      notification: false,
      notificationType: 'far fa-bell'
    };

    this.like = this.like.bind(this);
    this.notification = this.notification.bind(this);
  }

  like() {
    this.state.liked
      ? this.setState({
          liked: false,
          likeType: 'far fa-heart'
        })
      : this.setState({
          liked: true,
          likeType: 'fas fa-heart primary'
        });
  }

  notification() {
    this.state.notification
      ? this.setState({
          notification: false,
          notificationType: 'far fa-bell'
        })
      : this.setState({
          notification: true,
          notificationType: 'fas fa-bell primary'
        });
  }

  render() {
    const { recommended } = this.props;
    return (
      <div className='recomm_card'>
        <a>
          <div className="recomm_img_container">
            <img src={recommended.image_url} alt={recommended.persian_name}/>
          </div>
          <h5 className="pe">{recommended.persian_name}</h5>
          <h5 className="en">{recommended.english_name}</h5>
          <h5 className="primary centered">{`از ${recommended.price} تومان`}</h5>
          <h5 className="shops centered">{`در ${recommended.shop_num} فروشگاه`}</h5>
        </a>
        <div className="icons">
          <div className="icon_container bell" onClick={this.notification}>
            <i className={this.state.notificationType} />
          </div>
          <div className="icon_container heart" onClick={this.like}>
            <i className={this.state.likeType} />
          </div>
        </div>
        <div className="push" />

        <style jsx>
          {`  
            .recomm_card {
              position: relative;
              box-sizing: border-box;
              width: 169.5px;
              padding: 12px 16.5px 17px 17px;
              background: #fff;
            }

            .recomm_img_container {
              width: 100%;
              height: 136px;
            }

            .recomm_img_container img {
              width: 100%;
              height: 100%;
            }

            .pe {
              color: #333;
              margin-bottom: 5px;
              margin-top: 8px;
            }

            .en {
              color: #666;
              font-weight: 100;
              margin-bottom: 8px;
            }

            .shops {
              color: #999;
              font-weight: 100;
              margin-bottom: 16px;
            }

            h5 {
              margin: 0;
            }

            .icons {
              position: absolute;
              bottom: 0;
            }

            .push {
              height: 20px;
            }

            .icon_container {
              display: inline-block;
              text-align: center;
              margin: 0 0 10px 0;
            }

            .bell {
              margin: 0 30px 10px 17px;
            }

            .heart {
              margin: 0 17px 10px 30px;
            }

            .bell:hover {
              color: var(--primary);
              transition: 200ms;
            }

            .heart:hover {
              color: var(--primary);
              transition: 300ms;
            }
          `}

        </style>
      </div>
    );
  }
}

export default RecommendationCard;
