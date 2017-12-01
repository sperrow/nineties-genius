import { connect } from 'react-redux';
import { fetchStories } from '../../actions/story_actions';
import Stories from './stories';
import { toArray } from '../../reducers/selectors';

const mapStateToProps = state => {
  return {
    stories: toArray(state.entities, 'stories')
  };
};

const mapDispatchToProps = dispatch => ({
  fetchStories: () => dispatch(fetchStories())
});

export default connect(mapStateToProps, mapDispatchToProps)(Stories);
