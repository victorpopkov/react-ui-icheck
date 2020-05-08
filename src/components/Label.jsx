import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Label extends Component {
  constructor(props) {
    super(props);

    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(event, isHovered = true) {
    const { disabled, handleHover, isMobile, labelHover } = this.props;

    if (disabled) return;

    if (handleHover && labelHover && !isHovered) {
      handleHover(event, false);
    } else if (handleHover) {
      handleHover(event, isHovered);
    }

    if (isMobile) event.stopPropagation();
  }

  renderLabel() {
    const { label, labelChildren, labelTag, labelTagClassName } = this.props;

    if (!React.isValidElement(label)) {
      const Tag = labelTag;

      if (labelChildren) {
        return <Tag className={labelTagClassName}>{labelChildren}</Tag>;
      }

      return (
        // eslint-disable-next-line react/no-danger
        <Tag
          className={labelTagClassName}
          dangerouslySetInnerHTML={{ __html: label }}
        />
      );
    }

    return null;
  }

  render() {
    const { children, labelClassName } = this.props;

    return (
      <label
        className={labelClassName || null}
        onBlur={(event) => this.handleHover(event, false)}
        onFocus={this.handleHover}
        onMouseOut={(event) => this.handleHover(event, false)}
        onMouseOver={this.handleHover}
        onTouchEnd={(event) => this.handleHover(event, false)}
        onTouchStart={this.handleHover}
      >
        {children}
        {this.renderLabel()}
      </label>
    );
  }
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
  handleHover: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  isMobile: PropTypes.bool,
  label: PropTypes.node,
  labelChildren: PropTypes.node,
  labelClassName: PropTypes.string,
  labelHover: PropTypes.bool,
  labelTag: PropTypes.string,
  labelTagClassName: PropTypes.string,
};

Label.defaultProps = {
  disabled: false,
  isMobile: false,
  label: null,
  labelChildren: null,
  labelClassName: null,
  labelHover: true,
  labelTag: 'span',
  labelTagClassName: null,
};

export default Label;
