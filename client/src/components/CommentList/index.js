import React from 'react';
import { Link } from 'react-router-dom';

const CommentList = ({
  parkComments,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!parkComments.length) {
    return <h3>No comments Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {parkComments &&
        parkComments.map((comment) => (
          <div className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <div>
                {comment.commentAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    Date Posted: {comment.createdAt}
                  </span>
                  </div>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    Date Posted: {comment.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{comment.commentText}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CommentList;