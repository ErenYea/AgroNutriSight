import React from 'react';
import { PrismCode } from '../../../../components/prsimjs/Prismjs';
import MoreExamples from '../../blocks/MoreExamples';

const Icons = () => {
    return (
        <div id="icons" className="spacer m-top-xl">
            <h3>Icons</h3>
            <p>More than 1,550 beautifully crafted icons with some helper classes.</p>

            <div id="fontawesome">
                <h4>FontAwesome</h4>
                <p>Font Awesome gives you scalable vector icons that can instantly be customized — size, color, drop shadow, and anything that can be done with the power of CSS.</p>

                <div className="bd-example">
                    <i className="fa fa-home"></i>
                </div>

                <PrismCode
                    code={ '<i className="fa fa-home"></i>' }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>

            <MoreExamples actionLink="https://fontawesome.com/cheatsheet?from=io"
                          actionLinkContent="available icons"
                          contentBefore="You can see the list of"
                          contentAfter="online."
            />

            <div id="custom-icons">
                <h4>Custom icons</h4>

                <div class="bd-example">
                    <p><i class="malex-icon-email"></i> - malex-icon-email</p>
                    <p><i class="malex-icon-location"></i> - malex-icon-location</p>
                    <p><i class="malex-icon-phone"></i> - malex-icon-phone</p>
                    <p><i class="malex-icon-strategy"></i> - malex-icon-strategy</p>
                    <p><i class="malex-icon-binoculars"></i> - malex-icon-binoculars</p>
                    <p><i class="malex-icon-briefcase"></i> - malex-icon-briefcase</p>
                    <p><i class="malex-icon-calendar"></i> - malex-icon-calendar</p>
                    <p><i class="malex-icon-certificate"></i> - malex-icon-certificate</p>
                    <p><i class="malex-icon-chart-1"></i> - malex-icon-chart-1</p>
                    <p><i class="malex-icon-chart-2"></i> - malex-icon-chart-2</p>
                    <p><i class="malex-icon-chart-3"></i> - malex-icon-chart-3</p>
                    <p><i class="malex-icon-chart-4"></i> - malex-icon-chart-4</p>
                    <p><i class="malex-icon-chart-5"></i> - malex-icon-chart-5</p>
                    <p><i class="malex-icon-chart"></i> - malex-icon-chart</p>
                    <p><i class="malex-icon-check-list"></i> - malex-icon-check-list</p>
                    <p><i class="malex-icon-chess"></i> - malex-icon-chess</p>
                    <p><i class="malex-icon-choice"></i> - malex-icon-choice</p>
                    <p><i class="malex-icon-competition"></i> - malex-icon-competition</p>
                    <p><i class="malex-icon-cup"></i> - malex-icon-cup</p>
                    <p><i class="malex-icon-diamond"></i> - malex-icon-diamond</p>
                    <p><i class="malex-icon-document"></i> - malex-icon-document</p>
                    <p><i class="malex-icon-exam"></i> - malex-icon-exam</p>
                    <p><i class="malex-icon-exchanging"></i> - malex-icon-exchanging</p>
                    <p><i class="malex-icon-hourglass"></i> - malex-icon-hourglass</p>
                    <p><i class="malex-icon-idea"></i> - malex-icon-idea</p>
                    <p><i class="malex-icon-law"></i> - malex-icon-law</p>
                    <p><i class="malex-icon-management-1"></i> - malex-icon-management-1</p>
                    <p><i class="malex-icon-management-2"></i> - malex-icon-management-2</p>
                    <p><i class="malex-icon-management"></i> - malex-icon-management</p>
                    <p><i class="malex-icon-megaphone"></i> - malex-icon-megaphone</p>
                    <p><i class="malex-icon-mission"></i> - malex-icon-mission</p>
                    <p><i class="malex-icon-network"></i> - malex-icon-network</p>
                    <p><i class="malex-icon-notes"></i> - malex-icon-notes</p>
                    <p><i class="malex-icon-pie-chart"></i> - malex-icon-pie-chart</p>
                    <p><i class="malex-icon-plan"></i> - malex-icon-plan</p>
                    <p><i class="malex-icon-planning"></i> - malex-icon-planning</p>
                    <p><i class="malex-icon-puzzle"></i> - malex-icon-puzzle</p>
                    <p><i class="malex-icon-pyramid"></i> - malex-icon-pyramid</p>
                    <p><i class="malex-icon-search-1"></i> - malex-icon-search-1</p>
                    <p><i class="malex-icon-search"></i> - malex-icon-search</p>
                    <p><i class="malex-icon-settings"></i> - malex-icon-settings</p>
                    <p><i class="malex-icon-startup"></i> - malex-icon-startup</p>
                    <p><i class="malex-icon-statistics-1"></i> - malex-icon-statistics-1</p>
                    <p><i class="malex-icon-statistics"></i> - malex-icon-statistics</p>
                    <p><i class="malex-icon-steering-wheel"></i> - malex-icon-steering-wheel</p>
                    <p><i class="malex-icon-stopwatch"></i> - malex-icon-stopwatch</p>
                    <p><i class="malex-icon-strategy-1"></i> - malex-icon-strategy-1</p>
                    <p><i class="malex-icon-target"></i> - malex-icon-target</p>
                    <p><i class="malex-icon-teamwork"></i> - malex-icon-teamwork</p>
                    <p><i class="malex-icon-tie"></i> - malex-icon-tie</p>
                    <p><i class="malex-icon-workflow-1"></i> - malex-icon-workflow-1</p>
                    <p><i class="malex-icon-workflow"></i> - malex-icon-workflow</p>
                    <p><i class="malex-icon-wrench"></i> - malex-icon-wrench</p>
                    <p><i class="malex-icon-arrow-down"></i> - malex-icon-arrow-down</p>
                    <p><i class="malex-icon-arrow-left"></i> - malex-icon-arrow-left</p>
                    <p><i class="malex-icon-arrow-right"></i> - malex-icon-arrow-right</p>
                    <p><i class="malex-icon-arrow-up"></i> - malex-icon-arrow-up</p>
                    <p><i class="malex-icon-long-arrow-down"></i> - malex-icon-long-arrow-down</p>
                    <p><i class="malex-icon-long-arrow-left"></i> - malex-icon-long-arrow-left</p>
                    <p><i class="malex-icon-long-arrow-right"></i> - malex-icon-long-arrow-right</p>
                    <p><i class="malex-icon-long-arrow-up"></i> - malex-icon-long-arrow-up</p>
                </div>
            </div>

            <PrismCode
                code={
                '<i class="malex-icon-email"></i>\n' +
                '<i class="malex-icon-location"></i>\n' +
                '<i class="malex-icon-phone"></i>\n' +
                '<i class="malex-icon-strategy"></i>\n' +
                '<i class="malex-icon-binoculars"></i>\n' +
                '<i class="malex-icon-briefcase"></i>\n' +
                '<i class="malex-icon-calendar"></i>\n' +
                '<i class="malex-icon-certificate"></i>\n' +
                '<i class="malex-icon-chart-1"></i>\n' +
                '<i class="malex-icon-chart-2"></i>\n' +
                '<i class="malex-icon-chart-3"></i>\n' +
                '<i class="malex-icon-chart-4"></i>\n' +
                '<i class="malex-icon-chart-5"></i>\n' +
                '<i class="malex-icon-chart"></i>\n' +
                '<i class="malex-icon-check-list"></i>\n' +
                '<i class="malex-icon-chess"></i>\n' +
                '<i class="malex-icon-choice"></i>\n' +
                '<i class="malex-icon-competition"></i>\n' +
                '<i class="malex-icon-cup"></i>\n' +
                '<i class="malex-icon-diamond"></i>\n' +
                '<i class="malex-icon-document"></i>\n' +
                '<i class="malex-icon-exam"></i>\n' +
                '<i class="malex-icon-exchanging"></i>\n' +
                '<i class="malex-icon-hourglass"></i>\n' +
                '<i class="malex-icon-idea"></i>\n' +
                '<i class="malex-icon-law"></i>\n' +
                '<i class="malex-icon-management-1"></i>\n' +
                '<i class="malex-icon-management-2"></i>\n' +
                '<i class="malex-icon-management"></i>\n' +
                '<i class="malex-icon-megaphone"></i>\n' +
                '<i class="malex-icon-mission"></i>\n' +
                '<i class="malex-icon-network"></i>\n' +
                '<i class="malex-icon-notes"></i>\n' +
                '<i class="malex-icon-pie-chart"></i>\n' +
                '<i class="malex-icon-plan"></i>\n' +
                '<i class="malex-icon-planning"></i>\n' +
                '<i class="malex-icon-puzzle"></i>\n' +
                '<i class="malex-icon-pyramid"></i>\n' +
                '<i class="malex-icon-search-1"></i>\n' +
                '<i class="malex-icon-search"></i>\n' +
                '<i class="malex-icon-settings"></i>\n' +
                '<i class="malex-icon-startup"></i>\n' +
                '<i class="malex-icon-statistics-1"></i>\n' +
                '<i class="malex-icon-statistics"></i>\n' +
                '<i class="malex-icon-steering-wheel"></i>\n' +
                '<i class="malex-icon-stopwatch"></i>\n' +
                '<i class="malex-icon-strategy-1"></i>\n' +
                '<i class="malex-icon-target"></i>\n' +
                '<i class="malex-icon-teamwork"></i>\n' +
                '<i class="malex-icon-tie"></i>\n' +
                '<i class="malex-icon-workflow-1"></i>\n' +
                '<i class="malex-icon-workflow"></i>\n' +
                '<i class="malex-icon-wrench"></i>\n' +
                '<i class="malex-icon-arrow-down"></i>\n' +
                '<i class="malex-icon-arrow-left"></i>\n' +
                '<i class="malex-icon-arrow-right"></i>\n' +
                '<i class="malex-icon-arrow-up"></i>\n' +
                '<i class="malex-icon-long-arrow-down"></i>\n' +
                '<i class="malex-icon-long-arrow-left"></i>\n' +
                '<i class="malex-icon-long-arrow-right"></i>\n' +
                '<i class="malex-icon-long-arrow-up"></i>' }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default Icons;
