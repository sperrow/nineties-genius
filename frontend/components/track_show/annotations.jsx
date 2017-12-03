import React from 'react';
import { dateAgoFormatter } from '../../utils/helpers';
import CommentFormContainer from '../comment_form/comment_form_container';
import CommentsContainer from '../comments/comments_container';
import LikesContainer from '../likes/likes_container';

class Annotations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      annotations: props.referent.annotations
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({annotations: newProps.referent.annotations});
  }

  render() {
    const annotations = this.state.annotations;
    let line = document.getElementsByClassName(`ref-${this.props.referent.id}`)[0];
    let top = line.offsetTop - 80;
    top = top >= 0 ? top : 0;

    return (
      <div className="annotation-container" style={{top: top}}>
        <div className="arrow-container">
          <div className="outer-arrow"></div>
          <div className="inner-arrow"></div>
          </div>
        {
          annotations.map(annotation => (
            <div key={annotation.id} className="row">
              <div className="col-12">
                <div className="annotation-heading">
                  <span>{annotation.author}</span>
                  <span>{dateAgoFormatter(annotation.created_at)} ago</span>
                </div>
                <p>{annotation.body}</p>
                <LikesContainer likeTarget={annotation} likeType="annotation" />
                <section className="comments-container">
                  <CommentFormContainer
                    commentableType="Annotation"
                    commentableId={annotation.id}
                    handleNewComment={this.props.handleNewComment}
                  />
                <CommentsContainer
                    comments={annotation.comments}
                  />
                </section>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default Annotations;
