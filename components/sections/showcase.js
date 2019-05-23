import React, { Component } from 'react';
import Section from '../section';
import Head from 'next/Head';
import ShowcaseCarousel from '../showcaseCarousel';
import Axios from 'axios';

class Showcase extends Component {
  render() {
    const { generalInfo } = this.props;
    return (
      <Section className="no-left-padding padding-top">
        <ShowcaseCarousel images={generalInfo.image_urls[0]} />
        <div className="showcaseTitle">
          <h3>{generalInfo.persian_name}</h3>
          <h3 className='en'>{generalInfo.english_name}</h3>
        </div>
        <style jsx>
          {`

            h3 {
              color: #333;
              font-size: 16px;
              line-height: 1.5;
            }

            .en {
              color: #666;
            }

            .showcaseTitle {
              padding-left: 24px;
            }
          `}
        </style>
      </Section>
    );
  }
}

export default Showcase;
