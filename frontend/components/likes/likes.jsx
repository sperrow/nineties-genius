import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Likes extends React.Component {
  constructor(props) {
    super(props);

    const userLike = this.props.comment.likes.find(like => {
      return like.author_id === this.props.userId;
    });

    this.state = {
      userLike,
      count: this.props.comment.likes.length,
      warning: false
    };

    this.handleLike = this.handleLike.bind(this);
    this.handleUnlike = this.handleUnlike.bind(this);
  }

  handleLike() {
    if (!this.state.userId) {
      this.setState({ warning: true });
    } else if (!this.state.userLike) {
      let like = {
        author_id: this.props.userId,
        comment_id: this.props.comment.id
      };
      this.props.createLike({comment_like: like}).
        then(data => {
          this.setState({
            userLike: data,
            count: this.state.count + 1,
            warning: false
          });
        });
    }
  }

  handleUnlike() {
    if (!this.state.userId) {
      this.setState({ warning: true });
    } else if (this.state.userLike) {
      this.props.destroyLike(this.state.userLike.id).
        then(data => {
          this.setState({
            userLike: null,
            count: this.state.count - 1,
            warning: false
          });
        });
    }
  }

  render() {
    const likes = this.props.comment.likes;
    const likesCount = this.state.count === 0 ? null : `+${this.state.count}`;

    const classNames = this.state.userLike ? 'like-btn btn active' : 'like-btn btn';
    const prompt = (
      <div className="prompt">
        <p className="prompt-line">Have an account? <Link to="/login">Sign in</Link></p>
        <hr className="hr" />
        <p className="prompt-line">Don't have an account? <Link to="/signup">Sign up</Link></p>
        <hr className="hr" />
      </div>
    );

    return (
      <div className="likes-container">
        <span className={classNames} onClick={this.handleLike}><i className="fa fa-thumbs-o-up" aria-hidden="true"></i></span>
        <span className="like-count">{likesCount}</span>
        <span className="dislike-btn btn" onClick={this.handleUnlike}><i className="fa fa-thumbs-o-down" aria-hidden="true"></i></span>
        {
          this.state.warning ? prompt : null
        }
      </div>
    );
  }
}

export default withRouter(Likes);
