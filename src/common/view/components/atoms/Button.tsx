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

    return (
      <ButtonTag
        type={type}
        className={cn(
          `px-3.5 py-1.5 rounded bg-white text-${color} hover:bg-${color} hover:text-white`,
          hasBorder && `border border-${color}`
        )}
        {...props}
      >
        {children}
      </ButtonTag>
    );
  }
}
