import React, { Component } from 'react';
import Section from '../section';

class Notif extends Component {
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
    return (
      <Section>
        <div className='notif_box'>
          <div
            className='icon_container float-right bell'
            onClick={this.notification}
          >
            <i className={this.state.notificationType} />
          </div>
          <p>اطلاع از تغییر قیمت</p>

          <div className='icon_container float-left share'>
            <i className='fas fa-share-alt' />
          </div>
          <div
            className='icon_container float-left heart'
            onClick={this.like}
          >
            <i className={this.state.likeType} />
          </div>
        </div>

        <style jsx>
          {`
            p {
              margin: 14px 9px 0 0;
              font-size: 14px;
              color: #999;
              float: right;
            }

            .notif_box {
              height: 48px;
            }

            .icon_container:first-child {
              margin: 12px 0;
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
      </Section>
    );
  }
}

export default Notif;
