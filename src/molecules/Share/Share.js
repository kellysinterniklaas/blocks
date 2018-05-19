import React, { Component } from "react";
import PropTypes from "prop-types";
import { contains, filter, compose, map } from "ramda";
import { Link, Icon } from "../../atoms";
import { IconGroup } from "../../molecules";
import ShareWrapper from "./ShareWrapper";
import { CopyToClipboard } from "react-copy-to-clipboard";

const twitter = (text, url) => {
  return window.open(
    `http://twitter.com/share?url=${url}&text=${text}`,
    "tshare",
    "height=260,width=550,resizable=0,toolbar=0,menubar=0,status=0,location=0"
  );
};

const facebook = (text, url) => {
  return window.open(
    `http://facebook.com/sharer.php?u=${url}`,
    "fbshare",
    "height=260,width=550,resizable=0,toolbar=0,menubar=0,status=0,location=0"
  );
};

class Share extends Component {
  handlers = {
    facebook,
    twitter
  };

  renderIcons() {
    const { providers, url, text } = this.props;
    const isProvider = provider => provider !== "url";
    const socialProviders = filter(isProvider, providers);
    return map(
      name => (
        <Icon
          onClick={() => this.handlers[name](text, url)}
          size="lg"
          key={name}
          name={name}
        />
      ),
      socialProviders
    );
  }

  renderGetUrl() {
    const { url } = this.props;
    return (
      <CopyToClipboard text={url}>
        <Link>Get Url</Link>
      </CopyToClipboard>
    );
  }

  showUrl() {
    const { providers } = this.props;
    return contains("url", providers);
  }

  render() {
    const { url } = this.props;
    const showUrl = this.showUrl();
    return (
      <ShareWrapper>
        <IconGroup>{this.renderIcons()}</IconGroup>
        {showUrl && this.renderGetUrl()}
      </ShareWrapper>
    );
  }
}

Share.propTypes = {
  providers: PropTypes.arrayOf(PropTypes.oneOf(["facebook", "twitter", "url"]))
    .isRequired,
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Share;
