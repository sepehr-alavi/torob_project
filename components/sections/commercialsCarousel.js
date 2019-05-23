import React, { Component } from 'react';
import Section from '../section';
import Slider from 'react-slick';
import CommercialCard from '../commercialCard';

class PriceVariation extends Component {
  render() {
    const { commercials } = this.props;

    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      rtl: true,
      initialSlide: 1,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    return (
      <Section className="thick_border no-left-padding">
        <link
          rel='stylesheet'
          type='text/css'
          charset='UTF-8'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
        />

        <h3>آگهی های مشابه</h3>
        <Slider {...settings}>
          {commercials.result.map((commercial, i) => {
            return (
              <div className='slide' key={i}>
                <CommercialCard commercial={commercial} />
              </div>
            );
          })}
        </Slider>

        <style jsx>
          {`
            .slide {
              text-align: right;
            }
          `}
        </style>
      </Section>
    );
  }
}

export default PriceVariation;
