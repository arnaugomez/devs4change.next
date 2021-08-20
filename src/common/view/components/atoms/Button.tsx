import React, { Component, MouseEventHandler, ReactNode } from "react";
import cn from "classnames";

export interface ButtonProps {
  onClick?: MouseEventHandler;
  children: ReactNode;
  color?: "brand" | "cta" | "black";
  isLink?: boolean;
  type?: "button" | "submit";
  hasBorder?: boolean;
}

const mapColorToDisplayColor: Record<ButtonProps["color"], string> = {
  brand: "brand-600",
  cta: "cta",
  black: "black",
};

export default class Button extends Component<ButtonProps> {
  render() {
    const {
      children,
      color = "brand",
      isLink = false,
      type = "button",
      hasBorder = true,
      ...props
    } = this.props;

    const ButtonTag = isLink ? "a" : "button";
    const displayColor = mapColorToDisplayColor[color];

    return (
      <ButtonTag
        type={type}
        className={cn(
          `px-3.5 py-1.5 rounded bg-white text-${displayColor} hover:bg-${displayColor} hover:text-white truncate`,
          hasBorder && `border border-${displayColor}`
        )}
        {...props}
      >
        {children}
      </ButtonTag>
    );
  }
}
