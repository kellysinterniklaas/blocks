import React, { Component } from "react";
import PropTypes from "prop-types";
import { map, addIndex, isEmpty } from "ramda";
import { Link } from "../../atoms";
import LinkGroupWrapper from "./LinkGroupWrapper";

const mapIndexed = addIndex(map);

export default class LinkGroup extends Component {
  static Link = Link;

  static propTypes = {
    direction: PropTypes.oneOf(["horizontal", "vertical"]),
    links: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        href: PropTypes.string,
        onClick: PropTypes.func
      })
    ),
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
    ])
  };

  static defaultProps = {
    links: [],
    direction: "horizontal"
  };

  renderLinks = () => {
    const { links } = this.props;
    return mapIndexed(
      ({ title, href, onClick }, index) => (
        <Link key={index} href={href} onClick={onClick}>
          {title}
        </Link>
      ),
      links
    );
  };

  render() {
    const { links, children, direction } = this.props;
    return (
      <LinkGroupWrapper
        flexDirection={direction === "horizontal" ? "row" : "column"}
      >
        {isEmpty(links) ? children : this.renderLinks()}
      </LinkGroupWrapper>
    );
  }
}
