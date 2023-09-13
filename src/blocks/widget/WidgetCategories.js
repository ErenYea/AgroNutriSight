import React from 'react';

const WidgetCategories = () => {
    return (
        <div className="widget widget_categories">
            <h6 className="widget-title">Categories</h6>

            <ul>
                <li className="cat-item">
                    <a title="Beauty" href={ process.env.PUBLIC_URL + "/news" }>Strategy</a>
                </li>

                <li className="cat-item">
                    <a title="Cosmetic" href={ process.env.PUBLIC_URL + "/news" }>Sales</a>
                </li>

                <li className="cat-item">
                    <a title="Health" href={ process.env.PUBLIC_URL + "/news" }>Marketing</a>
                </li>

                <li className="cat-item">
                    <a title="Makeup" href={ process.env.PUBLIC_URL + "/news" }>Business</a>
                </li>
            </ul>
        </div>
    );
};

export default WidgetCategories;
