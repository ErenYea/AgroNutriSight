import React from 'react';

import TeamData from '../../data/team-members/teamMembersData';

const TeamMembers = () => {
    return (
        <div className="wrapper">
            <div className="title">
                <h6 className="text-primary text-uppercase">Meet our team</h6>
            </div>

            <div className="title-opacity">
                <div className="title-opacity-text">Team</div>
            </div>

            <div className="description">
                <h2>We are Business Consulting Professionals</h2>
            </div>

            <div className="row gutter-width-md with-pb-md spacer p-top-lg">
                { TeamData && TeamData.map( ( member, key ) => {
                    return (
                        <div key={ key } className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div className="team-member">
                                <div className="team-member-top">
                                    <div className="img object-fit">
                                        <div className="object-fit-cover">
                                            <img src={ member.imgSrc } alt={ member.name } />
                                        </div>
                                    </div>
        
                                    <div className="team-member-position">
                                        <p>{ member.position }</p>
                                    </div>
                                </div>
        
                                <div className="team-member-content">
                                    <h4 className="team-member-t-head">{ member.name }</h4>
        
                                    <div className="team-member-description">
                                        <p>{ member.description }</p>
                                    </div>
                                </div>
        
                                <nav className="team-member-nav-items">
                                    <ul className="nav">
                                        <li className="nav-item">
                                            <a title="Facebook" href={ member.facebook }>
                                                <i className="fab fa-facebook-f"></i></a>
                                        </li>
        
                                        <li className="nav-item">
                                            <a title="LinkedIn" href={ member.linkedIn }>
                                                <i className="fab fa-linkedin-in"></i></a>
                                        </li>
        
                                        <li className="nav-item">
                                            <a title="Instagram" href={ member.instagram }>
                                                <i className="fab fa-instagram"></i></a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TeamMembers;