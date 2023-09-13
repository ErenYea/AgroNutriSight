import React from 'react';

import WidgetSearch from '../widget/WidgetSearch';
import WidgetCategories from '../widget/WidgetCategories';
import WidgetRecentEntries from '../widget/WidgetRecentEntries'
import WidgetComments from '../widget/WidgetComments';
import WidgetTagCloud from '../widget/WidgetTagCloud';

const Widget = () => {
    return (
        <aside id="aside" className="widget-area">
            <WidgetSearch />

            <WidgetCategories />

            <WidgetRecentEntries />

            <WidgetComments />

            <WidgetTagCloud />
        </aside>
    );
};

export default Widget;
