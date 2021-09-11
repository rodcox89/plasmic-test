// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fRff5NdcfsSzGJTDR4rK8j
// Component: lkuYKDaZ3QV
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
import LinkButton from "../../LinkButton"; // plasmic-import: kCnM-velVmy/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_signup_modal.module.css"; // plasmic-import: fRff5NdcfsSzGJTDR4rK8j/projectcss
import * as sty from "./PlasmicModal.module.css"; // plasmic-import: lkuYKDaZ3QV/css

import demoImage7ZNdV5P0KQu from "./images/demoImage.jpeg"; // plasmic-import: 7ZNdV5P0kQu/picture

export type PlasmicModal__VariantMembers = {};

export type PlasmicModal__VariantsArgs = {};
type VariantPropType = keyof PlasmicModal__VariantsArgs;
export const PlasmicModal__VariantProps = new Array<VariantPropType>();

export type PlasmicModal__ArgsType = {
  heading?: React.ReactNode;
  description?: React.ReactNode;
  beforeSignup?: React.ReactNode;
};

type ArgPropType = keyof PlasmicModal__ArgsType;
export const PlasmicModal__ArgProps = new Array<ArgPropType>(
  "heading",
  "description",
  "beforeSignup"
);

export type PlasmicModal__OverridesType = {
  root?: p.Flex<"div">;
  email?: p.Flex<"input">;
  signupButton?: p.Flex<typeof LinkButton>;
  link?: p.Flex<"a">;
  highlightImage?: p.Flex<"img">;
};

export interface DefaultModalProps {
  heading?: React.ReactNode;
  description?: React.ReactNode;
  beforeSignup?: React.ReactNode;
  className?: string;
}

function PlasmicModal__RenderFunc(props: {
  variants: PlasmicModal__VariantsArgs;
  args: PlasmicModal__ArgsType;
  overrides: PlasmicModal__OverridesType;
  dataFetches?: PlasmicModal__Fetches;
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
      <div className={classNames(defaultcss.all, sty.freeBox__pwozx)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.freeBox__xZwkg)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "How about 10% off?",
            value: args.heading,
            className: classNames(sty.slotHeading)
          })}

          {p.renderPlasmicSlot({
            defaultContents: "Sign up to save on your first order",
            value: args.description
          })}

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.freeBox__oHviQ)}
          >
            <div className={classNames(defaultcss.all, sty.freeBox___9HFq)}>
              <input
                data-plasmic-name={"email"}
                data-plasmic-override={overrides.email}
                className={classNames(defaultcss.input, sty.email)}
                placeholder={"Email Address" as const}
                size={1 as const}
                type={"text" as const}
                value={"" as const}
              />
            </div>

            <LinkButton
              data-plasmic-name={"signupButton"}
              data-plasmic-override={overrides.signupButton}
              className={classNames("__wab_instance", sty.signupButton)}
              href={"#" as const}
            />
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.freeBox___8Zx9K)}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Already have an account?",
              value: args.beforeSignup,
              className: classNames(sty.slotBeforeSignup)
            })}

            <a
              data-plasmic-name={"link"}
              data-plasmic-override={overrides.link}
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link
              )}
              href={"#" as const}
            >
              {"Sign in"}
            </a>
          </p.Stack>
        </p.Stack>
      </div>

      <div className={classNames(defaultcss.all, sty.freeBox__am6R9)}>
        <img
          data-plasmic-name={"highlightImage"}
          data-plasmic-override={overrides.highlightImage}
          alt={""}
          className={classNames(defaultcss.img, sty.highlightImage)}
          src={demoImage7ZNdV5P0KQu}
        />
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "email", "signupButton", "link", "highlightImage"],
  email: ["email"],
  signupButton: ["signupButton"],
  link: ["link"],
  highlightImage: ["highlightImage"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  email: "input";
  signupButton: typeof LinkButton;
  link: "a";
  highlightImage: "img";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicModal__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicModal__VariantsArgs;
    args?: PlasmicModal__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicModal__Fetches;
  } & Omit<PlasmicModal__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicModal__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicModal__ArgProps,
      internalVariantPropNames: PlasmicModal__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicModal__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicModal";
  } else {
    func.displayName = `PlasmicModal.${nodeName}`;
  }
  return func;
}

export const PlasmicModal = Object.assign(
  // Top-level PlasmicModal renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    email: makeNodeComponent("email"),
    signupButton: makeNodeComponent("signupButton"),
    link: makeNodeComponent("link"),
    highlightImage: makeNodeComponent("highlightImage"),

    // Metadata about props expected for PlasmicModal
    internalVariantProps: PlasmicModal__VariantProps,
    internalArgProps: PlasmicModal__ArgProps
  }
);

export default PlasmicModal;
/* prettier-ignore-end */
