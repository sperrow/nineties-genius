import React from 'react';
import { withRouter } from 'react-router-dom';
import { dateAgoFormatter } from '../../utils/helpers';
import LikesContainer from '../likes/likes_container';

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const comments = this.props.comments.reverse();
    const countLikes = likes => likes.length === 0 ? null : `+${likes.length}`;

    return (
      <div className="comments-list">
        <hr className="hr" />
        <ul>
          {
            comments.map(comment => (
              <li key={comment.id}>
                <div className="comment-container">
                  <div className="comment-heading">
                    <span className="author">{comment.author}</span>
                    <span className="date">{dateAgoFormatter(comment.created_at)} ago</span>
                  </div>
                  <p>{comment.body}</p>
                  <LikesContainer likeTarget={comment} likeType="comment" />
                </div>
                <hr className="hr" />
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default withRouter(Comments);
