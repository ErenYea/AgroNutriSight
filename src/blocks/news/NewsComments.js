import React from 'react';

import CommentForm from '../../components/form/CommentForm';
import CommentsReply from '../../components/button/CommentsReply';

const NewsComments = () => {
    return (
        <div id="comments" className="comments-area spacer m-top-xl">
            <div className="comment-title">
                <h3>1 Comment</h3>
            </div>

            <ul className="comment-list list-unstyled style-default">
                <li className="comment">
                    <div className="comment-wrapper">
                        <div className="comment-details">
                            <div className="comment-content">
                                <div className="comment-content-left">
                                    <div className="comment-img">
                                        <img src="assets/img/placeholder/110x110.jpg" alt="Rosie Ford" loading='lazy' />
                                    </div>
                                </div>

                                <div className="comment-content-right">
                                    <h6 className="comment-author after">
                                        <a title="Rosie Ford" href={ process.env.PUBLIC_URL + "/news-single-post" }>Rosie Ford</a>
                                    </h6>

                                    <div className="comment-time">
                                        <p>29 February, 2020 3:23 pm</p>
                                    </div>

                                    <div className="comment-description">
                                        <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally.</p>
                                    </div>

                                    <CommentsReply />
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>

            <div className="block spacer m-top-xl">
                <div id="respond" className="comment-respond">
                    <h3 id="reply-title" className="comment-reply-title">Leave a Reply
                        <a rel="nofollow" id="cancel-comment-reply-link" className="btn btn-link border-0 p-0 min-w-auto link-no-space" href={ process.env.PUBLIC_URL + "/news-single-post" } style={ { display: "none" } }>Cancel Reply</a>
                    </h3>

                    <CommentForm />
                </div>
            </div>
        </div>
    );
};

export default NewsComments;
