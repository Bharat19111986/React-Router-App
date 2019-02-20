import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
class PostsIndex extends Component {
  componentDidMount(){
    console.log('It got called');
    this.props.fetchPosts();
  }


  render() {
    return (
      <div>React simple starter Posts Index</div>
    );
  }
}


export default connect(null,{fetchPosts})(PostsIndex);
