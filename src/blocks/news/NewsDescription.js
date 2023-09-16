import React from 'react';

const NewsDescription = ( { content } ) => {
    return (
        <div className="description clearfix text-justify px-2 py-4">
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
