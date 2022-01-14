import React, { useState, useEffect } from 'react';
import { DataScroller } from 'primereact/datascroller';
import 'primeflex/primeflex.css';
import { ProductService } from './service/ProductService';
import '../css/DataScrollerDemo.css';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Card } from 'primereact/card';

const Defiindexs = () => {

  const [products, setProducts] = useState([]);
  const productService = new ProductService();

  useEffect(() => {
    productService.getProducts().then(data => setProducts(data));
  }, []);

  const itemTemplate = (data) => {
    return (
      <div className="product-item">
        <img src={`showcase/demo/images/product/${data.image}`} onError={(e) => e.target.src = './images/icons/blackwatch.jpg'} alt={data.name} />
        <div className="product-detail">
          <div className="product-name">{data.name}</div>
          <div className="product-description">{data.description}</div>
        </div>
        <div className="product-action">
          <span className="product-price">
          <button class="p-button p-component p-button-rounded p-button-danger p-button-text p-button-icon-only"><span class="p-button-icon p-c pi pi-times"></span><span class="p-button-label p-c"></span></button>
          </span>

          <input type="text" style={{ width: '100px' }} class="p-inputtext p-inputtext-sm p-d-block" placeholder="Input" />
        </div>
      </div>
    );
  }


  return (
    <>
      <div className="p-grid p-ml-0 p-mr-0">
        <div className="p-col-10 p-offset-1">
          <div className="p-grid nested-grid">
            <div className="p-col-12 p-md-7 p-lg-8">

              <div className="p-grid">
                <div className="p-col-10 p-mb-3">
                  <h1 className="p-d-block p-d-sm-inline">DeFi Indexes </h1>
                  <strong className="p-d-none p-d-sm-inline-flex light-txt">Tokenized baskets of high quality DeFi projects</strong>
                </div>
                <div className="p-col-2 p-mt-3 p-text-right">
                  <Router><Link to="/" ><strong>See All</strong></Link></Router>
                </div>
              </div>

              <div className="p-grid">
                <div className="p-col-12 p-sm-6 p-md-6 p-lg-6">
                  <Card>
                    <div className="p-d-flex p-mb-2">
                      <div className="p-mb-2">
                        <img alt="Defi Pulse" src="./images/icons/defiplus.jpg" className="p-pr-2"></img>
                      </div>
                      <div className="p-mt-2">
                        <strong >Defi Pulse </strong><i className="pi pi-check"></i>
                      </div>
                    </div>

                    <div className="p-d-flex light-txt">Price</div>
                    <h1 className="p-d-inline">$247<span className="light-txt">.60 </span><i className="red-txt pi pi-arrow-down">10.2%</i></h1>
                    <div className="p-d-none p-d-sm-inline-flex"></div>
                  </Card>
                </div>

                <div className="p-col-12 p-sm-6 p-md-6 p-lg-6">
                  <Card>
                    <div className="p-d-flex p-mb-2">
                      <div className="p-mb-2">
                        <img alt="Metaverse Index" src="./images/icons/metaverse.jpg" className="p-pr-2"></img>
                      </div>
                      <div className="p-mt-2">
                        <strong>Metaverse Index </strong><i className="pi pi-check"></i>
                      </div>
                    </div>

                    <div className="p-d-flex light-txt">Price</div>
                    <h1 className="p-d-inline">$236<span className="light-txt">.26 </span><i className="red-txt pi pi-arrow-down">10.9%</i></h1>
                    <div className="p-d-none p-d-sm-inline-flex"></div>
                  </Card>
                </div>

                <div className="p-col-12">
                  <div className="p-grid">
                    <div className="p-col-10 p-mt-5">
                      <h1 className="p-d-block p-d-sm-inline">DeFi Blue Chips </h1>
                      <strong className="p-d-none p-d-sm-inline-flex light-txt">Top Defi tokens by Market Cap</strong>
                    </div>
                    <div className="p-col-2 p-mt-6 p-text-right">
                      <Router><Link to="/" ><strong>See All</strong></Link></Router>
                    </div>
                  </div>


                </div>
                <div className="p-col-12 p-sm-6 p-md-6 p-lg-6">
                  <Card>
                    <div className="p-d-flex p-mb-2">
                      <div className="p-mb-2">
                        <img alt="Defi Pulse" src="./images/icons/wrapped.jpg" className="p-pr-2"></img>
                      </div>
                      <div className="p-mt-2">
                        <strong>Wrapped BTC </strong><i className="pi pi-check"></i>
                      </div>
                    </div>

                    <div className="p-d-flex light-txt">Price</div>
                    <h1 className="p-d-inline">$48,153<span className="light-txt">.77 </span><i className="red-txt pi pi-arrow-down">2.2%</i></h1>
                    <div className="p-d-none p-d-sm-inline-flex"></div>
                  </Card>
                </div>

                <div className="p-col-12 p-sm-6 p-md-6 p-lg-6">
                  <Card>
                    <div className="p-d-flex p-mb-2">
                      <div className="p-mb-2">
                        <img alt="Chainlink" src="./images/icons/chainlink.jpg" className="p-pr-2"></img>
                      </div>
                      <div className="p-mt-2">
                        <strong>Chainlink </strong><i className="pi pi-check"></i>
                      </div>
                    </div>

                    <div className="p-d-flex light-txt">Price</div>
                    <h1 className="p-d-inline">$18<span className="light-txt">.31 </span><i className="red-txt pi pi-arrow-down">8.8%</i></h1>
                    <div className="p-d-none p-d-sm-inline-flex"></div>
                  </Card>
                </div>
              </div>
            </div>

            <div className="p-col-12 p-md-5 p-lg-4 p-mt-2">
              <div className="datascroller-demo p-mb-3">
                <div className="card">
                  <DataScroller value={products} itemTemplate={itemTemplate} rows={5} inline scrollHeight="470px" header="Scroll Down to Load More" />
                </div>
              </div>
              <button class="p-button p-component p-button-raised p-button-secondary p-mr-2">Save</button>
              <button class="p-button p-component p-button-raised">Clear</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Defiindexs