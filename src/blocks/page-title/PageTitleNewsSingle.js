import React from 'react';

const PageTitleNewsSingle = ({ headline }) => {
    return (
        <div id="page-title" className="page-title-ml">
            <div className="wrapper px-2">

                <h1 className=""> { headline } </h1>


                <div className="title-opacity">
                    <div className="title-opacity-text">News</div>
                </div>
            </div>
        </div>
    );
};

export default PageTitleNewsSingle;
