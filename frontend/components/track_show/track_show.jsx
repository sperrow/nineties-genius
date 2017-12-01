import React from 'react';

import TrackHeader from './track_header';
import TrackSecondary from './track_secondary';
import Lyrics from './lyrics';
import CommentFormContainer from '../comment_form/comment_form_container';
import CommentsContainer from '../comments/comments_container';
import Annotations from './annotations';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      referent: null,
      track: props.track
    };

    this.handleRandomClick = this.handleRandomClick.bind(this);
    this.handleRefClick = this.handleRefClick.bind(this);
    this.handleNewComment = this.handleNewComment.bind(this);
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.match.params.trackId)
      .then(data => {
        let track = data.track;
        this.setState({ track });
      });
  }

  componentWillReceiveProps(newProps) {
    this.setState({ track: newProps.track });
  }

  handleRandomClick(e) {
    const a = document.getElementsByClassName('annotation-container')[0];
    if (a && !a.contains(e.target) && !e.target.classList.contains('annotation-line')) {
      this.setState({
        referent: null
      });
    }
  }

  handleRefClick(refId) {
    return (e) => {
      e.preventDefault();
      const referent = this.state.track.referents.find(ref => {
        return ref.id === parseInt(refId);
      });
      this.setState({
        referent
      });
    };
  }

  handleNewComment() {
    this.props.fetchTrack(this.props.match.params.trackId)
      .then(data => {
        let track = data.track;
        let referent = null;

        if (this.state.referent) {
          let refId = this.state.referent.id;
          referent = track.referents.find(ref => {
            return ref.id === parseInt(refId);
          });
        }

        this.setState({
          track,
          referent
        });
      });
  }

  render() {
    let details = null;
    if (this.state.track) {
      const track = this.state.track;
      let lyrics = null;
      let comments = null;

      if (track.referents) {
        lyrics =
          <Lyrics
            lyrics={track.lyrics}
            referents={track.referents}
            handleClick={this.handleRefClick}
          />;
      }

      if (track.comments) {
        comments =
          <CommentsContainer
            comments={track.comments}
          />;
      }

      details = (
        <section className="track-show" onClick={this.handleRandomClick}>
          <TrackHeader track={track} />
          <div className="container">
            <div className="row">
              <div className="col-7">
                {lyrics}
                <section className="comments-container">
                  <CommentFormContainer
                    commentableType="Track"
                    commentableId={track.id}
                    handleNewComment={this.handleNewComment}
                  />
                  {comments}
                </section>
              </div>
              <div className="col-5">
                {
                  this.state.referent ?
                  <Annotations
                    referent={this.state.referent}
                    handleNewComment={this.handleNewComment}
                  /> :
                  <TrackSecondary track={track} />
                }
              </div>
            </div>
          </div>
        </section>
      );
    }

    return details;
  }
}

export default TrackShow;
