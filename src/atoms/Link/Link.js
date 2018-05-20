import React, { Component } from "react";
import PropTypes from "prop-types";
import { formatTitle } from "../../helpers";
import LinkWrapper from "./LinkWrapper";

/**
 * The link component for the Offcourse project
 */

class Link extends Component {
  render() {
    const { href, children, onClick, disabled } = this.props;
    return (
      <LinkWrapper
        onClick={!disabled ? onClick : () => {}}
        href={!disabled ? href : undefined}
        disabled={disabled}
      >
        {formatTitle(children)}
      </LinkWrapper>
    );
  }
}

Link.propTypes = {
  /** determines if the link should be disabled */
  disabled: PropTypes.bool,
  /** the text that is displayed on the link */
  children: PropTypes.string,
  /** code that the link should execute when clicked */
  onClick: PropTypes.func,
  /** a url that the link should link to, automatically turns the link into the basic type */
  href: PropTypes.string
};

Link.defaultProps = {
  disabled: false,
  type: "link"
};

export default Link;
