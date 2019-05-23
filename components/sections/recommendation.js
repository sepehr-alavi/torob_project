import React, { Component } from 'react';
import RecommendationCard from '../recommendationCard';

class Stores extends Component {
  render() {
    const { recommendations } = this.props;
    return (
      <div className="recomm_section">
        <h3>محصولات مشابه</h3>
        <div className="products">
          <RecommendationCard recommended={recommendations.result[0]}/>
          {recommendations.result.map((recommended, key) => {
            return (
              <RecommendationCard recommended={recommended}/>
            )
          })}
        </div>
        
        <style jsx>
          {`
            .recomm_section {
              background: #E5E5E5;
              padding: 16px 12.5px 17px 11px;
            }
            .products {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              grid-gap: 12.5px;
              padding: 16px 0 0 0;
            }

            .box {
              width: 169.5px;
              height: 304px;
              background: #fff;
            }

            h3 {
              margin: 0;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Stores;
