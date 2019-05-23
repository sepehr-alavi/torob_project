import React, { Component } from 'react';
import Section from '../section';

class PriceVariation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
      itemsToShow: 3,
      expanded: false,
      rotateClass: ''
    };

    this.showMore = this.showMore.bind(this);
  }

  showMore() {
    this.state.itemsToShow === 3
      ? this.setState({
          itemsToShow: Object.keys(this.state.reviews).length,
          expanded: true,
          rotateClass: 'rotate'
        })
      : this.setState({ itemsToShow: 3, expanded: false, rotateClass: '' });
  }

  render() {
    return (
      <Section className='thick_border'>
        <div className='rivew_box'>
          <div className='title'>
            <h3 className='float-right'>نقد و بررسی</h3>
            <i
              className={`fas fa-chevron-left float-left ${
                this.state.rotateClass
              }`}
              onClick={this.showMore}
            />
          </div>

          <ul>
            {this.state.reviews.map(review => {
              return (
                <li className="review">
                  <a href={review.content_url}>
                    {this.state.expanded ? (
                      <div>
                        <div className='logo float-right'>
                          <img src={review.publisher_logo} />
                        </div>
                        <h4 className='review_title'>{review.title}</h4>
                        <h5>{review.description}</h5>
                      </div>
                    ) : (
                      <div className='review'>
                        <div className='logo float-right'>
                          <img src={review.publisher_logo} />
                        </div>
                        <h4 className='review_title'>{review.title}</h4>
                      </div>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <a onClick={this.showMore}>
            {this.state.expanded ? (
              <h4 className='btn primary centered'>نمایش مشخصات کمتر</h4>
            ) : (
              <h4 className='btn primary centered'>{`نمایش تمام ${
                this.state.reviews.length
              } نقد`}</h4>
            )}
          </a>
        </div>

        <style jsx>{`
          .title {
            height: 56px;
          }

          .title i {
            margin-top: 24px;
            transition: 300ms;
            cursor: pointer;
          }

          .rotate {
            transform: rotate(-90deg);
            transition: 300ms;
          }

          .logo {
            position: relative;
            width: 32px;
            height: 32px;
            vertical-align: middle;
          }

          .logo img {
            width: 100%;
            margin: auto 0 auto 0;
            position: absolute;
            top: 50%;
            right: 50%;
            transform: translate(50%, -50%);
            display: inline-block;
          }

          .review_title {
            line-height: 1.8;
            margin-right: 44px;
            font-weight: 100;
          }

          h5 {
            font-weight: 100;
            color: #666;
            margin-bottom: 10px;
          }

          .review {
            border-bottom: 1px solid #e5e5e5;
          }

          .review:last-child {
            border-bottom: none;
          }

          a {
            color: #000;
          }
        `}</style>
      </Section>
    );
  }
}

export default PriceVariation;
