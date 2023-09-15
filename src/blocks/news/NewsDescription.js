import React from 'react';

const NewsDescription = ( { content } ) => {
    return (
        <div className="description clearfix text-justify">
            {
                content?.map((para) => (
                    <p>
                        { para }
                    </p>
                ))
            }
        </div>
    );
};

export default NewsDescription;
