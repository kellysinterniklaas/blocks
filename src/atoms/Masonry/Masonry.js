import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import MasonryInfinite from "react-masonry-infinite";

export default class Masonry extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    loadMore: PropTypes.func,
    sizes: PropTypes.arrayOf(
      PropTypes.shape({
        mq: PropTypes.string,
        columns: PropTypes.number.isRequired,
        gutter: PropTypes.number.isRequired
      })
    )
  };
  static defaultProps = {
    loadMore: () => null
  };

  state = {
    forcePack: null
  };

  componentDidMount() {
    this.setState({
      forcePack: this.masonryRef.current && this.masonryRef.current.forcePack
    });
  }

  render() {
    this.masonryRef = React.createRef();
    const { sizes, children, loadMore } = this.props;
    return (
      <MasonryInfinite
        ref={this.masonryRef}
        pack={true}
        sizes={sizes}
        loadMore={loadMore}
      >
        {children({ forcePack: this.state.forcePack })}
      </MasonryInfinite>
    );
  }
}
