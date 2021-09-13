// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AndroidPhoneVsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AndroidPhoneVsIcon(props: AndroidPhoneVsIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M8 1h8a3 3 0 013 3v16a3 3 0 01-3 3H8a3 3 0 01-3-3V4a3 3 0 013-3zm8 20a1 1 0 001-1V4a1 1 0 00-1-1h-1.6a1 1 0 00-1 .76l-.12.48a1 1 0 01-1 .76h-.44a1 1 0 01-1-.76l-.12-.48a1 1 0 00-1-.76H8a1 1 0 00-1 1v16a1 1 0 001 1h8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AndroidPhoneVsIcon;
/* prettier-ignore-end */
