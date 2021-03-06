// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fRff5NdcfsSzGJTDR4rK8j
// Component: WN-oEUSqkb
import * as React from "react";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_signup_modal.module.css"; // plasmic-import: fRff5NdcfsSzGJTDR4rK8j/projectcss
import * as sty from "./PlasmicTest.module.css"; // plasmic-import: WN-oEUSqkb/css

import AndroidPhoneVsIcon from "./icons/PlasmicIcon__AndroidPhoneVs"; // plasmic-import: QtFcZpT99A/icon

export type PlasmicTest__VariantMembers = {};

export type PlasmicTest__VariantsArgs = {};
type VariantPropType = keyof PlasmicTest__VariantsArgs;
export const PlasmicTest__VariantProps = new Array<VariantPropType>();

export type PlasmicTest__ArgsType = {};
type ArgPropType = keyof PlasmicTest__ArgsType;
export const PlasmicTest__ArgProps = new Array<ArgPropType>();

export type PlasmicTest__OverridesType = {
  root?: p.Flex<"div">;
  elementButtonoutlineleftIconmainActive?: p.Flex<"div">;
  rectangle?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
};

export interface DefaultTestProps {
  className?: string;
}

function PlasmicTest__RenderFunc(props: {
  variants: PlasmicTest__VariantsArgs;
  args: PlasmicTest__ArgsType;
  overrides: PlasmicTest__OverridesType;
  dataFetches?: PlasmicTest__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        data-plasmic-name={"elementButtonoutlineleftIconmainActive"}
        data-plasmic-override={overrides.elementButtonoutlineleftIconmainActive}
        className={classNames(
          defaultcss.all,
          sty.elementButtonoutlineleftIconmainActive
        )}
      >
        <div
          data-plasmic-name={"rectangle"}
          data-plasmic-override={overrides.rectangle}
          className={classNames(defaultcss.all, sty.rectangle)}
        />

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.freeBox__tPm7D)}
        >
          <AndroidPhoneVsIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(defaultcss.all, sty.svg)}
            role={"img"}
          />

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.text__tl25A
            )}
          >
            {"Mobile"}
          </div>
        </p.Stack>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "elementButtonoutlineleftIconmainActive", "rectangle", "svg"],
  elementButtonoutlineleftIconmainActive: [
    "elementButtonoutlineleftIconmainActive",
    "rectangle",
    "svg"
  ],
  rectangle: ["rectangle"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  elementButtonoutlineleftIconmainActive: "div";
  rectangle: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTest__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTest__VariantsArgs;
    args?: PlasmicTest__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicTest__Fetches;
  } & Omit<PlasmicTest__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTest__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTest__ArgProps,
      internalVariantPropNames: PlasmicTest__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicTest__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTest";
  } else {
    func.displayName = `PlasmicTest.${nodeName}`;
  }
  return func;
}

export const PlasmicTest = Object.assign(
  // Top-level PlasmicTest renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    elementButtonoutlineleftIconmainActive: makeNodeComponent(
      "elementButtonoutlineleftIconmainActive"
    ),
    rectangle: makeNodeComponent("rectangle"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicTest
    internalVariantProps: PlasmicTest__VariantProps,
    internalArgProps: PlasmicTest__ArgProps
  }
);

export default PlasmicTest;
/* prettier-ignore-end */
