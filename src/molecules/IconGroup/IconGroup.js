import React, { Children, Component } from "react";
import PropTypes from "prop-types";
import { isEmpty, mapIndexed } from "../../helpers";
import IconGroupWrapper from "./IconGroupWrapper";
import { Group, Icon } from "../../atoms";

export default class IconGroup extends Component {
  static Icon = Icon;

  static propTypes = {
    icons: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        onClick: PropTypes.func
      })
    ),
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
    ]),
    /** Size of the icons */
    size: PropTypes.oneOf(["small", "medium", "large"])
  };

  static defaultProps = {
    direction: "horizontal",
    icons: []
  };

  renderIcons = () => {
    const { icons, size: groupSize, color: groupColor } = this.props;
    return mapIndexed(
      ({ name, size, tabIndex, is, color, onClick }, index) => (
        <Icon
          is={is}
          tabIndex={tabIndex}
          color={color || groupColor}
          key={index}
          size={size || groupSize}
          name={name}
          onClick={onClick}
        />
      ),
      icons
    );
  };

  renderChildren = () => {
    const { children, size, color } = this.props;
    return Children.map(children, child => {
      return React.cloneElement(child, { size, color, ...child.props });
    });
  };

  render() {
    const { icons, direction, children } = this.props;
    return (
      <IconGroupWrapper {...IconGroupWrapper.styleProps[direction]}>
        {isEmpty(icons) ? this.renderChildren() : this.renderIcons()}
      </IconGroupWrapper>
    );
  }
}
