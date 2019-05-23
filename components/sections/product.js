import React, { Component } from 'react';
import Section from '../section';

class Showcase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: this.props.productInfo.structural_specs.headers[0].specs,
      itemsToShow: 2,
      expanded: false,
      rotateClass: ''
    };

    this.showMore = this.showMore.bind(this);
  }

  showMore() {
    this.state.itemsToShow === 2
      ? this.setState({
          itemsToShow: Object.keys(this.state.info).length,
          expanded: true,
          rotateClass: 'rotate'
        })
      : this.setState({ itemsToShow: 2, expanded: false, rotateClass: '' });
  }

  render() {
    const { productInfo } = this.props;
    return (
      <Section className='thick_border'>
        <div className='info_box'>
          <div className='title'>
            <h3 className='float-right'>مشخصات محصول</h3>
            <i
              className={`fas fa-chevron-left float-left ${
                this.state.rotateClass
              }`}
              onClick={this.showMore}
            />
          </div>
          <ul className='infoList'>
            {Object.keys(this.state.info)
              .slice(0, this.state.itemsToShow)
              .map(key => {
                return (
                  <li>
                    <h4 className='spec'>{key}</h4>
                    <h4 className='specInfo'>{this.state.info[key]}</h4>
                  </li>
                );
              })}
          </ul>

          <a onClick={this.showMore}>
            {this.state.expanded ? (
              <h4 className='btn primary'>نمایش مشخصات کمتر</h4>
            ) : (
              <h4 className='btn primary'>نمایش تمام مشخصات</h4>
            )}
          </a>
        </div>
        <style jsx>{`
          h4 {
            font-size: 14px;
          }

          .btn {
            text-align: center;
          }

          .spec {
            color: #333;
          }

          .specInfo {
            color: #666;
            font-weight: 100;
          }

          .infoList li {
            border-bottom: 1px solid #e5e5e5;
          }

          .infoList li:last-child {
            border-bottom: none;
          }

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
        `}</style>
      </Section>
    );
  }
}

export default Showcase;
