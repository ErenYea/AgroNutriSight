import React from 'react';

import RecentEntries from '../../data/widget/recentEntries';

const WidgetRecentEntries = () => {
    return (
        <div className="widget widget_recent_entries">
            <h6 className="widget-title">Recent posts</h6>

            <ul className="list-unstyled items">
                { RecentEntries && RecentEntries.map( ( item, key ) => {
                    return (
                        <li key={ key } className="item">
                            <div className="row gutter-width-xs">
                                <div className="col-3">
                                    <a href={ process.env.PUBLIC_URL + item.link }>
                                        <div className="img object-fit overflow-hidden">
                                            <div className="object-fit-cover transform-scale-h">
                                                <img src={ item.imgSrc } alt={ item.title } /> 
                                            </div>
                                        </div>
                                    </a>
                                </div>
                    
                                <div className="col-9 align-self-center">
                                    <p className="item-t-head"><a title={ item.title } href={ process.env.PUBLIC_URL + item.link }>{ item.title }</a></p>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default WidgetRecentEntries;