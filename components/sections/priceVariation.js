import React, { Component } from 'react';
import Section from '../section';
import Chart from '../chart';

class PriceVariation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsToShow: 2,
      expanded: false,
      rotateClass: ''
    };
  }

  // showMore() {
  //   this.state.itemsToShow === 2
  //     ? this.setState({
  //         itemsToShow: Object.keys(this.state.info).length,
  //         expanded: true,
  //         rotateClass: 'rotate'
  //       })
  //     : this.setState({ itemsToShow: 2, expanded: false, rotateClass: '' });
  // }

  render() {
    const { prices } = this.props;
    return (
      <Section className='thick_border'>
        <div className='chart_box'>
          <div className='title'>
            <h3 className='float-right'>تغییرات قیمت</h3>
            <i
              className={`fas fa-chevron-left float-left ${
                this.state.rotateClass
              }`}
              onClick={this.showMore}
            />
          </div>

          <div className='chart_container'>
            <Chart chartData={prices} />
          </div>
          <h4 className='btn primary centered'>لیست تغییرات قیمت</h4>
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

          .chart_container {
            width: 100%;
            height: 200px;
          }
        `}</style>
      </Section>
    );
  }
}

export default PriceVariation;
