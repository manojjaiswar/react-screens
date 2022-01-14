import React, { Component } from 'react';
import { Card } from 'primereact/card';


export class LatestNews extends Component {

  render() {
    const header1 = (
      <img className='customImgRadius' alt="Card1" src="images/latest-news/card1.jpg" />
    );
    const header2 = (
      <img className='customImgRadius' alt="Card1" src="images/latest-news/card2.jpg" />
    );
    const header3 = (
      <img className='customImgRadius' alt="Card1" src="images/latest-news/card3.jpg" />
    );

    return (
      <>

        <div className='p-col-12 p-md-10 p-nogutter p-lg-10 p-md-offset-1 p-lg-offset-1'>
          <div className="p-ml-3">
            <span className='text-4xl text-700 font-semibold'>Latest News</span>
          </div>

          <div className="p-grid p-p-0 p-m-0 ">
            <div className="p-col-12 p-md-4 p-lg-4 p-p-3">

              <Card header={header1}>
                <span className='text-xl font-semibold text-700'>Strike Brings The Bitcoin Lighting Network to Argentina</span>
                <p>Feed - Cryptopotato.com <span className='p-pl-3 text-600 text-sm'>28 minutes age</span></p>
                <p className='text-sm text-700'>
                  Stricke's CEO Jack Mallers Opined That the Cryptocurrency development could "give hope to the people of Argetina
                  <span> <a href='#' className='text-sm text-green-400 p-pl-1'> Read More... </a></span>
                </p>

              </Card>

            </div>
            <div className="p-col-12 p-md-4 p-lg-4 p-p-3">
              <Card header={header2}>
                <span className='text-xl font-semibold text-700'>New On-Chain Metrics Suggest Bitcoin May Be Due For Bullish </span>
                <p>ZyCrypto <span className='p-pl-3 text-600 text-sm'>1 hour ago</span></p>
                <p className='text-sm text-700'>
                  Glassnode reports Bitcoin's current position in the market. Bitcoin is currently surviving on the back of institutional holder. The asset...
                  <span> <a href='#' className='text-sm text-green-400 p-pl-1'> Read More... </a></span>
                </p>

              </Card>

            </div>
            <div className="p-col-12 p-md-4 p-lg-4 p-p-3">
              <Card header={header3}>
                <span className='text-xl font-semibold text-700'>Jack Dorsey proposes a Bitcoin legal defense fund to protect developers</span>
                <p>CryptoSlate <span className='p-pl-3 text-600 text-sm'>1 hour ago</span></p>
                <p className='text-sm text-700'>
                  Jack Dorsey, former Twitter CEO and founder revealed new plans to create a Bitcoin Legal Defense Fund in association with Alex Morcos...
                  <span> <a href='#' className='text-sm text-green-400 p-pl-1'> Read More... </a></span>
                </p>

              </Card>

            </div>

          </div>
        </div>

      </>
    )
  }
}
