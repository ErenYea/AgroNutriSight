import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitleNews from '../blocks/page-title/PageTitleNews';
import Widget from '../blocks/widget/Widget';
import LoadMoreButton from '../components/loadmore/LoadMore';

import NewsItemsData from '../data/news/newsItems';

const News = () => {
    document.body.classList.add( 'blog' );
    document.body.classList.add( 'title-opacity-true' );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>News | Malex - Business Consulting Agency React JS Template</title>

                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="robots" content="index, follow, noodp" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <meta name="format-detection" content="telephone=no" />
            </MetaTags>

            <Loading />
            
            <Header />

            <main id="main" className="site-main">
                <PageTitleNews />

                <div id="page-content" className="spacer p-top-xl">
                    <div className="wrapper">
                        <div className="content">
                            <div id="blog">
                                <div className="row gutter-width-md">
                                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                                        <div className="row gutter-width-md with-pb-lg">
                                            { NewsItemsData && NewsItemsData.map( ( item, key ) => {
                                                return ( 
                                                    <div key={ key } className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                        <div className="card card-post">
                                                            <div className="card-top position-relative">
                                                                <a title={ item.title } href={ process.env.PUBLIC_URL + item.link }>
                                                                    <div className="img object-fit overflow-hidden">
                                                                        <div className="object-fit-cover transform-scale-h">
                                                                            <img className="card-top-img" src={ item.imgSrc } alt={ item.title } />
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>

                                                            <div className="card-body">
                                                                <h5 className="card-title">
                                                                    <a title={ item.title } href={ process.env.PUBLIC_URL + item.link }>{ item.title }</a>
                                                                </h5>

                                                                <p className="card-text">{ item.description }</p>

                                                                <div className="card-btn">
                                                                    <a title="Read more" className="btn btn-sm btn-link btn-icon-hover p-0 border-0 min-w-auto link-no-space text-uppercase" href={ process.env.PUBLIC_URL + item.link }>
                                                                        <i className="malex-icon-arrow-right i-large"></i>
                                                                        <span className="btn-text">Read more</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            } ) }
                                        </div>
                                        
                                        <LoadMoreButton />
                                    </div>

                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                        <Widget />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </Fragment>
    );
};
export default News;
