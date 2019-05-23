import Showcase from '../components/sections/showcase';
import Notif from '../components/sections/notif';
import Stores from '../components/sections/stores';
import Axios from 'axios';
import Head from 'next/Head';
import Product from '../components/sections/product';
import PriceVariation from '../components/sections/priceVariation';
import CommercialsCarousel from '../components/sections/commercialsCarousel';
import Recommendation from '../components/sections/recommendation';
import Review from '../components/sections/review';

const Index = props => (
  <div>
    <Head>
      <title>{props.info.name2}</title>
      <link
        rel='stylesheet'
        href='https://use.fontawesome.com/releases/v5.8.2/css/all.css'
        integrity='sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay'
        crossorigin='anonymous'
      />
    </Head>

    <Showcase generalInfo={props.info} />
    <Notif />
    <Stores storesInfo={props.info.products_info} />
    <Product productInfo={props.info} />
    <PriceVariation prices={props.prices} />
    <CommercialsCarousel commercials={props.commercials} />
    <Review reviews={props.info.contents} />
    <Recommendation recommendations={props.recommendations} />
    <style global jsx>
      {`
        :root {
          --primary: #d73948;
        }

        @font-face {
          font-family: vazir;
          src: url('/static/font/Vazir-FD.eot');
          src: url('/static/font/Vazir-FD.eot?#iefix')
              format('embedded-opentype'),
            url('/static/font/Vazir-FD.woff2') format('woff2'),
            url('/static/font/Vazir-FD.woff') format('woff'),
            url('/static/font/Vazir-FD.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: vazir-bold;
          src: url('/static/font/Vazir-Bold-FD.eot');
          src: url('/static/font/Vazir-Bold-FD.eot?#iefix')
              format('embedded-opentype'),
            url('/static/font/Vazir-Bold-FD.woff2') format('woff2'),
            url('/static/font/Vazir-Bold-FD.woff') format('woff'),
            url('/static/font/Vazir-Bold-FD.ttf') format('truetype');
          font-weight: bold;
          font-style: normal;
        }

        body {
          font-family: 'vazir', sans-serif;
          direction: rtl;
          margin: 0;
          padding: 0;
          width: 375px;
        }

        ul {
          padding: 0;
          margin: 0;
        }

        ul li {
          list-style-type: none;
        }

        a {
          text-decoration: none;
        }

        .btn:hover {
          cursor: pointer;
        }

        .hidden {
          visibility: hidden;
        }

        h3 {
          font-size: 16px;
        }

        h4 {
          font-size: 14px;
        }

        h5 {
          font-size: 12px;
          margin: 12px 0 2px 0;
          line-height: 1.5;
        }

        h6 {
          font-size: 10px;
          margin: 2px 0 2px 0;
          line-height: 1.5;
        }

        .centered {
          text-align: center;
        }

        .icon_container {
          width: 20px;
          height: 20px;
          overflow: hidden;
          margin: 12px 24px 14px 0;
          color: #999;
        }

        .icon_container:hover {
          cursor: pointer;
        }

        .icon_container i {
          width: 100%;
          font-size: 20px;
        }

        *:focus {
          outline: 0;
          outline: none;
        }
      `}
    </style>
  </div>
);

Index.getInitialProps = async function() {
  const res = await Axios.get(
    `https://api.torob.com/base-product-more-info/?random_key=7f7f9794-0f12-47ab-ad98-4003278baa6b&source=somewhere&discover_method=direct`
  );
  const data = await res.data;

  const res2 = await Axios.get(
    `https://api.torob.com/android-api/3/search/similar-listings/?prk=7f7f9794-0f12-47ab-ad98-4003278baa6b&source=somewhere
`
  );
  const data2 = await res2.data;

  const res3 = await Axios.get(
    `https://api.torob.com/android-api/3/similar-products/?prk=7f7f9794-0f12-47ab-ad98-4003278baa6b&limit=25&page=1
    `
  );
  const data3 = await res3.data;

  const res4 = await Axios.get(
    `https://api.torob.com/android-api/3/base-product-price-chart/?prk=7f7f9794-0f12-47ab-ad98-4003278baa6b
    `
  );
  const data4 = await res4.data;

  return {
    info: data,
    commercials: data2,
    recommendations: data3,
    prices: data4
  };
};

export default Index;
