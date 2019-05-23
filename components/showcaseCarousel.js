import React, { Component } from 'react';
import Slider from 'react-slick';

class ShowcaseCarousel extends React.Component {
  render() {
    const { images } = this.props;
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
      <div>
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
        <Slider {...settings}>
          {this.props.images.urls.map((url, i) => {
            return (
              <div className='slide' key={i}>
                <img src={url} alt='Galaxy 8' />
              </div>
            );
          })}
        </Slider>

        <style jsx>
          {`
            .slide {
              width: 120px;
              height: 120px;
              text-align: center;
            }

            .slide img {
              width: 120px;
              height: 120px;
              margin-left: auto;
              margin-right: auto;
            }
          `}
        </style>
      </div>
    );
  }
}

export default ShowcaseCarousel;
