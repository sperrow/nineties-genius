import React from 'react';

class Annotation extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.unmountMe();
  }

  render() {
    const annotations = this.props.referent.annotations;
    return (
      <div className="annotation-container">
        {
          annotations.map(annotation => (
            <div key={annotation.id} className="row annotation">
              <div className="col-12">
                <h3 className="annotation-heading">Genius Annotation</h3>
                <p>{annotation.body}</p>
                <a href="#" onClick={this.handleClick}>close</a>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default Annotation;
