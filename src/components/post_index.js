import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { loadPosts } from '../actions';


class PostIndex extends Component {
  componentDidMount() {
    const { loadData } = this.props;
    loadData();
  }

  renderPosts() {
    const { posts } = this.props;
    console.log('RenderPosts props', posts);
    return _.map(posts, (post) => {
      return (
        <li key={post.title}>
          {post.title}
        </li>
      );
    });
  }

  render() {
    const { loadData, ...props } = this.props;
    console.log('index props', props);
    return (
      <div className="container-fluid">
        <h3> PostIndex Component </h3>
        <button onClick={() => {}}>clik here</button>
        <ul>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state', state);
  return {
    posts: state.posts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadData: () => dispatch(loadPosts()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
