// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wtHXqYo4cHDw1QkkqeK42j
// Component: LrmatnizYfwG

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Button from "../../Button"; // plasmic-import: 3cOksGmh6ZLL/component

import { useScreenVariants as useScreenVariantsll9IYhMgpk8F } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: ll9iYHMgpk8f/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: wtHXqYo4cHDw1QkkqeK42j/projectcss
import sty from "./PlasmicTvPlusGalleryItem.module.css"; // plasmic-import: LrmatnizYfwG/css

import Icon10Icon from "./icons/PlasmicIcon__Icon10"; // plasmic-import: LPaptpw6kk-m/icon

createPlasmicElementProxy;

export type PlasmicTvPlusGalleryItem__VariantMembers = {};
export type PlasmicTvPlusGalleryItem__VariantsArgs = {};
type VariantPropType = keyof PlasmicTvPlusGalleryItem__VariantsArgs;
export const PlasmicTvPlusGalleryItem__VariantProps =
  new Array<VariantPropType>();

export type PlasmicTvPlusGalleryItem__ArgsType = {
  imageUrl?: React.ComponentProps<typeof PlasmicImg__>["src"];
  genre?: React.ReactNode;
  description?: React.ReactNode;
};
type ArgPropType = keyof PlasmicTvPlusGalleryItem__ArgsType;
export const PlasmicTvPlusGalleryItem__ArgProps = new Array<ArgPropType>(
  "imageUrl",
  "genre",
  "description"
);

export type PlasmicTvPlusGalleryItem__OverridesType = {
  root?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  button?: Flex__<typeof Button>;
  icon?: Flex__<"svg">;
};

export interface DefaultTvPlusGalleryItemProps {
  imageUrl?: React.ComponentProps<typeof PlasmicImg__>["src"];
  genre?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTvPlusGalleryItem__RenderFunc(props: {
  variants: PlasmicTvPlusGalleryItem__VariantsArgs;
  args: PlasmicTvPlusGalleryItem__ArgsType;
  overrides: PlasmicTvPlusGalleryItem__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          imageUrl:
            "https://is2-ssl.mzstatic.com/image/thumb/z9B-5Ow-sggMXLJGroT1Lg/689x387.jpg"
        },
        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsll9IYhMgpk8F()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <PlasmicImg__
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img)}
        displayHeight={"100%"}
        displayMaxHeight={"none"}
        displayMaxWidth={"100%"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"100%"}
        src={args.imageUrl}
      />

      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__eTxj4)}
      >
        <Button
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          bold={true}
          className={classNames("__wab_instance", sty.button)}
          iconLeft={
            <Icon10Icon
              data-plasmic-name={"icon"}
              data-plasmic-override={overrides.icon}
              className={classNames(projectcss.all, sty.icon)}
              role={"img"}
            />
          }
          rounded={true}
          size={"large"}
          text={
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__rm6IV
              )}
            >
              {"Stream now"}
            </div>
          }
          type={"_default"}
          withIcons={["withSuffixIcon"]}
        />

        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__gb7Av)}
        >
          <h5
            className={classNames(projectcss.all, projectcss.h5, sty.h5__abKaJ)}
          >
            {renderPlasmicSlot({
              defaultContents: "Thriller",
              value: args.genre,
              className: classNames(sty.slotTargetGenre)
            })}
          </h5>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__dLnb
            )}
          >
            {"."}
          </div>
          <h5
            className={classNames(projectcss.all, projectcss.h5, sty.h5___3JT5)}
          >
            {renderPlasmicSlot({
              defaultContents: "Let them think they're in control.",
              value: args.description,
              className: classNames(sty.slotTargetDescription)
            })}
          </h5>
        </Stack__>
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "button", "icon"],
  img: ["img"],
  button: ["button", "icon"],
  icon: ["icon"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof PlasmicImg__;
  button: typeof Button;
  icon: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTvPlusGalleryItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTvPlusGalleryItem__VariantsArgs;
    args?: PlasmicTvPlusGalleryItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTvPlusGalleryItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTvPlusGalleryItem__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicTvPlusGalleryItem__ArgProps,
          internalVariantPropNames: PlasmicTvPlusGalleryItem__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTvPlusGalleryItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTvPlusGalleryItem";
  } else {
    func.displayName = `PlasmicTvPlusGalleryItem.${nodeName}`;
  }
  return func;
}

export const PlasmicTvPlusGalleryItem = Object.assign(
  // Top-level PlasmicTvPlusGalleryItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    button: makeNodeComponent("button"),
    icon: makeNodeComponent("icon"),

    // Metadata about props expected for PlasmicTvPlusGalleryItem
    internalVariantProps: PlasmicTvPlusGalleryItem__VariantProps,
    internalArgProps: PlasmicTvPlusGalleryItem__ArgProps
  }
);

export default PlasmicTvPlusGalleryItem;
/* prettier-ignore-end */
