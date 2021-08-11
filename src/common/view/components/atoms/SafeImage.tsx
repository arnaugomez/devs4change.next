import React, { Component } from "react";
import Image, { ImageProps } from "next/image";
import FallbackImage from "../../../../../public/assets/images/hero-1.jpg";

type Props = ImageProps & {
  src?: ImageProps["src"];
  fallback?: ImageProps["src"];
};

interface State {
  hasError: boolean;
}

class SafeImage extends Component<Props, State> {
  private readonly fallback = FallbackImage;
  state = { hasError: false };

  render() {
    const { src, fallback = this.fallback, ...props } = this.props;
    const imageSource = this.state.hasError || !src ? fallback : src;
    const imageProps = {
      ...props,
      onError: this.handleError,
      src: imageSource,
    } as ImageProps;

    // eslint-disable-next-line jsx-a11y/alt-text
    return <Image {...imageProps} />;
  }

  handleError = () => this.setState({ hasError: true });
}

export default SafeImage;
