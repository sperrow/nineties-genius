import React from 'react';
import { withRouter } from 'react-router-dom';
import { dateAgoFormatter } from '../../utils/helpers';
import LikesContainer from '../likes/likes_container';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({ comments: newProps.comments });
  }

  handleDelete(id) {
    return e => {
      e.preventDefault();
      this.props.destroyComment(id)
        .then(() => {
          let comments = this.state.comments.filter(comment => comment.id !== id);
          this.setState({ comments });
        });
    };
  }

  render() {
    const comments = this.state.comments;

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
                  <div className="comment-footer">
                    <LikesContainer likeTarget={comment} likeType="comment" />
                    {
                      this.props.userId === comment.author_id ?
                      <div>
                        <span className="delete-btn" onClick={this.handleDelete(comment.id)}>
                          <i className="fa fa-trash-o" aria-hidden="true"></i>
                        </span>
                      </div> : null
                    }
                  </div>
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
