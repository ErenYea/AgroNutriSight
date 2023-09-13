import React from 'react';
import { Link } from 'react-scroll';

const CommentsReply = () => {
    return (
        <div className="comment-reply">
            <Link title="Reply" to="reply-title" className="btn btn-sm btn-link btn-icon p-0 border-0 min-w-auto link-no-space text-uppercase scroll-to-id" href="#reply-title">
                <i className="malex-icon-arrow-right i-large"></i>
                <span className="btn-text">Reply</span>
            </Link>
        </div>
    );
};

export default CommentsReply;
