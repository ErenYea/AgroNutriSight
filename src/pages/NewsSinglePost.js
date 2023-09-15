import React, { Fragment, useEffect, useState } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitleNewsSingle from '../blocks/page-title/PageTitleNewsSingle';
import NewsMeta from '../blocks/news/NewsMeta';
import NewsTitle from '../blocks/news/NewsTitle';
import NewsDescription from '../blocks/news/NewsDescription';
import NewsTags from '../blocks/news/NewsTags';
import NewsComments from '../blocks/news/NewsComments';
import Widget from '../blocks/widget/Widget';
import { useLocation } from 'react-router-dom';
import News from '../data/news/newsHomeItems';

const NewsSinglePost = () => {
    document.body.classList.add( 'single-post' );
    document.body.classList.add( 'title-opacity-true' );
    const location = useLocation();
    const [postId, setPostId] = useState(1)
    const [news, setNews] = useState('')

    useEffect(()=> {
        const queryParams = new URLSearchParams(location.search);
        setPostId(queryParams.get('post'))
    }, [])
    
    useEffect(() => {
        setNews(News.find(post => post.id === postId))
    }, [postId])

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
                <PageTitleNewsSingle headline={news?.title} />

                <div id="page-content" className="spacer m-top-xl">
                    <div className="wrapper">
                        <div id="single">
                            <div className="row gutter-width-lg">
                                <div className="w-full flex flex-col items-center justify-center single-content">
                                    <div className="img object-contain flex items-center w-full h-1/2 w-1/2">
   
                                        <img src={news?.imgSrc} alt="Assessing the Maturity of Your Data Management in Industry" />
                                        
                                    </div>

                                    {/* <NewsMeta /> */}

                                    <NewsTitle header={news?.header} />

                                    <NewsDescription content={news?.content} />

                                    {/* <NewsTags /> */}

                                    {/* <NewsComments /> */}
                                </div>
                                {/* <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                    <Widget />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </Fragment>
    );
};

export default NewsSinglePost;
