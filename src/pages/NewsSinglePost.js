import React, { Fragment, useEffect, useState } from 'react';
import MetaTags from 'react-meta-tags';
import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';
import PageTitleNewsSingle from '../blocks/page-title/PageTitleNewsSingle';
import NewsTitle from '../blocks/news/NewsTitle';
import NewsDescription from '../blocks/news/NewsDescription';
import { useLocation } from 'react-router-dom';
import News from '../data/news/newsHomeItems';
import '../App.css'

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
                <title>News | HealthSynX</title>
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
                                <div className="d-flex flex-column flex-xl-row justify-content-between">
                                    <div className="img object-cover px-2">
                                        <img
                                            src={news?.imgSrc}
                                            alt=""
                                            className='img-responsive'
                                            loading='lazy'
                                        />
                                    </div>
                                    <NewsDescription content={news?.content?.slice(0,4)} />
                                </div>

                                <NewsTitle header={news?.header} />

                                <div className="d-flex flex-column justify-content-between px-2 py-4">
                                    { news?.content && (

                                        news?.content.slice(4).map((para) => (
                                                <p className='text-justify'>
                                                    {para}
                                                </p>
                                            ))
                                        )
                                    }
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

export default NewsSinglePost;