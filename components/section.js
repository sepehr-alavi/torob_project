import React, { Component } from 'react';
import Head from 'next/Head';

class Section extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className={`section ${this.props.className || ''}`}>
        {children}
        <style jsx>
          {`
            .section {
              padding: 0 24px 0 24px;
              border-bottom: 1px solid #e5e5e5;
            }

            .thick_border {
              border-top: 3px solid #ecedef;
            }

            .no-left-padding {
              padding-left: 0;
            }

            .padding-top {
              padding-top: 24px;
            }
          `}
        </style>
        <style global jsx>
          {`
            .section .img_container {
              width: 120px;
              height: 120px;
              overflow: hidden;
              background-color: #ecedef;
            }

            .section .img_container img {
              width: 100%;
            }

            .float-right {
              float: right;
            }

            .float-left {
              float: left;
            }

            .en {
              color: #666;
              direction: ltr;
            }

            .primary {
              color: var(--primary);
            }
          `}
        </style>
        <script src='https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js' />
      </div>
    );
  }
}

export default Section;
