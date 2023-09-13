import React from 'react';

const NewsMeta = () => {
    return (
    <div className="meta">
        <p>
            <span><a href={ process.env.PUBLIC_URL + "/news" }>By admin</a></span>
            <span>-</span>
            <span>Comments (1)</span>
            <span>-</span>
            <span className="category">
                <a title="Business" href={ process.env.PUBLIC_URL + "/news" }>Business</a>
            </span>
        </p>
    </div>
    );
};

export default NewsMeta;
