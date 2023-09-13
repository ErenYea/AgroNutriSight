import React from 'react';

const NewsTags = () => {
    return (
        <div className="tags">
            <p>
                <a title="Strategy" href={ process.env.PUBLIC_URL + "/news" }>Strategy</a>
                <a title="Sales" href={ process.env.PUBLIC_URL + "/news" }>Sales</a>
                <a title="Business" href={ process.env.PUBLIC_URL + "/news" }>Business</a>
            </p>
        </div>
    );
};

export default NewsTags;
