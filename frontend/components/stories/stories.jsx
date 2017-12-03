import React from 'react';
import { Link } from 'react-router-dom';
import { storyRandomizer } from '../../utils/helpers';

class Stories extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.stories.length) {
      this.props.fetchStories();
    }
  }

  shouldComponentUpdate(nextProps) {
    return this.props.stories.length === 0;
  }

  render() {
    let details = null;
    if (this.props.stories.length) {
      const stories = storyRandomizer(this.props.stories);

      details = (
        <section className="stories-show container">
          <div className="row">
            <div className="col-12">
              <label className="label">FEATURED STORIES</label>
            </div>
            <div className="col-8">
              <div className="story-container">
                <a className="story-link" href={stories[0].site_url} target="_blank">
                  <img className="story-img" src={stories[0].img_url} />
                  <span className="story-title">{stories[0].title}</span>
                </a>
              </div>
            </div>
            <div className="col-4">
              <div className="right-column">
                <div className="story-container-small">
                  <a className="story-link" href={stories[1].site_url} target="_blank">
                    <img className="story-img" src={stories[1].img_url} />
                    <span className="story-title">{stories[1].title}</span>
                  </a>
                </div>
                <div className="story-container-small">
                  <a className="story-link" href={stories[2].site_url} target="_blank">
                    <img className="story-img" src={stories[2].img_url} />
                    <span className="story-title">{stories[2].title}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

    return details;
  }
}

export default Stories;
