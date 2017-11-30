import React from 'react';
import { withRouter } from 'react-router';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      author_id: props.userId,
      commentable_id: props.commentableId,
      commentable_type: props.commentableType
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = this.state;
    this.props.createComment({comment})
      .then(data => {
        this.setState({
          body: ''
        });
        this.props.handleNewComment();
      });
  }

  render() {
    if (!this.props.userId) {
      return null;
    }

    return (
      <form onSubmit={this.handleSubmit} className="comment-form-container">
        <input
          type="text"
          placeholder="Add a comment"
          value={this.state.body}
          onChange={this.update('body')}
          />
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    );
  }
}

export default withRouter(CommentForm);
