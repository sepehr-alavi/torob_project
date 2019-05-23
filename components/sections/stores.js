import React, { Component } from 'react';
import Section from '../section';
import StoreCard from '../storeCard';
import Axios from 'axios';

class Stores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: this.props.storesInfo.result,
      itemsToShow: 3,
      expanded: false
    };

    this.showMore = this.showMore.bind(this);
  }

  showMore() {
    this.state.itemsToShow === 3
      ? this.setState({
          itemsToShow: this.state.stores.length,
          expanded: true
        })
      : this.setState({ itemsToShow: 3, expanded: false });
  }

  render() {
    return (
      <Section>
        <div className='store_box'>
          <h3>فروشگاه ها</h3>
          <ul className='storesList'>
            {this.state.stores
              .slice(0, this.state.itemsToShow)
              .map((store, i) => {
                return (
                  <li key={i}>
                    <StoreCard store={store} />
                  </li>
                );
              })}
          </ul>

          <a onClick={this.showMore}>
            {this.state.expanded ? (
              <h4 className="btn primary">نمایش فروشگاه های کمتر</h4>
            ) : (
              <h4 className="btn primary">نمایش تمام {this.state.stores.length} فروشگاه</h4>
            )}
          </a>
        </div>

        <style jsx>
          {`
            h3 {
              font-size: 16px;
              color: #000;
            }

            h4 {
              text-align: center;
            }

            .storesList li {
              border-bottom: 1px solid #e5e5e5;
            }
            .storesList li:last-child {
              border-bottom: none;
            }
          `}
        </style>
      </Section>
    );
  }
}

export default Stores;
